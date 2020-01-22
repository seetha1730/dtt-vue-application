<template>
    <div class="menuItem">
        <button>{{menuItem}}</button>
    </div>
</template>

<script lang="ts">
    export default {
        name: "MenuItem",
        props: ['menuItem'],


    }
</script>

<style scoped>
    button {
        display: inline-block;
        padding: 5px 10px;
        text-decoration: none;
        color: #304455;
        border: none;
        outline: none;
        font-size: 20px;
        margin-right: 15px;
        border-radius: 5px;
        font-size: 15px;
        font-weight: bolder
    }


    a:hover button,
    a:active button {
        cursor: pointer;
        background-color: #42b983;
        color: #F6F6F6;
        border-radius: 3px;
        outline: none;

    }

    button:hover, button:active, button:focus {
        outline: none;
    }

    .menuItem {
        display: inline-block;
        text-decoration: none;
        color: #F6F6F6;
        opacity: 0.9;
    }

    @media only screen and (max-width: 768px) {
        /* For mobile phones: */
        .menuItem button {
            padding: 5px;
                background: none;
                width: 100%;
                border-bottom: 1px solid #ccc;
                border-radius: 0;
                 text-align: left;


        }
        .menu-mobile-list a:last-child .menuItem button {
            border-bottom:none
        }
        .menuItem{width:100%}
    }
</style>
