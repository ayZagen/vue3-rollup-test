<template>
  <h1>Hello {{ name }}</h1>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        props: {
            name: {
                type: String as () => string
            }
        }
    })
</script>

<style scoped>
</style>
