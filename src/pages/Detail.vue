<template>
  <div>
    <loading v-if="pokemonState.isLoading" />
    <b-col cols="12" v-else>
      <div class="row">
        <b-col cols="3">
          <img :src="url" alt="">
        </b-col>
        <b-col cols="9">
          <h1>
            {{ pokemonState.pokemon.name }}
          </h1>
        </b-col>
      </div>
    </b-col>
    <alert  />
  </div>
</template>

<script>
  import { GET_POKEMON } from '../store/actionTypes.js';
  import Loading from '../components/Loading.vue';
  import Alert from '../components/Alert.vue';

  export default {
    components: { Loading, Alert },
    created() {
      this.$store.dispatch(GET_POKEMON, this.$route.params.id);
    },
    computed: {
      url: function () {
        if (this.$route.params.id < 808) {
          return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.$route.params.id}.png`;
        } else {
          return 'https://cdn.dribbble.com/users/1644328/screenshots/3662108/800x600.jpg';
        }
      },
      pokemonState: function () {
        return this.$store.state.pokemonState;
      }
    }
  }
</script>


<style scoped>
  h1 {
    text-transform: capitalize;
  }
  img {
    width: 100%;
  }
</style>
