<template>
    <div class="home-page  container overflow-auto">


        <div class="sorting-container">
            <h3>Entries</h3>
            <select class="form-control sorting-group">
                <option >API</option>
                <option >Category</option>
            </select>
        </div>
        <div class="flexbox-container col-lg-12 ">
            <router-link v-for="(entry, i) in info" :to="{path: `Detail`, query:{api:entry.API}}" v-bind:key="i">
                <Tile v-bind:api-name="entry.API" v-bind:description="entry.Description"/>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import { getEntries } from '../services/index'
    import Tile from './Tile';

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
        beforeMount() {
            getEntries((data) => {
               this.info = data.slice(0,10)
            }, (error) => {
                this.errored = error
            })

        },

    }
</script>

<style scoped>

    .home-page {
        background: #fff;
        height: 100vh;
        padding: 80px 20px 100px;

    }

    .flexbox-container a {
        text-decoration: none;
    }

    .sorting-container {
        padding: 20px;
        display: block;
        margin-bottom: 35px;
        margin-right: 2%;
    }

    .sorting-group {
        cursor: pointer;
        width: 200px;
        float: right;
        position: relative;
        top: 0px;
    }

    .home-page h1 {
        color: #273849;
        width: 80%;
        float: left;
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
