<template>
  <div id="container">
    <div id="header">
      <h1>Currency Rates</h1>
    </div>
    <div id="form">
      <Form/>
    </div>
    <div id="chart">
      <Chart v-if="this.$store.state.isLoaded" :options="this.$store.state.currencyRates"></Chart>
    </div>
    <div id="footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Form from '../components/Form.vue';
import Chart from '../components/Chart.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Form,
    Chart,
    Footer,
  },
};
</script>

<style type="scss">
#container {
  bottom: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

#header {
  background-color: #42b983;
  padding: 5px;
  font-size: 30px;
}

#form {
  background-color: #7D70BA;
  display: block;
  padding: 20px;
}

#chart {
  background-color: #2c3e50;
  padding: 30px;
}

#footer {
  background-color: #121212;
  height: 15%;
  padding: 12px;
  text-align: center;
}
</style>
