<template>
    <div class="menuItem">
        <button>{{menuItem}}</button>
    </div>
</template>

<script lang="ts">
    export default {
        name: "MenuItem",
        props: ['menuItem']


    }
</script>

<style scoped>
    button {
        background-color: #f2f2f2;
        border: none;
        border-radius: 5px;
        color: #4a4b4c;
        display: inline-block;
        text-align: center;
        width: 100px;
        font-size: .875em;
        margin-right: 5px;
        outline: medium none;
        text-decoration: none;
        padding: 10px 0;

    }

    button:hover {
        background: #e65446 none repeat scroll 0 0;
        border: medium none;
        color: #fff;
    }

    .menuItem {
        padding: 0 5px;
    }

    @media only screen and (max-width: 768px) {
        /* For mobile phones: */
        .menuItem button {
            padding: 5px;
            width: 78px;

        }
    }
</style>
