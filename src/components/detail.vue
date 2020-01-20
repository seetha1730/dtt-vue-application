<template>
    <div class="detail">
        <h1>Detail</h1>
        <table class="detail-view">
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
        <div class="flexbox-container">
            <router-link v-for="(entry, i) in relevantTiles" :to="{name: 'Detail', params:{ entry}}" v-bind:key="i">
                <Tile v-bind:api-name="entry.API" v-bind:description="entry.Description"/>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">

    import axios from "axios";
    import Tile from './tile.vue';

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
                tableKeys: []
            }
        },
        created() {
            this.entry = this.$route.params.entry;
            this.tableKeys = Object.keys(this.entry);
            axios
                .get('https://api.publicapis.org/entries')
                .then(response => {
                    this.relevantTiles = response.data.entries.filter(entry => {
                        return entry['Category'] === this.entry.Category
                    }).slice(0, 3)
                })
                .catch(error => {
                    this.errored = error
                })
        }
    }
</script>

<style scoped>
    .detail {
        margin-top: 80px;
    }

    .detail-view {
        width: 100%;
        border-collapse: collapse;
        table-layout: fixed;
    }

    .detail-view td, .detail-view th {
        border: 1px solid #ddd;
        padding: 8px;
        word-break: break-word;
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
        text-align: left;
        background-color: #d2d2d2;
        color: #000;
    }

    .flexbox-container {
        margin: 20px 0;
        display: -webkit-flex;
        display: flex;
        flex-wrap: wrap;
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
