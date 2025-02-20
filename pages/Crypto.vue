<script setup lang="ts">

// Статические данные для бирж
const exchanges = [
  { name: 'Binance' },
  { name: 'CoinEx' },
  { name: 'KuCoin' },
  { name: 'Kraken' },
  { name: 'FTX' },
  { name: 'Bitfinex' }
];

// Статические данные для криптовалют
const cryptos = [
  { name: 'Bitcoin', prices: { Binance: '27,000', CoinEx: '26,900', KuCoin: '27,100', Kraken: '27,200', FTX: '26,950', Bitfinex: '27,050' } },
  { name: 'Ethereum', prices: { Binance: '1,800', CoinEx: '1,820', KuCoin: '1,790', Kraken: '1,810', FTX: '1,800', Bitfinex: '1,815' } },
  { name: 'Binance Coin', prices: { Binance: '310', CoinEx: '312', KuCoin: '315', Kraken: '308', FTX: '310', Bitfinex: '311' } },
  { name: 'Solana', prices: { Binance: '100', CoinEx: '98', KuCoin: '101', Kraken: '102', FTX: '99', Bitfinex: '100' } },
  { name: 'Cardano', prices: { Binance: '0.90', CoinEx: '0.91', KuCoin: '0.92', Kraken: '0.89', FTX: '0.90', Bitfinex: '0.91' } },
  { name: 'Polkadot', prices: { Binance: '6.5', CoinEx: '6.6', KuCoin: '6.4', Kraken: '6.7', FTX: '6.55', Bitfinex: '6.6' } }
];

// Стейт для выбранной биржи
const selectedExchange = ref('Binance');
</script>

<template>
  <div class="flex gap-10 p-5 bg-zinc-900 min-h-screen">
    <!-- Левая панель с выбором биржи -->
    <div class="w-1/4 bg-zinc-800 p-5 rounded-lg">
      <div class="space-y-4">
        <button
            v-for="exchange in exchanges"
            :key="exchange.name"
            @click="selectedExchange = exchange.name"
            class="w-full py-2 px-4 bg-zinc-700 text-white rounded-lg hover:bg-zinc-600 transition-all duration-300"
        >
          {{ exchange.name }}
        </button>
      </div>
    </div>

    <!-- Центральная панель с курсами криптовалют -->
    <div class="flex-1 bg-zinc-800 p-5 rounded-lg">
      <h2 class="text-xl text-white mb-5">Курсы криптовалют</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <!-- Криптовалюты -->
        <div
            v-for="crypto in cryptos"
            :key="crypto.name"
            class="bg-zinc-700 p-4 rounded-lg hover:bg-zinc-600 transition-all duration-300"
        >
          <h3 class="text-white text-xl mb-2">{{ crypto.name }}</h3>
          <p class="text-white text-lg">Цена на {{ selectedExchange }}: {{ crypto.prices[selectedExchange] }} USD</p>
        </div>
      </div>
    </div>
  </div>
</template>

