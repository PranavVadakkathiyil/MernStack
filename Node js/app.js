const a = require("./index")
a.avg(1,2);
a.percent(2,3);


const fs = require("fs");
let text = "Have a good day";
fs.readFile('./letter.txt',"utf-8",(err,data)=>{
    if(err)
    {
        console.log(err)
    }
    console.log(data)
})
fs.writeFile("./sample.txt",text,()=>{
    console.log("Written")
})
const os = require("os")
console.log(os.userInfo())