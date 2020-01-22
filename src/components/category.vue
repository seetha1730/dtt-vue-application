<template>
    <div class="Category container overflow-auto">
        <h3 class="mt40">Category</h3>
        <ol>
            <li v-for="(category,i) in info" v-bind:key="i">{{category}}</li>
        </ol>

    </div>
</template>

<script lang="ts">
    import { getCategories } from '../services/index';

    export default {
        name: "home",
        data() {
            return {
                info: []
            }
        },
        beforeMount() {
            getCategories((data) => {
                this.info = data
            }, (error) => {
              this.error = error
            })
        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .Category {
        background: #fff;
        height: 100vh;
        padding: 80px 20px;
    }

</style>
