<template>
    <div class="detail container overflow-auto">
        <h3>Detail</h3>
        <table class="detail-view col-lg-6">
            <thead>
            <tr>
                <th>Property</th>
                <th>Value</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(key, i) in tableKeys" v-bind:key="i">
                <td>{{key}}</td>
                <td>{{entry[key]}}</td>

            </tr>
            </tbody>
        </table>
        <div class="flexbox-container col-lg-12">
            <h3>Relevant Api's</h3>
            <router-link v-for="(entry, i) in relevantTiles" :to="{name: 'Detail', query:{ api: entry.API}}"
                         v-bind:key="i">
                <Tile v-bind:api-name="entry.API" v-bind:description="entry.Description"/>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">

    import {getEntries } from '../services/index'
    import Tile from './Tile';

    export default {
        name: 'Detail',
        props: {
            msg: String
        },
        components: {
            Tile
        },
        data: function () {
            return {
                relevantTiles: [],
                entry: {},
                tableKeys: [],
                api: {}
            }
        },
        created() {
            this.api = this.$route.query.api;
            getEntries((data) => {
                this.entry = data.find(entry => entry.API === this.api);
                this.tableKeys = Object.keys(this.entry);
                this.relevantTiles = data.filter(entry => {
                    return entry['Category'] === this.entry.Category
                }).slice(0, 3)
            }, (error) => {
                this.errored = error
            })
        }
    }
</script>

<style scoped>
    .detail {
        background: #fff;
        height: 100vh;
        padding: 100px 20px;
    }

    .detail-view {
        width: 100%;
        border-collapse: collapse;
        table-layout: fixed;
        text-align: left;


    }

    .detail-view td, .detail-view th {
        border: 1px solid #ddd;
        padding: 8px 20px 8px;
        word-break: break-word;
        color: #2973b7;
        font-size: 15px;
        font-weight: bold;
    }

    .detail-view tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    .detail-view tr:hover {
        background-color: #ddd;
    }

    .detail-view th {
        padding-top: 12px;
        padding-bottom: 12px;
        background-color: #42b983;
        color: #304455;
    }

    .flexbox-container {
        margin: 20px 0;
        float: left;
        padding: 0;
    }

    .flexbox-container .api-tile {
        margin-left: 0
    }

    .flexbox-container a {
        text-decoration: none;
    }

    @media only screen and (max-width: 768px) {
        .flexbox-container {
            display: inline-block;
            width: 100%;
        }
    }

</style>
