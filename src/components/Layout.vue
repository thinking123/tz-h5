<template>
    <div class="wrap">
        <h-header/>
        <router-view/>
    </div>
</template>

<script>
    import HHeader from "./HHeader";
    export default {
        name: "Layout",
        components: {HHeader}
    }
</script>

<style scoped>
.wrap{
    width: 100%;
    height: 100%;
}
</style>
