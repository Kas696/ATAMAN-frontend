<script setup>
import { useCryptoStore } from '~/stores/useCryptoStore';

const cryptoStore = useCryptoStore();

// Реактивное значение для выбранной биржи
const exchange = ref('coinex'); // Начальный выбор биржи

onMounted(() => {
  console.log("Подключаем WebSocket...");
  cryptoStore.connectWebSocket();
});

onUnmounted(() => {
  console.log("Отключаем WebSocket...");
  cryptoStore.disconnectWebSocket();
});

// Функция для получения данных для криптовалюты (BTC, ETH и т.д.) по выбранной бирже
const getCryptoData = (crypto) => {
  return computed(() => {
    // Получаем данные для выбранной биржи и криптовалюты
    const exchangeData = cryptoStore.cryptos[exchange.value];
    if (!exchangeData || !exchangeData[crypto]) {
      return {}; // Вернем пустой объект, если данных нет
    }
    return exchangeData[crypto].data;
  });
};

// Для каждого криптовалютного символа (например, 'btc', 'eth')
const btcData = getCryptoData('btc');
const ethData = getCryptoData('eth');
const ltcData = getCryptoData('ltc');
const solData = getCryptoData('sol');
const cetData = getCryptoData('cet');
const xrpData = getCryptoData('xrp');

// Используем watch для отслеживания изменений в cryptoStore.cryptos
watch(
    () => cryptoStore.cryptos,
    (newValue) => {
      console.log('Данные обновились:', newValue);
      // Здесь можно добавить дополнительные действия, если нужно
    },
    { deep: true } // Глубокое отслеживание изменений
);

// Реактивно отслеживаем изменения в выбранной бирже
watch(
    exchange,
    (newExchange) => {
      console.log('Биржа изменена на:', newExchange);
      // Это обеспечит пересоздание вычисляемых свойств при смене биржи
    }
);
</script>

<template>
  <div>
    <!-- Динамическая смена биржи -->
    <div>
      <label for="exchange">Выберите биржу:</label>
      <select v-model="exchange" id="exchange">
        <option value="coinex">CoinEx</option>
        <option value="binance">Binance</option>
        <option value="kraken">Kraken</option>
      </select>
    </div>

    <!-- Данные для BTC -->
    <div>
      <h2>Bitcoin ({{ exchange }}):</h2>
      <p v-if="!btcData">Загрузка...</p>
      <p v-else>
        <strong>Цена:</strong> {{ btcData.close || 'Н/A' }}<br>
        <strong>Высокая:</strong> {{ btcData.high || 'Н/A' }}<br>
        <strong>Низкая:</strong> {{ btcData.low || 'Н/A' }}<br>
        <strong>Объем:</strong> {{ btcData.volume || 'Н/A' }}<br>
        <strong>Объем покупок:</strong> {{ btcData.volume_buy || 'Н/A' }}<br>
        <strong>Объем продаж:</strong> {{ btcData.volume_sell || 'Н/A' }}<br>
      </p>
    </div>

    <!-- Данные для ETH -->
    <div>
      <h2>Ethereum ({{ exchange }}):</h2>
      <p v-if="!ethData">Загрузка...</p>
      <p v-else>
        <strong>Цена:</strong> {{ ethData.close || 'Н/A' }}<br>
        <strong>Высокая:</strong> {{ ethData.high || 'Н/A' }}<br>
        <strong>Низкая:</strong> {{ ethData.low || 'Н/A' }}<br>
        <strong>Объем:</strong> {{ ethData.volume || 'Н/A' }}<br>
        <strong>Объем покупок:</strong> {{ ethData.volume_buy || 'Н/A' }}<br>
        <strong>Объем продаж:</strong> {{ ethData.volume_sell || 'Н/A' }}<br>
      </p>
    </div>

    <!-- Данные для LTC -->
    <div>
      <h2>Litecoin ({{ exchange }}):</h2>
      <p v-if="!ltcData">Загрузка...</p>
      <p v-else>
        <strong>Цена:</strong> {{ ltcData.close || 'Н/A' }}<br>
        <strong>Высокая:</strong> {{ ltcData.high || 'Н/A' }}<br>
        <strong>Низкая:</strong> {{ ltcData.low || 'Н/A' }}<br>
        <strong>Объем:</strong> {{ ltcData.volume || 'Н/A' }}<br>
        <strong>Объем покупок:</strong> {{ ltcData.volume_buy || 'Н/A' }}<br>
        <strong>Объем продаж:</strong> {{ ltcData.volume_sell || 'Н/A' }}<br>
      </p>
    </div>

    <!-- Данные для SOL -->
    <div>
      <h2>Solana ({{ exchange }}):</h2>
      <p v-if="!solData">Загрузка...</p>
      <p v-else>
        <strong>Цена:</strong> {{ solData.close || 'Н/A' }}<br>
        <strong>Высокая:</strong> {{ solData.high || 'Н/A' }}<br>
        <strong>Низкая:</strong> {{ solData.low || 'Н/A' }}<br>
        <strong>Объем:</strong> {{ solData.volume || 'Н/A' }}<br>
        <strong>Объем покупок:</strong> {{ solData.volume_buy || 'Н/A' }}<br>
        <strong>Объем продаж:</strong> {{ solData.volume_sell || 'Н/A' }}<br>
      </p>
    </div>

    <!-- Повторите для других криптовалют (cet, xrp) -->
    <div>
      <h2>CET ({{ exchange }}):</h2>
      <p v-if="!cetData">Загрузка...</p>
      <p v-else>
        <strong>Цена:</strong> {{ cetData.close || 'Н/A' }}<br>
        <strong>Высокая:</strong> {{ cetData.high || 'Н/A' }}<br>
        <strong>Низкая:</strong> {{ cetData.low || 'Н/A' }}<br>
        <strong>Объем:</strong> {{ cetData.volume || 'Н/A' }}<br>
        <strong>Объем покупок:</strong> {{ cetData.volume_buy || 'Н/A' }}<br>
        <strong>Объем продаж:</strong> {{ cetData.volume_sell || 'Н/A' }}<br>
      </p>
    </div>

    <div>
      <h2>XRP ({{ exchange }}):</h2>
      <p v-if="!xrpData">Загрузка...</p>
      <p v-else>
        <strong>Цена:</strong> {{ xrpData.close || 'Н/A' }}<br>
        <strong>Высокая:</strong> {{ xrpData.high || 'Н/A' }}<br>
        <strong>Низкая:</strong> {{ xrpData.low || 'Н/A' }}<br>
        <strong>Объем:</strong> {{ xrpData.volume || 'Н/A' }}<br>
        <strong>Объем покупок:</strong> {{ xrpData.volume_buy || 'Н/A' }}<br>
        <strong>Объем продаж:</strong> {{ xrpData.volume_sell || 'Н/A' }}<br>
      </p>
    </div>
  </div>
</template>
