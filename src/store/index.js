import Vue from 'vue';
import Vuex from 'vuex';

import pokemonState from './modules/pokemon';
import pokemonsState from './modules/pokemons';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { pokemonsState, pokemonState },
  strict: false,
  plugins: [],
});

export default store;
