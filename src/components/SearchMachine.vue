<template>
  <div class="">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Pokemon's Id/Name</label>
        <input type="text" class="form-control" id="exampleInputEmail1" v-model="keySearch">
      </div>
      <button type="submit" class="btn btn-primary" @click="onSearch">Submit</button>
    </form>
  </div>
</template>
<script>
import {
  GET_POKEMONS,
  SEARCH_POKEMON,
} from '../store/actionTypes.js';

export default {
  data() {
    return {
      keySearch: '',
    };
  },
  computed: {
    ketSearchLowerCase: function() {
      return this.keySearch.toLowerCase();
    }
  },
  methods: {
    onSearch: function() {
      if (!this.keySearch) {
        if (this.$store.state.pokemonsState.pokemons.length > 1) {
          alert("Please enter Pokemon's Id/Name");
          return;
        }

        this.$store.dispatch(GET_POKEMONS);
        return;
      }

      this.$store.dispatch(SEARCH_POKEMON, this.ketSearch.toLowerCase());
    }
  }
};
</script>
<style scoped>
  form {
    margin-bottom: 25px;
  }
</style>
