<template>
    <div class="Category">
        <h1>Category</h1>
        <ol>
            <li v-for="(category,i) in info" v-bind:key="i">{{category}}</li>
        </ol>

    </div>
</template>

<script lang="ts">
    import axios from 'axios';

    export default {
        name: "home",
        data() {
            return {
                info: []
            }
        },
        beforeMount() {
            axios
                .get('https://api.publicapis.org/categories')
                .then(response => {
                    this.info = response.data;
                })
                .catch(error => {
                    this.errored = error
                })
        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .Category {
        margin-top: 100px;
    }
</style>
