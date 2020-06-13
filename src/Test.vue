<template>
  <h1>Hello <span class="name">{{ name }}</span></h1>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        props: {
            name: {
                type: String as () => string,
                default: "John"
            }
        }
    })
</script>

<style scoped>
.name {
    color: blue;
}
</style>
