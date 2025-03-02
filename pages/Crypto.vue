<script setup lang="ts">
import btcIcon from '~/assets/btc.svg';
import ethIcon from '~/assets/eth.svg';
import solIcon from '~/assets/sol.svg';
import cetIcon from '~/assets/cet.svg';
import ltcIcon from '~/assets/ltc.svg';
import xrpIcon from '~/assets/xrp.svg';
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
  { name: 'Bitcoin',
    prices: {
      Binance: '27,000', CoinEx: '26,900', KuCoin: '27,100', Kraken: '27,200', FTX: '26,950', Bitfinex: '27,050'
    },
    volume: {
      Binance: '500M', CoinEx: '450M', KuCoin: '480M', Kraken: '470M', FTX: '460M', Bitfinex: '490M'
    },
    change24h: {
      Binance: '+1.5%', CoinEx: '+1.3%', KuCoin: '+1.6%', Kraken: '+1.4%', FTX: '+1.2%', Bitfinex: '+1.5%'
    },
    high24h: {
      Binance: '27,500', CoinEx: '27,400', KuCoin: '27,600', Kraken: '27,700', FTX: '27,550', Bitfinex: '27,600'
    },
    low24h: {
      Binance: '26,700', CoinEx: '26,600', KuCoin: '26,800', Kraken: '26,900', FTX: '26,750', Bitfinex: '26,800'
    },
    marketCap: {
      Binance: '500B', CoinEx: '480B', KuCoin: '510B', Kraken: '490B', FTX: '470B', Bitfinex: '495B'
    },
    image: btcIcon
  },
  { name: 'Ethereum',
    prices: {
      Binance: '1,800', CoinEx: '1,820', KuCoin: '1,790', Kraken: '1,810', FTX: '1,800', Bitfinex: '1,815'
    },
    volume: {
      Binance: '200M', CoinEx: '210M', KuCoin: '215M', Kraken: '190M', FTX: '205M', Bitfinex: '210M'
    },
    change24h: {
      Binance: '+2.3%', CoinEx: '+2.1%', KuCoin: '+2.0%', Kraken: '+2.5%', FTX: '+2.2%', Bitfinex: '+2.1%'
    },
    high24h: {
      Binance: '1,850', CoinEx: '1,840', KuCoin: '1,860', Kraken: '1,860', FTX: '1,850', Bitfinex: '1,860'
    },
    low24h: {
      Binance: '1,780', CoinEx: '1,790', KuCoin: '1,770', Kraken: '1,780', FTX: '1,785', Bitfinex: '1,780'
    },
    marketCap: {
      Binance: '200B', CoinEx: '210B', KuCoin: '215B', Kraken: '205B', FTX: '200B', Bitfinex: '210B'
    },
    image: ethIcon
  },
  { name: 'Solana',
    prices: {
      Binance: '100', CoinEx: '98', KuCoin: '101', Kraken: '102', FTX: '99', Bitfinex: '100'
    },
    volume: {
      Binance: '50M', CoinEx: '55M', KuCoin: '60M', Kraken: '48M', FTX: '52M', Bitfinex: '55M'
    },
    change24h: {
      Binance: '+3.0%', CoinEx: '+2.8%', KuCoin: '+3.2%', Kraken: '+3.1%', FTX: '+3.0%', Bitfinex: '+3.1%'
    },
    high24h: {
      Binance: '105', CoinEx: '104', KuCoin: '107', Kraken: '108', FTX: '106', Bitfinex: '107'
    },
    low24h: {
      Binance: '95', CoinEx: '94', KuCoin: '96', Kraken: '97', FTX: '95', Bitfinex: '96'
    },
    marketCap: {
      Binance: '90B', CoinEx: '85B', KuCoin: '92B', Kraken: '88B', FTX: '90B', Bitfinex: '89B'
    },
    image: solIcon
  },
  { name: 'CET',
    prices: {
      Binance: '25', CoinEx: '26', KuCoin: '27', Kraken: '24', FTX: '25', Bitfinex: '26'
    },
    volume: {
      Binance: '30M', CoinEx: '35M', KuCoin: '40M', Kraken: '32M', FTX: '33M', Bitfinex: '35M'
    },
    change24h: {
      Binance: '+1.8%', CoinEx: '+1.7%', KuCoin: '+2.0%', Kraken: '+1.5%', FTX: '+1.9%', Bitfinex: '+1.8%'
    },
    high24h: {
      Binance: '28', CoinEx: '27.5', KuCoin: '29', Kraken: '27', FTX: '28', Bitfinex: '28.5'
    },
    low24h: {
      Binance: '24', CoinEx: '23.5', KuCoin: '24.5', Kraken: '23', FTX: '24', Bitfinex: '24'
    },
    marketCap: {
      Binance: '10B', CoinEx: '9B', KuCoin: '11B', Kraken: '10.5B', FTX: '10B', Bitfinex: '10B'
    },
    image: cetIcon
  },
  { name: 'Litecoin',
    prices: {
      Binance: '180', CoinEx: '185', KuCoin: '190', Kraken: '178', FTX: '182', Bitfinex: '185'
    },
    volume: {
      Binance: '20M', CoinEx: '25M', KuCoin: '30M', Kraken: '22M', FTX: '23M', Bitfinex: '25M'
    },
    change24h: {
      Binance: '+0.5%', CoinEx: '+0.3%', KuCoin: '+0.8%', Kraken: '+0.4%', FTX: '+0.6%', Bitfinex: '+0.5%'
    },
    high24h: {
      Binance: '190', CoinEx: '195', KuCoin: '200', Kraken: '188', FTX: '190', Bitfinex: '190'
    },
    low24h: {
      Binance: '170', CoinEx: '168', KuCoin: '175', Kraken: '160', FTX: '165', Bitfinex: '170'
    },
    marketCap: {
      Binance: '12B', CoinEx: '13B', KuCoin: '14B', Kraken: '11B', FTX: '12B', Bitfinex: '13B'
    },
    image: ltcIcon
  },
  { name: 'XRP',
    prices: {
      Binance: '340', CoinEx: '330', KuCoin: '350', Kraken: '345', FTX: '340', Bitfinex: '335'
    },
    volume: {
      Binance: '45M', CoinEx: '50M', KuCoin: '55M', Kraken: '47M', FTX: '48M', Bitfinex: '50M'
    },
    change24h: {
      Binance: '+2.0%', CoinEx: '+1.8%', KuCoin: '+2.1%', Kraken: '+2.0%', FTX: '+2.0%', Bitfinex: '+2.2%'
    },
    high24h: {
      Binance: '355', CoinEx: '345', KuCoin: '360', Kraken: '350', FTX: '355', Bitfinex: '355'
    },
    low24h: {
      Binance: '330', CoinEx: '325', KuCoin: '335', Kraken: '320', FTX: '325', Bitfinex: '330'
    },
    marketCap: {
      Binance: '8B', CoinEx: '7.5B', KuCoin: '8.5B', Kraken: '8B', FTX: '7.8B', Bitfinex: '8B'
    },
    image: xrpIcon
  }
];

const selectedExchange = ref('Binance');
</script>

<template>
  <div class="flex justify-center items-center bg-zinc-900 py-10">
    <!-- Контейнер для всего контента с максимальной шириной -->
    <div class="w-full max-w-7xl flex justify-center gap-10 px-5">
      <!-- Левая панель с выбором биржи -->
      <div class="w-1/6 bg-zinc-800 p-5 rounded-lg flex h-1/2">
        <div class="space-y-4">
          <button
              v-for="exchange in exchanges"
              :key="exchange.name"
              @click="selectedExchange = exchange.name"
              :class="[
              'w-full py-2 px-4 rounded-lg',
              selectedExchange === exchange.name ? 'bg-zinc-600 text-amber-200' : 'bg-zinc-700 ',
              'hover:bg-zinc-600'
            ]"
          >
            {{ exchange.name }}
          </button>
        </div>
      </div>

      <!-- Центральная панель с курсами криптовалют -->
      <div class="flex-1 bg-zinc-800 p-5 rounded-lg">
        <h2 class="text-xl  mb-5">Курсы криптовалют</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <!-- Криптовалюты -->
          <div
              v-for="crypto in cryptos"
              :key="crypto.name"
              class="bg-zinc-700 p-4 rounded-lg hover:bg-zinc-600"
          >
            <h3 class="text-xl  mb-2">{{ crypto.name }}</h3>
            <img :src="crypto.image" alt="crypto logo" class="w-12 h-12 mb-2" />
            <p class="text-lg mb-2">Цена на {{ selectedExchange }}: {{ crypto.prices[selectedExchange] }} USD</p>
            <p class="text-sm mb-2">24h Change: {{ crypto.change24h[selectedExchange] }}</p>
            <p class="text-sm mb-2">Объем: {{ crypto.volume[selectedExchange] }}</p>
            <p class="text-sm mb-2">Высокая цена (24h): {{ crypto.high24h[selectedExchange] }} USD</p>
            <p class="text-sm mb-2">Низкая цена (24h): {{ crypto.low24h[selectedExchange] }} USD</p>
            <p class="text-sm mb-2">Капитализация: {{ crypto.marketCap[selectedExchange] }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
/* Дополнительные стили для оптимизации внешнего вида */
</style>
