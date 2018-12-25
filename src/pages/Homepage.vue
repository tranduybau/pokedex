<template>
    <div class="container">
        <loading v-if="pokemonsState.isLoading" />
        <div v-else>
            <h1>Pokedex</h1>
            <search-machine />
            <div class="row">
                <pokemon-box v-for="(pokemon, index) in pokemonsState.pokemons" :key="index" :id="index +1" :pokemon="pokemon" />
            </div>
        </div>
        <alert />
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
        },
        computed: {
            pokemonsState: function () {
                return this.$store.state.pokemonsState;
            },
        },
    };
</script>

<style scoped>
    h1 {
        text-align: center;
    }
</style>
