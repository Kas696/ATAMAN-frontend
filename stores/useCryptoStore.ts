import { defineStore } from "pinia";
import { useCryptoIconsStore } from "./useImagesStore";
import type { Crypto, CryptoData, CryptoMarketData, CryptoEntry } from "~/types/types";

export const useCryptoStore = defineStore("crypto", () => {
    const socket = ref<WebSocket | null>(null);
    const isSocketConnected = ref(false);
    const cryptos = ref<CryptoData>({});

    // Получаем store с иконками
    const cryptoIconsStore = useCryptoIconsStore();

    const connectWebSocket = () => {
        if (isSocketConnected.value) return;

        socket.value = new WebSocket("ws://localhost:8000/ws");

        socket.value.onopen = () => {
            isSocketConnected.value = true;
            console.log("✅ WebSocket подключен.");
        };

        socket.value.onmessage = (event) => {
            console.log("📩 Сообщение от сервера:", event.data);
            try {
                const data = JSON.parse(event.data);

                if (!data || typeof data !== "object") {
                    console.error("❌ Неверный формат данных от WebSocket");
                    return;
                }

                Object.entries(data).forEach(([exchange, exchangeData]) => {
                    if (!exchangeData || typeof exchangeData !== "object") return;

                    if (!cryptos.value[exchange]) {
                        cryptos.value[exchange] = {};
                    }

                    Object.entries(exchangeData).forEach(([crypto, cryptoData]) => {
                        console.log(`🔄 Обновляем ${crypto} на ${exchange}:`, cryptoData);

                        const cryptoKey = crypto as Crypto;
                        const entry: CryptoEntry = {
                            image: cryptoIconsStore.getIcon(cryptoKey),
                            data: cryptoData as CryptoMarketData,
                        };

                        cryptos.value[exchange][cryptoKey] = entry;
                    });
                });
            } catch (error) {
                console.error("❌ Ошибка при обработке WebSocket данных:", error);
            }
        };

        socket.value.onerror = (error) => {
            console.error("❌ WebSocket ошибка:", error);
        };

        socket.value.onclose = () => {
            isSocketConnected.value = false;
            console.log("🔌 WebSocket закрыт. Переподключение через 5 секунд...");
            setTimeout(connectWebSocket, 5000);
        };
    };

    const disconnectWebSocket = () => {
        if (socket.value) {
            socket.value.close();
        }
    };

    return { cryptos, connectWebSocket, disconnectWebSocket, isSocketConnected };
});
