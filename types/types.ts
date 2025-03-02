// Тип криптовалют
export type Crypto = "btc" | "eth" | "sol" | "cet" | "ltc" | "xrp";

// Структура данных для каждой криптовалюты с биржи
export interface CryptoMarketData {
    close: string;
    high: string;
    low: string;
    volume: string;
    volume_buy: string;
    volume_sell: string;
    market: string;
    open: string;
    period: string;
    value: string;
}

// **ОБНОВЛЕННЫЙ ТИП**: включает данные + иконку
export interface CryptoEntry {
    image: string;
    data: CryptoMarketData;
}

// **Основной тип данных криптовалют**
export interface CryptoData {
    [exchange: string]: {
        [crypto in Crypto]?: CryptoEntry;
    };
}
