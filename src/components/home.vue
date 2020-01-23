<template>
    <div class="home-page  container overflow-auto">


        <div class="sorting-container">
            <h3>Entries</h3>
            <label>
                <select class="form-control" v-on:change="sorting">
                    <option value="a-z">A to Z</option>
                    <option value="z-a">Z to A</option>
                </select>
            </label>
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
                info: [],
            }

        },
        methods: {

            /**
             * @method sorting
             * this method is used to sort array ascending or descending based on dropdown value change
             * @param {event} e - event object of change event
             * */
              sorting: function(e) {
                  if(e.target.value === 'z-a') {

                      this.info.sort((a, b) => {

                          if (a.API > b.API) {
                              return -1;
                          }
                          if (b.API > a.API) {
                              return 1;
                          }
                          return 0;
                      })
                  } else {
                      this.info.sort((a, b) => {

                          if (a.API < b.API) {
                              return -1;
                          }
                          if (b.API < a.API) {
                              return 1;
                          }
                          return 0;
                      })
                  }

                  }



        },
        beforeMount() {
            /**
             * this functional calls api thorough service, which will return array of entries.
             * */
            getEntries((data) => {
               this.info = data.slice(0,10)
            }, (error) => {
                this.errored = error
            })
        }


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
