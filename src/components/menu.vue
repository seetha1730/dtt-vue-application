<template>
    <div class="menu fixed-banner" v-bind:class="{ active: showMobileMenu }">
        <div class="menu-mobile">
            <button v-bind:class="{ active: showMobileMenu }"
                    v-on:click="showMobileMenu = !showMobileMenu"/>
            <div class="logo-section clearfix">


                <span class="logo"><img src="../assets/logo.png"/>DTT</span></div>
            <div v-show='showMobileMenu' class="menu-mobile-list clearfix ">
                <router-link class-active="active" v-for=" (i, index) in item " :to="i.path" v-bind:key="index">
                    <MenuItem v-bind:menu-item="i.name"/>
                </router-link>
            </div>
        </div>
        <div class="menu-left"><img src="../assets/logo.png"/> Vue.js app</div>

        <div class="menu-right">

            <router-link class-active="active" v-for=" (i, index) in item " :to="i.path" v-bind:key="index">
                <MenuItem v-bind:menu-item="i.name"/>
            </router-link>
        </div>


    </div>
</template>

<script lang="ts">
    import MenuItem from '@/components/menuItem.vue'
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        components: {
            MenuItem
        }
    })
    export default class Menu extends Vue {
        item: { name: String, path: String }[] = [
            {name: 'Home', path: '/'},
            {name: 'Categories', path: '/category'},
            {name: 'Random', path: '/random'},
        ];
        showMobileMenu:Boolean = false

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .menu-right {
        float: right;
    }

    .menu-left {
        float: left;
        color: #304455;
        font-weight: bolder;
        font-size: 15px;
    }

    .menu-left img {
        width: 40px;
    }

    .fixed-banner {
        padding: 20px 5%;
        box-sizing: border-box;
        box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.15);
        height: 80px;
        background-color: #fff;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        color: #1481BA;
    }

    .menu-mobile {
        display: none
    }

    .menu-mobile button {
        background: url("../assets/menu.png") no-repeat;
        background-size: 100%;
        width: 24px;
        height: 24px;
        cursor: pointer;
        border: none;
        outline: none;
        position: relative;
        top: 7px;


    }

    .menu-mobile .menuItem button {
        background: none;

    }

    .logo {
        font-size: 15px;
        font-weight: bolder;
        color: #304455;
    }

    .menu-mobile button.active {
        background: url("../assets/close.png") no-repeat;
        background-size: 100%;
    }

    @media only screen and (max-width: 768px) {
        /* For mobile phones: */
        .fixed-banner {
            border-radius: 0;
            display: flex;
        }

        .menu-mobile .logo img {
            width: 40px;
            margin-left: 10px;
        }

        .menu-mobile {
            display: block;
            width: 100%
        }

        .menu-right, .menu-left {
            display: none;
        }

        .menu-mobile-list {
            display: flex;
            flex-direction: column;
            margin-top: -25px;
        }


        .menu.fixed-banner.active {
            min-height: 200px;
        }

        .logo-section {
            margin: 0 auto;
            position: relative;
            top: -30px;
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;

        }

        .menu-mobile-list a {
            background: none;
            width: 100%;
        }

    }
</style>
