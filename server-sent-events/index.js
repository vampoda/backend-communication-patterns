const app=require("express")()
const cors=require("cors")

app.use(cors("*"))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.get("/ping",(req,res)=>{
    res.send("pong!")
})
app.get("/stream",(req,res)=>{
    res.setHeader("Content-Type","text/event-stream")
send(res)

})


const port=process.env.PORT||8080;
let i=0;
function send(res){
    res.write("data:"+`hello from server ----[${i++}]\n\n`)
    setTimeout(()=>send(res),1000)
}


app.listen(port,()=>{
    console.log(`listening at ${port}`)
})