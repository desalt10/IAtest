const mongoose = require("mongoose");
let Schema = mongoose.Schema;

// 设置数据要求
let environment = module.exports = mongoose.model("environment",new mongoose.Schema({
    // airTemperature:{type:String,required: true},
    // airHumidity:{type:String,required: true},
    // Carbondioxide:{type:String,required: true},
    // lightIntensity:{type:String,required: true},
    // windDirection:{type:String,required: true},
    // windSpeed:{type:String,required: true},
    // Rainfall:{type:String,required: true},
    // atmodphericPressure:{type:String,required: true},
    // soilHumidity:{type:String,required: true},
    // soilTemperature:{type:String,required: true},
    // soilPH:{type:String,required: true},
    // soilEC:{type:String,required: true},
    title:{type:String,required: true},
    data:{type:Number,required:true},
    unit:{type:String,required: true}
}))

//增加数据
/*for(let i=0;i<5;i++){
    environment.create({
        airTemperature:1,
        airHumidity:2,
        Carbondioxide:3,
        lightIntensity:4,
        windDirection:5,
        windSpeed:6,
        Rainfall:7,
        atmodphericPressure:8,
        soilHumidity:9,
        soilTemperature:10,
        soilPH:11,
        soilEC:12,
    })
}*/
// for(let i=0;i<5;i++){
//     environment.create({
//         title: "空气温度",
//         data: "25",
//         unit:"%"
//     })
// }


module.exports = environment;