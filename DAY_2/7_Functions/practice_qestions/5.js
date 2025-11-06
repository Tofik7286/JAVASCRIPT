// 5. Write a function that takes a traffic light color and gives the correct instruction (e.g. "go"
// for green, "stop" for red, "caution" for yellow, and "invalid color" for anything else).
let traffic_light_color = "orange"
x = (traffic_light_color)=>{
    if (traffic_light_color === "green") {
        console.log("GO")
    }
    else if (traffic_light_color === "red") {
        console.log("STOP")
    }
    else if (traffic_light_color==="orange") {
        console.log("CAUTION")
    }else{
        console.log("INVALID COLOR")
    }
}

x(traffic_light_color.toLowerCase())