import {
  GET_POKEMON,
  GET_POKEMON_SUCCSESS,
  GET_POKEMON_PENDING,
  GET_POKEMON_FAILED,
} from '../actionTypes';

const defaultState = {
  pokemon: {},
  response: {
    isShow: false,
    type: '',
    message: '',
  },
  isLoading: false,
};

export default {
  state: defaultState,
  actions: {
    [GET_POKEMON]: ({ commit }, pokemonId) => {
      commit(GET_POKEMON_PENDING);

      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(res => res.json())
        .then(json => commit(GET_POKEMON_SUCCSESS, json))
        .catch(error, commit(GET_POKEMON_FAILED, error.message));
    },
  },
  mutations: {
    [GET_POKEMON_SUCCSESS]: (state, pokemon) => {
      setTimeout(() => {
        state.isLoading = false;
      }, 4000);

      state.response = {
        isShow: false,
        type: 'success',
        message: 'Get pokemon success',
      };

      state.pokemon = pokemon;
    },
    [GET_POKEMON_FAILED]: (state, error) => {
      state.response = {
        isShow: false,
        type: 'danger',
        message: error,
      };

      state.isLoading = false;
    },
    [GET_POKEMON_PENDING]: (state) => {
      state.isLoading = true;
    },
  },
};
