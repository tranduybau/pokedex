<template>
    <div class="container">
        <h1>Pokedex</h1>
        <search-machine />
        <loading />
        <alert />
        <pokemon-box />
    </div>
</template>

<script>
    import Alert from '../components/Alert.vue';
    import Loading from '../components/Loading.vue';
    import PokemonBox from '../components/PokemonBox.vue';
    import SearchMachine from '../components/SearchMachine.vue';

    import { GET_POKEMONS } from '../store/actionTypes.js';

    export default {
        name: 'Homepage',
        components: {
            Alert, PokemonBox, SearchMachine, Loading,
        },
        created() {
            this.$store.dispatch(GET_POKEMONS);
        }
    };
</script>

<style scoped>
    h1 {
        text-align: center;
    }
</style>
