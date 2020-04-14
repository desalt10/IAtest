<template>
    <div class="Enshow">
        <van-nav-bar title="环境监测"/>
        <div class="enshow">
            <van-grid :border="true" :column-num="3" gutter="10" >
                <!-- <van-grid-item v-for="(item,index) in List" :key="index" :column-num="3" :icon="(item.newIcon)" :text="(item.title)">
                </van-grid-item> -->
                <div data-v-23a3e354 class="van-grid-item"  v-for="(item,index) in List" :key="index" column-num="3" style="flex-basis:33.3333%;padding-right:10px;">
                    <div class="van-grid-item__content van-grid-item__content--center van-grid-item__content--surround van-hairline">
                        <i class="van-icon van-grid-item__icon">
                            <img :src="(item.newIcon)" class="van-icon__image">
                            <div style="line-height: 15px">
                                <span data-v-23a3e354 class="van-grid-item__text">{{item.title}}</span>
                                <div style="height: 20px;line-height: 2px">
                                    <span style="font-size:12px;color: #1989fa;">{{item.data}}</span>
                                    <span style="font-size:12px;color: #646566;">{{item.unit}}</span>
                                </div>
                            </div>
                        </i>
                    </div>
                </div>
            </van-grid>
        </div>
    </div>
</template>

<script>
import request from '../api'
const getEnshow = request.getEnshow;
export default {
    name: "enshow",
    data(){
        return{
            List:[{
                title:"空气温度",
                unit:'(℃)',
                newIcon:require('../assets/img/eshow/1.png'),
            },
            {
                title:"空气湿度",
                unit:'(%)',
                newIcon:require('../assets/img/eshow/2.png'),
            },
            {
                title:"CO2浓度",
                unit:'(%)',
                newIcon:require('../assets/img/eshow/3.png'),
            },
            {
                title:"光照强度",
                unit:'(lux)',
                newIcon:require('../assets/img/eshow/4.png'),
            },
            {
                title:"风向检测",
                unit:'()',
                newIcon:require('../assets/img/eshow/5.png'),
            },
            {
                title:"风速检测",
                unit:'(m/s)',
                newIcon:require('../assets/img/eshow/6.png'),
            },
            {
                title:"降雨量",
                unit:'(℃)',
                newIcon:require('../assets/img/eshow/7.png'),
            },
            {
                title:"大气压强",
                unit:'(Pa)',
                newIcon:require('../assets/img/eshow/8.png'),
            },
            {
                title:"土壤湿度",
                unit:'(%)',
                newIcon:require('../assets/img/eshow/9.png'),
            },
            {
                title:"土壤温度",
                unit:'(℃)',
                newIcon:require('../assets/img/eshow/10.png'),
            },
            {
                title:"土壤PH值",
                unit:'(PH)',
                newIcon:require('../assets/img/eshow/11.png'),
            },
            {
                title:"土壤电导率",
                unit:'(us/cm)',
                newIcon:require('../assets/img/eshow/12.png'),
            },
            ], 
        }
    },
    created(){
        getEnshow().then(res=>{
            this.newList = res.data.data;
            console.log(res.data.data)
        })
    }
}
</script>

<style lang="less" scoped>
</style>