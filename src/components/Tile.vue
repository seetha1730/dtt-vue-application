<template>

    <div class="api-tile">
        <h3>{{apiName}}</h3>
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
        background-color: #ffffff;
        border-radius: 8px;
        padding: 20px;
        width: 260px;
        min-height: 100px;
        color: #2c3e50;
        margin: 10px;
    }

    .flex-box-container h3 {
        margin: 0;
    }

    @media only screen and (max-width: 768px) {
        /* For mobile phones: */
        .api-tile {
            width: 96%;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            margin: 2%;

        }

    }
</style>
