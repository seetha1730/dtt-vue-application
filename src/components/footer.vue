<template>
    <div class="footer">
        <a href="#">Sitemap</a>
        <div>
            <a v-for="(menu, i) in menuItems" v-bind:key="i" v-bind:href="menu.path">{{menu.name}}</a>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: "footer",
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
    .footer {
        background: #2c3e50;
        min-height: 60px;
        padding: 15px;
        margin-top: 50px;
        color: #fff;
        display: flex;
        flex-direction: row;
    }

    .footer a {
        color: #d2d2d2;
        margin: 0 10px;

    }


</style>
