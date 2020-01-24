<template>
    <div id="app">
        <Menu/>
        <router-view></router-view>
       <fixed-footer />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Menu from "@/components/menu.vue";
import 'bootstrap/dist/css/bootstrap.css'
import FixedFooter from "@/components/footer.vue";

@Component({
  components: {
      FixedFooter,
      Menu,
  },
})
export default class App extends Vue {


}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin: auto;
    }

    p, li {
        color: #304455;
        font-size: 15px;
        font-weight: normal
    }

    a {
        cursor: pointer
    }

    h1 {
        margin-top: 40px;
        padding: 0 10px;
    }

    .mt20 {
        margin-top: 20px;
    }

    .mt40 {
        margin-top: 40px;
    }

    .mt60 {
        margin-top: 60px;
    }

    @media only screen and (max-width: 768px) {
        /* For mobile phones: */
        #app {
            width: 100%;
        }

    }


</style>
