<template>
    <div class="Weshow">
        <van-nav-bar  title="气象站" />
        <div class="Weathershow">
            <van-cell v-for="(item,index) in welist" :key="index" :title="(item.title)" :icon="(item.newIcon)" :value="(item.value)+(item.unit)" />
        </div>
       
    </div>
</template>

<script>
export default{
    name: "Weshow",
    data(){
        return{
           welist:[
               {
               title:"空气温度",
               unit:'(℃)',
                newIcon:require('../assets/img/eshow/1.png'),
                value:15,
                },
                {
               title:"空气湿度",
               unit:'(%)',
                newIcon:require('../assets/img/eshow/2.png'),
                value:15,
                },
                {
               title:"CO2浓度",
                 unit:'(%)',
                newIcon:require('../assets/img/eshow/3.png'),
                value:15,
                },
                {
               title:"光照强度",
               unit:'(lux)',
                newIcon:require('../assets/img/eshow/4.png'),
                value:15,
                },
                {
               title:"风向检测",
               unit:'()',
                newIcon:require('../assets/img/eshow/5.png'),
                value:15,
                },
                {
               title:"风速检测",
               unit:'(m/s)',
                newIcon:require('../assets/img/eshow/6.png'),
                value:15,
                },
                {
               title:"降雨量",
               unit:'(℃)',
                newIcon:require('../assets/img/eshow/7.png'),
                value:15,
                },
                {
               title:"大气压强",
               unit:'(Pa)',
                newIcon:require('../assets/img/eshow/8.png'),
                value:15,
                }
           ]
        }
    }
}
</script>

<style lang="less" scoped>

</style>