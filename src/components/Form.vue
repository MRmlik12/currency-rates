<template>
  <div>
    <select class="dropdown" aria-label="Base currency" v-model="baseCurrency"
            @change="updateChart">
      <option v-for="item in symbols" v-bind:key="item">{{ item }}</option>
    </select>
    <input class="input" aria-label="Date" type="date" v-model="dateInput" v-on:input="updateChart">
  </div>
</template>

<script>
import Rates from '../api/rates';

export default {
  name: 'Form',
  data() {
    return {
      symbols: [],
      baseCurrency: 'EUR',
      dateInput: '',
    };
  },
  created() {
    const date = new Date();
    this.dateInput = `${date.getFullYear()}-${(date.getMonth() < 10) ? `${date.getMonth().toString() + 1}` : date.getMonth() + 1}-`
       + `${(date.getDate() < 10) ? `0${date.getDate()}` : date.getDate()}`;
  },
  async mounted() {
    const rates = await Rates.symbols();

    this.symbols = Object.keys(rates);
    this.symbols.push('EUR');

    this.$store.state.currencyRates = rates;
    this.$store.state.isLoaded = true;
  },
  methods: {
    async updateChart() {
      this.$store.state.currencyRates = await Rates.history(this.dateInput, this.baseCurrency);
    },
  },
};
</script>

<style lang="scss">
$base-color: #7D70BA;

.dropdown {
  border: none;
  color: white;
  padding: 10px 70px;
  border-radius: 2px;
  background-color: $base-color;
  border: 2px solid white;
  margin: 10px;
  -moz-appearance: none;
  -webkit-appearance: none;
}

.input {
  border: none;
  color: white;
  text-decoration: none;
  padding: 10px 50px;
  background-color: $base-color;
  border: 2px solid white;
}
</style>
