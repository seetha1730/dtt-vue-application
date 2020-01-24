<template>
    <div class="Category container overflow-auto">
        <h3 class="mt40">Category</h3>
        <ol>
            <li v-for="(category,i) in category" v-bind:key="i">{{category}}</li>
        </ol>

    </div>
</template>

<script lang="ts">
    import { getCategories } from '../services/index';
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        components: {
        },
    })
    export default class Category extends Vue {
        category: String[] = [];
        error: String = '';

        beforeMount() {
            /**
             * this functional calls api thorough service, which will return array of entries.
             * */
            getCategories((data: String[]) => {
                this.category = data
            }, (error: String) => {
              this.error = error
            })
        }

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
