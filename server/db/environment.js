const mongoose = require("mongoose");
let Schema = mongoose.Schema;

// 设置数据要求
let environment = module.exports = mongoose.model("environment",new mongoose.Schema({
    airTemperature:{type:String,required: true},
    airHumidity:{type:String,required: true},
    Carbondioxide:{type:String,required: true},
    lightIntensity:{type:String,required: true},
    windDirection:{type:String,required: true},
    windSpeed:{type:String,required: true},
    Rainfall:{type:String,required: true},
    atmodphericPressure:{type:String,required: true},
    soilHumidity:{type:String,required: true},
    soilTemperature:{type:String,required: true},
    soilPH:{type:String,required: true},
    soilEC:{type:String,required: true}
}))

//增加数据
// for(let i=0;i<12;i++){
    // environment.create({
    //     airTemperature:100,
    //     airHumidity:100,
    //     Carbondioxide:100,
    //     lightIntensity:100,
    //     windDirection:100,
    //     windSpeed:100,
    //     Rainfall:100,
    //     atmodphericPressure:100,
    //     soilHumidity:100,
    //     soilTemperature:100,
    //     soilPH:100,
    //     soilEC:100,
    // })
// }
// for(let i=0;i<5;i++){
//     environment.create({
//         title: "空气温度",
//         data: "25",
//         unit:"%"
//     })
// }


module.exports = environment;