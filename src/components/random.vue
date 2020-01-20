<template>
    <div class="random">
        <h1>Random</h1>
        <button v-on:click="getRandom()">Random item<span></span></button>
        <router-link v-for="(entry, i) in info" :to="{name: 'Detail', params:{ entry}}" v-bind:key="i">
            <Tile v-bind:api-name="entry.API" v-bind:description="entry.Description"/>
        </router-link>

    </div>
</template>

<script lang="ts">
    import axios from 'axios';
    import Tile from './tile.vue'

    export default {
        name: "home",
        components: {
            Tile,
        },

        data() {
            return {
                info: []
            }
        },
        methods: {
            getRandom: function () {
                axios
                    .get('https://api.publicapis.org/random')
                    .then(response => {
                        this.info = response.data.entries;
                    })
                    .catch(error => {
                        this.errored = error
                    })
            }

        },
        beforeMount() {
            this.getRandom();
        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .random a {
        text-decoration: none;
    }

    .random {
        margin-top: 100px;
    }

    .random button {
        background: #6b8fb4;
        border-radius: 5px;
        border: none;
        padding: 11px;
        color: #fff;
        font-size: 14px;
        cursor: pointer;
        display: flex;
        margin-left: 10px;
    }

    .random button:focus {
        outline: none;
    }

    .random button span {
        background: url("../assets/refresh-icon.png") no-repeat center right;
        width: 30px;
        height: 19px;
    }

    @media only screen and (max-width: 768px) {
        .random button {
            margin-bottom: 20px;
        }
    }


</style>
