<template>
    <div class="Enshow">
        <van-nav-bar title="环境监测"/>
        <div class="enshow">
            <van-grid :border="true" :column-num="3" gutter="10">
                <!-- <van-grid-item v-for="(item,index) in List" :key="index" :column-num="3" :icon="(item.newIcon)" :text="(item.title)">
                </van-grid-item> -->
                <!-- <div data-v-23a3e354 class="van-grid-item"  v-for="(item,index) in newList" :key="index" column-num="3" style="flex-basis:33.3333%;padding-right:10px;">
                    <div class="van-grid-item__content van-grid-item__content--center van-grid-item__content--surround van-hairline">
                        <i class="van-icon van-grid-item__icon">
                            <img :src="(item.newIcon)" class="van-icon__image">
                            <div style="line-height: 15px">
                                <span data-v-23a3e354 class="van-grid-item__text">{{item.title}}</span>
                                <div style="height: 20px;line-height: 2px">
                                    <span style="font-size:12px;color: #1989fa;">{{item.title}}</span>
                                    <span style="font-size:12px;color: #646566;">{{item.unit}}</span>
                                </div>
                            </div>
                        </i>
                    </div>
                </div> -->
                <div data-v-23a3e354 class="van-grid-item"  style="flex-basis:33.3333%;padding-right:10px;">
                    <div class="van-grid-item__content van-grid-item__content--center van-grid-item__content--surround van-hairline">
                        <i class="van-icon van-grid-item__icon">
                            <img :src="srcList[0]" class="van-icon__image">
                            <div style="line-height: 15px">
                                <span data-v-23a3e354 class="van-grid-item__text">{{titleList[0]}}</span>
                                <div style="height: 20px;line-height: 2px">
                                    <span style="font-size:12px;color: #1989fa;">{{newList.airTemperature}}</span>
                                    <span style="font-size:12px;color: #646566;">{{unitList[0]}}</span>
                                </div>
                            </div>
                        </i>
                    </div>
                </div>
                <div data-v-23a3e354 class="van-grid-item"  style="flex-basis:33.3333%;padding-right:10px;">
                    <div class="van-grid-item__content van-grid-item__content--center van-grid-item__content--surround van-hairline">
                        <i class="van-icon van-grid-item__icon">
                            <img :src="srcList[1]" class="van-icon__image">
                            <div style="line-height: 15px">
                                <span data-v-23a3e354 class="van-grid-item__text">{{titleList[1]}}</span>
                                <div style="height: 20px;line-height: 2px">
                                    <span style="font-size:12px;color: #1989fa;">{{newList.airHumidity}}</span>
                                    <span style="font-size:12px;color: #646566;">{{unitList[1]}}</span>
                                </div>
                            </div>
                        </i>
                    </div>
                </div>
                <div data-v-23a3e354 class="van-grid-item"  style="flex-basis:33.3333%;padding-right:10px;">
                    <div class="van-grid-item__content van-grid-item__content--center van-grid-item__content--surround van-hairline">
                        <i class="van-icon van-grid-item__icon">
                            <img :src="srcList[2]" class="van-icon__image">
                            <div style="line-height: 15px">
                                <span data-v-23a3e354 class="van-grid-item__text">{{titleList[2]}}</span>
                                <div style="height: 20px;line-height: 2px">
                                    <span style="font-size:12px;color: #1989fa;">{{newList.Carbondioxide}}</span>
                                    <span style="font-size:12px;color: #646566;">{{unitList[2]}}</span>
                                </div>
                            </div>
                        </i>
                    </div>
                </div>
                <div data-v-23a3e354 class="van-grid-item"  style="flex-basis:33.3333%;padding-right:10px;">
                    <div class="van-grid-item__content van-grid-item__content--center van-grid-item__content--surround van-hairline">
                        <i class="van-icon van-grid-item__icon">
                            <img :src="srcList[3]" class="van-icon__image">
                            <div style="line-height: 15px">
                                <span data-v-23a3e354 class="van-grid-item__text">{{titleList[3]}}</span>
                                <div style="height: 20px;line-height: 2px">
                                    <span style="font-size:12px;color: #1989fa;">{{newList.lightIntensity}}</span>
                                    <span style="font-size:12px;color: #646566;">{{unitList[3]}}</span>
                                </div>
                            </div>
                        </i>
                    </div>
                </div>
                <div data-v-23a3e354 class="van-grid-item"  style="flex-basis:33.3333%;padding-right:10px;">
                    <div class="van-grid-item__content van-grid-item__content--center van-grid-item__content--surround van-hairline">
                        <i class="van-icon van-grid-item__icon">
                            <img :src="srcList[4]" class="van-icon__image">
                            <div style="line-height: 15px">
                                <span data-v-23a3e354 class="van-grid-item__text">{{titleList[4]}}</span>
                                <div style="height: 20px;line-height: 2px">
                                    <span style="font-size:12px;color: #1989fa;">{{newList.windDirection}}</span>
                                    <span style="font-size:12px;color: #646566;">{{unitList[4]}}</span>
                                </div>
                            </div>
                        </i>
                    </div>
                </div>
                <div data-v-23a3e354 class="van-grid-item"  style="flex-basis:33.3333%;padding-right:10px;">
                    <div class="van-grid-item__content van-grid-item__content--center van-grid-item__content--surround van-hairline">
                        <i class="van-icon van-grid-item__icon">
                            <img :src="srcList[5]" class="van-icon__image">
                            <div style="line-height: 15px">
                                <span data-v-23a3e354 class="van-grid-item__text">{{titleList[5]}}</span>
                                <div style="height: 20px;line-height: 2px">
                                    <span style="font-size:12px;color: #1989fa;">{{newList.windSpeed}}</span>
                                    <span style="font-size:12px;color: #646566;">{{unitList[5]}}</span>
                                </div>
                            </div>
                        </i>
                    </div>
                </div>
                <div data-v-23a3e354 class="van-grid-item"  style="flex-basis:33.3333%;padding-right:10px;">
                    <div class="van-grid-item__content van-grid-item__content--center van-grid-item__content--surround van-hairline">
                        <i class="van-icon van-grid-item__icon">
                            <img :src="srcList[6]" class="van-icon__image">
                            <div style="line-height: 15px">
                                <span data-v-23a3e354 class="van-grid-item__text">{{titleList[6]}}</span>
                                <div style="height: 20px;line-height: 2px">
                                    <span style="font-size:12px;color: #1989fa;">{{newList.Rainfall}}</span>
                                    <span style="font-size:12px;color: #646566;">{{unitList[6]}}</span>
                                </div>
                            </div>
                        </i>
                    </div>
                </div>
                <div data-v-23a3e354 class="van-grid-item"  style="flex-basis:33.3333%;padding-right:10px;">
                    <div class="van-grid-item__content van-grid-item__content--center van-grid-item__content--surround van-hairline">
                        <i class="van-icon van-grid-item__icon">
                            <img :src="srcList[7]" class="van-icon__image">
                            <div style="line-height: 15px">
                                <span data-v-23a3e354 class="van-grid-item__text">{{titleList[7]}}</span>
                                <div style="height: 20px;line-height: 2px">
                                    <span style="font-size:12px;color: #1989fa;">{{newList.atmodphericPressure}}</span>
                                    <span style="font-size:12px;color: #646566;">{{unitList[7]}}</span>
                                </div>
                            </div>
                        </i>
                    </div>
                </div>
                <div data-v-23a3e354 class="van-grid-item"  style="flex-basis:33.3333%;padding-right:10px;">
                    <div class="van-grid-item__content van-grid-item__content--center van-grid-item__content--surround van-hairline">
                        <i class="van-icon van-grid-item__icon">
                            <img :src="srcList[8]" class="van-icon__image">
                            <div style="line-height: 15px">
                                <span data-v-23a3e354 class="van-grid-item__text">{{titleList[8]}}</span>
                                <div style="height: 20px;line-height: 2px">
                                    <span style="font-size:12px;color: #1989fa;">{{newList.soilHumidity}}</span>
                                    <span style="font-size:12px;color: #646566;">{{unitList[8]}}</span>
                                </div>
                            </div>
                        </i>
                    </div>
                </div>
                <div data-v-23a3e354 class="van-grid-item"  style="flex-basis:33.3333%;padding-right:10px;">
                    <div class="van-grid-item__content van-grid-item__content--center van-grid-item__content--surround van-hairline">
                        <i class="van-icon van-grid-item__icon">
                            <img :src="srcList[9]" class="van-icon__image">
                            <div style="line-height: 15px">
                                <span data-v-23a3e354 class="van-grid-item__text">{{titleList[9]}}</span>
                                <div style="height: 20px;line-height: 2px">
                                    <span style="font-size:12px;color: #1989fa;">{{newList.soilTemperature}}</span>
                                    <span style="font-size:12px;color: #646566;">{{unitList[9]}}</span>
                                </div>
                            </div>
                        </i>
                    </div>
                </div>
                <div data-v-23a3e354 class="van-grid-item"  style="flex-basis:33.3333%;padding-right:10px;">
                    <div class="van-grid-item__content van-grid-item__content--center van-grid-item__content--surround van-hairline">
                        <i class="van-icon van-grid-item__icon">
                            <img :src="srcList[10]" class="van-icon__image">
                            <div style="line-height: 15px">
                                <span data-v-23a3e354 class="van-grid-item__text">{{titleList[10]}}</span>
                                <div style="height: 20px;line-height: 2px">
                                    <span style="font-size:12px;color: #1989fa;">{{newList.soilPH}}</span>
                                    <span style="font-size:12px;color: #646566;">{{unitList[10]}}</span>
                                </div>
                            </div>
                        </i>
                    </div>
                </div>
                <div data-v-23a3e354 class="van-grid-item"  style="flex-basis:33.3333%;padding-right:10px;">
                    <div class="van-grid-item__content van-grid-item__content--center van-grid-item__content--surround van-hairline">
                        <i class="van-icon van-grid-item__icon">
                            <img :src="srcList[11]" class="van-icon__image">
                            <div style="line-height: 15px">
                                <span data-v-23a3e354 class="van-grid-item__text">{{titleList[11]}}</span>
                                <div style="height: 20px;line-height: 2px">
                                    <span style="font-size:12px;color: #1989fa;">{{newList.soilEC}}</span>
                                    <span style="font-size:12px;color: #646566;">{{unitList[11]}}</span>
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
            newList:[],
            srcList:[require('../assets/img/eshow/1.png'),require('../assets/img/eshow/2.png'),require('../assets/img/eshow/3.png'),require('../assets/img/eshow/4.png'),require('../assets/img/eshow/5.png'),require('../assets/img/eshow/6.png'),require('../assets/img/eshow/7.png'),require('../assets/img/eshow/8.png'),require('../assets/img/eshow/9.png'),require('../assets/img/eshow/10.png'),require('../assets/img/eshow/11.png'),require('../assets/img/eshow/12.png')],
            unitList:['(℃)','(%)','(%)','(lux)','()','(m/s)','(℃)','(Pa)','(%)','(℃)','(PH)','(us/cm)'],
            titleList:["空气温度","空气湿度","CO2浓度","光照强度","风向检测","风速检测","降雨量","大气压强","土壤湿度","土壤温度","土壤PH值","土壤电导率",],
            // List:[{
            //     title:"空气温度",
            //     unit:'(℃)',
            //     newIcon:require('../assets/img/eshow/1.png'),
            // },
            // {
            //     title:"空气湿度",
            //     unit:'(%)',
            //     newIcon:require('../assets/img/eshow/2.png'),
            // },
            // {
            //     title:"CO2浓度",
            //     unit:'(%)',
            //     newIcon:require('../assets/img/eshow/3.png'),
            // },
            // {
            //     title:"光照强度",
            //     unit:'(lux)',
            //     newIcon:require('../assets/img/eshow/4.png'),
            // },
            // {
            //     title:"风向检测",
            //     unit:'()',
            //     newIcon:require('../assets/img/eshow/5.png'),
            // },
            // {
            //     title:"风速检测",
            //     unit:'(m/s)',
            //     newIcon:require('../assets/img/eshow/6.png'),
            // },
            // {
            //     title:"降雨量",
            //     unit:'(℃)',
            //     newIcon:require('../assets/img/eshow/7.png'),
            // },
            // {
            //     title:"大气压强",
            //     unit:'(Pa)',
            //     newIcon:require('../assets/img/eshow/8.png'),
            // },
            // {
            //     title:"土壤湿度",
            //     unit:'(%)',
            //     newIcon:require('../assets/img/eshow/9.png'),
            // },
            // {
            //     title:"土壤温度",
            //     unit:'(℃)',
            //     newIcon:require('../assets/img/eshow/10.png'),
            // },
            // {
            //     title:"土壤PH值",
            //     unit:'(PH)',
            //     newIcon:require('../assets/img/eshow/11.png'),
            // },
            // {
            //     title:"土壤电导率",
            //     unit:'(us/cm)',
            //     newIcon:require('../assets/img/eshow/12.png'),
            // },
            // ], 
        }
    },
    // computed:{
    //     getEnlist(){
    //         return this.newList;
    //     }
    // },
    created(){
        getEnshow().then(res=>{
            this.newList = res.data.data;
            console.log(this.newList)
        })
    }
}
</script>

<style lang="less" scoped>
</style>