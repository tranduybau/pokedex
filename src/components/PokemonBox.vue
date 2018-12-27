<template>
    <b-col cols="3">
      <b-card title="Pokemon Info" :img-src="url" img-alt="Image"
      img-top tag="article" style="max-width: 20rem;" class="mb-2">
        <p class="card-text">
          {{ pokemon.name }}
        </p>
        <b-button :to="`/pokemon/${this.id}`" variant="primary">Check more infomation</b-button>
      </b-card>
    </b-col>
</template>

<script>
  export default {
    name: 'PokemonBox',
    props: {
      id: Number,
      pokemon: {
        default: {},
        type: Object,
      },
    },
    computed: {
      url: function () {
        if (this.id < 808) {
          return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`;
        }

        return 'https://cdn.dribbble.com/users/1644328/screenshots/3662108/800x600.jpg';
      },
    },
  };
</script>

<style scoped>
  .card-text {
    text-transform: capitalize;
  }
</style>
