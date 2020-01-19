<template>
    <div class="menu fixed-banner"> e
        <router-link v-for=" (i, index) in item " :to="i.path" v-bind:key="index">
            <MenuItem v-bind:menu-item="i.name"/>
        </router-link>
    </div>
</template>

<script lang="ts">
    import MenuItem from './menuItem'

    export default {
        name: 'Menu',
        data: function () {
            return {
                item: [
                    {name: 'Home', path: '/'},
                    {name: 'Categories', path: '/category'},
                    {name: 'Random', path: '/random'},
                ],
            }
        },
        components: {
            MenuItem
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .menu {
        background: #2c3e50;
        padding: 10px;
        width: 100%;
        display: flex;
        max-width: 960px;
        box-sizing: border-box;


    }

    .fixed-banner {
        position: fixed;
        border-radius: 10px;
        top: 0;
    }

    @media only screen and (max-width: 768px) {
        /* For mobile phones: */
        .fixed-banner {
            border-radius: 0;
        }

    }
</style>
