<template>
    <div class="container random overflow-auto">
        <div class="random-tile"><h3>Random</h3><span class="randomButton " v-on:click="getRandom()"><img
                src="../assets/refresh-icon.png"/> </span></div>
        <router-link v-for="(entry, i) in info" :to="{name: 'Detail', query:{ api:entry.API}}" v-bind:key="i">
            <Tile v-bind:api-name="entry.API" v-bind:description="entry.Description"/>
        </router-link>

    </div>
</template>

<script lang="ts">
    import { getRandom } from '../services/index'
    import Tile from './Tile'

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
            /**
             * this functional calls api thorough service, which will return random api object.
             * */
            getRandom: function () {
                getRandom((data) => {
                    this.info = data;
                }, (error) => {
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

    .random .random-tile {
        display: flex;
        margin-top: 80px
    }

    .random span img {
        background: #42b983;
        cursor: pointer;
        border-radius: 15px;
        padding: 5px;
        margin-left: 10px;
    }

    .random span img:hover {
        background: #90dfbb;
    }

    .random {
        background: #fff;
        height: 100vh;
        padding: 80px 20px;
    }
    .random button span {
        background: url("../assets/refresh-icon.png") no-repeat center right;
        width: 30px;
        height: 19px;
        position: relative;
        top: 5px;
    }

    @media only screen and (max-width: 768px) {
        .random button {
            margin-bottom: 20px;
        }
    }


</style>
