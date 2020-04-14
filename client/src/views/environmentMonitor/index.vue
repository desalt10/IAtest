<template>
   <div class="environmentMonitor">
       <Enshow></Enshow>
   </div>

</template>

<script>
import Enshow from "../../components/Enshow.vue";
import NavBar from "../../components/NavBar.vue";
export default {
    name: "environmentMonitor",
    components:{
        Enshow,NavBar
    }
}
</script>

<style lang="less" scoped>

</style>