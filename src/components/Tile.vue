<template>

    <div class="api-tile  col-xl-3 col-md-6 col-sm-6 ">
        <h4>{{apiName}}</h4>
        <p>{{description}}</p>
    </div>

</template>

<script lang="ts">
    export default {
        name: "Tile",
        props: ['apiName', 'description']
    }
</script>

<style scoped>
    .api-tile {
        float: left;
        border: 1px solid #ccc;
        padding: 20px;
        margin: 1%;
        border-radius: 5px;
        color: #42b983;
        max-width: 31%;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        text-align: center;
        cursor: pointer;
        background: #f6f6f6;
        box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.10);
        min-height: 140px;
    }

    .api-tile:hover {
        background: #fff;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        position: relative;
        -webkit-transition-property: color;
        transition-property: color;
        -webkit-transition-duration: 0.5s;
        transition-duration: 0.5s;

    }

    .flex-box-container h3 {
        margin: 0;
    }

    @media only screen and (min-width: 768px) and (max-width: 992px){
        /* For mobile phones: */
        .api-tile {max-width:48%}

    }
    @media only screen and (max-width: 767px){
        /* For mobile phones: */
        .api-tile {max-width:100%}

    }
</style>
