import {
  GET_POKEMONS,
  GET_POKEMONS_FAILED,
  GET_POKEMONS_PENDING,
  GET_POKEMONS_SUCCSESS,
  SEARCH_POKEMON,
  SEARCH_POKEMON_FAILED,
  SEARCH_POKEMON_PENDING,
  SEARCH_POKEMON_SUCCSESS,
} from '../actionTypes';

const defaultState = {
  pokemons: [],
  response: {
    type: 'primary',
    isShow: false,
    message: '',
  },
  isLoading: false,
};

export default {
  state: defaultState,
  actions: {
    [GET_POKEMONS]: ({ commit }) => {
      commit(GET_POKEMONS_PENDING);

      fetch('https://pokeapi.co/api/v2/pokemon')
        .then(res => res.json())
        .then(json => commit(GET_POKEMONS_SUCCSESS, json.results))
        .catch(error => commit(GET_POKEMONS_FAILED, error.message));
    },
    [SEARCH_POKEMON]: ({ commit }, pokemonId) => {
      commit(SEARCH_POKEMON);

      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(res => res.json())
        .then(json => commit(SEARCH_POKEMON_SUCCSESS, json))
        .catch(error => commit(SEARCH_POKEMON_FAILED, error.message));
    },
  },
  mutations: {
    [GET_POKEMONS_SUCCSESS]: (state, pokemons) => {
      state.response = {
        type: 'success',
        isShow: false,
        message: 'Get pokemons success',
      };

      state.pokemons = pokemons;
      setTimeout(() => {
        state.isLoading = false;
      }, 4000);
    },
    [GET_POKEMONS_PENDING]: (state) => {
      state.isLoading = true;
    },
    [GET_POKEMONS_FAILED]: (state, error) => {
      state.isLoading = false;

      state.response = {
        isShow: true,
        type: 'danger',
        message: error,
      };
    },

    [SEARCH_POKEMON_SUCCSESS]: (state, pokemon) => {
      state.isLoading = false;

      state.response = {
        isShow: false,
        message: 'Search pokemon success',
        type: 'success',
      };
      state.pokemons = [pokemon];
    },
    [SEARCH_POKEMON_FAILED]: (state, error) => {
      state.isLoading = false;

      state.response = {
        isShow: true,
        message: error,
        type: 'danger',
      };
    },
    [SEARCH_POKEMON_PENDING]: (state) => {
      state.isLoading = true;
    },
  },
};
