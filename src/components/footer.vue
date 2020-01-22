<template>
    <div class="fixedFooter">

        <div>
            <a href="/home">Sitemap</a>
            <a v-for="(menu, i) in menuItems" v-bind:key="i" v-bind:href="menu.path">{{menu.name}}</a>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: "fixedFooter",
        data: function () {
            return {
                menuItems: [
                    {name: 'Home', path: '/'},
                    {name: 'Categories', path: '/category'},
                    {name: 'Random', path: '/random'}
                ]
            }
        }
    }
</script>

<style scoped>

    .fixedFooter {
        background: #42b983;
        padding: 30px 5%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.15);
        box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.15);
        height: 80px;
        display: flex;
        box-sizing: border-box;
        position: fixed;
        width: 100%;
        bottom: 0;
        left: 0;
        z-index: 1;
        margin-top: 100px;


    }

    .fixedFooter a {
        color: #f6f6f6;
        margin: 0 10px;
        font-size: 15px;
        cursor: pointer;
        text-decoration: none;
        font-weight: bolder;


    }

    .fixedFooter a:hover {
        color: #304455;
        text-decoration: none;

    }


</style>
