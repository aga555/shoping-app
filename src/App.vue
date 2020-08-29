<template>
    <div id="app">
        <app-header></app-header>
        <b-container>
            <b-row class="justify-content-center">
                <add-product></add-product>
                <list-products></list-products>
            </b-row>
        </b-container>
    </div>
</template>

<script>

    import AppHeader from "@/components/AppHeader";
    import ListProducts from "@/components/ListProducts";
    import AddProduct from "@/components/AddProduct";

    export default {
        name: 'App',
        components: {AddProduct, ListProducts, AppHeader}
    }
</script>

<style>

</style>
