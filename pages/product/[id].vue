<script lang="ts" setup>
import { products } from "../../composables/constants/product";
import { Products } from "../../types/products";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = typeof route.params.id === 'string' ? parseInt(route.params.id) :
null;
const product = ref(products.find((item: Products) => item.id === id));
</script>

<template>
    <DetailProduct :product="product"/>
</template>