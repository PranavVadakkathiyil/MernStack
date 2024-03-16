let a = {
    avg : (a,b)=>{
        console.log((a+b)/2);
    },
    percent : (a,b)=>{
        console.log((a/b)*100)
    }
}
module.exports = a
const fs = require("fs")
const Home = fs.readFileSync("./index.html")
const PORT = 2000;
const host = "localhost"
const http = require("http");
const server = http.createServer((req,res)=>{
   if(req.url === '/about')
   {
   return res.end(Home)
   }
   if(req.url === '/contact')
   {
   return res.end("<h1>contact page</h1>")
   }
   else {
   return res.end("<h1>404 page not found </h1>")
   }

})
server.listen(PORT,host,()=>{
    console.log(`Server run on http://${host}:${PORT}`)
})

