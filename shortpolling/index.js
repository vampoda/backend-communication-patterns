const app=require("express")()
const cors=require("cors")
const jobs={}
app.use(cors("*"))
app.post("/submit",(req,res)=>{
    const jobId=`job:${Date.now()}`
jobs[jobId]=0;
updateJob(jobId,0)
res.end("\n\n "+jobId+"\n\n")




})

app.get("/checkstatus",(req,res)=>{
    const jobId=req.query.jobId
    if(!jobs[jobId]){
        return res.status(404).end("\n\nJob not found \n\n");
    }

    res.end("\n\nJobstatus:"+jobs[req.query.jobId]+"%\n\n")
})

const port=process.env.PORT||8000

app.listen(port,()=>{
    console.log(`listening at ${port}`)
})



function updateJob( jobId,prg){

    jobs[jobId]=prg
console.log(`updated ${jobId} to ${prg}`)

if(prg===100) return;
setTimeout(() => {
updateJob(jobId,prg+10)    
}, 3000);
}