import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    msg: 'Hello Vuex',
    info : "Replace with Axios"
  },
  mutations: {
    changeMsg (state, str) {
      state.msg = `${state.msg}, ${str}`
    },

    changeAxios (state) {
      axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (state.info = response.data, console.log(JSON.stringify(response))))
    }
  },
  actions: {

  },
});
