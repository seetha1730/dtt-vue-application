<template>
    <div id="app">
        <Menu/>
        <router-view></router-view>
        <Footer/>
    </div>
</template>

<script>
    import Menu from './components/menu.vue'
    import Footer from './components/footer.vue'

    export default {
        name: 'app',
        components: {
            Menu,
            Footer
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        width: 960px;
        margin: auto;

    }

    h1 {
        padding: 0 10px
    }

    @media only screen and (max-width: 768px) {
        /* For mobile phones: */
        #app {
            width: 100%;
        }

    }


</style>
