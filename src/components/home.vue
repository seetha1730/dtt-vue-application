<template>
    <div class="home-page">
        <h1>Entries</h1>
        <div class="sorting-container"><span class="sorting-group" v-on:click="sortArrays()"><span class="sort"/> <span>Sort</span></span>
        </div>
        <div class="flexbox-container">
            <router-link v-for="(entry, i) in info" :to="{name: 'Detail', params:{ entry}}" v-bind:key="i">
                <Tile v-bind:api-name="entry.API" v-bind:description="entry.Description"/>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import axios from 'axios';
    import Tile from './Tile';

    export default {
        name: "home",
        components: {
            Tile,
        },
        methods: {
            sortArrays() {
                this.info.reverse();
            }
        },

        data() {
            return {
                info: []
            }
        },
        beforeMount() {
            axios
                .get('https://api.publicapis.org/entries')
                .then(response => {
                    this.info = response.data.entries.slice(0, 10);
                })
                .catch(error => {
                    this.errored = error
                })
        },

    }
</script>

<style scoped>
    .flexbox-container {
        display: -webkit-flex;
        display: flex;
        flex-wrap: wrap;
    }

    .home-page {
        width: 960px;
        margin-top: 100px;
    }

    .flexbox-container a {
        text-decoration: none;
    }

    .sort {
        background: url("../assets/sort_unsort.png");
        width: 25px;
        height: 25px;
        display: block;
        background-size: cover;

    }

    .sorting-container {
        display: flex;
        align-items: end;
        justify-content: flex-end;
        padding: 20px;
    }

    .sorting-group {
        display: flex;
        cursor: pointer;
    }

    .home-page h1 {
        margin: 0
    }

    @media only screen and (max-width: 768px) {
        /* For mobile phones: */
        .home-page {
            width: 100%;
        }

        .flexbox-container {
            display: inline-block;
            width: 100%;
        }

    }
</style>
