const app=require("express")()
const cors=require("cors")
const jobs={}
app.use(cors("*"))
app.post("/submit",(req,res)=>{
   
   try{
    const jobId=`job:${Date.now()}`
jobs[jobId]=0;
updateJob(jobId,0)
// res.send("hello")
res.end("\n\n "+jobId+"\n\n")
   }
   catch(error){
res.write(error.message)    
    
   }



})

app.get("/checkstatus",async(req,res)=>{
    const jobId=req.query.jobId;
    if(!jobs[jobId]){
        return res.status(404).end("\n\n Job not found \n\n");
    }

while(await checkJobComplete(jobId)===false){
    res.write(`\n\nJob status: ${jobs[jobId]}%\n\n`);

}

    res.end("\n\nJobstatus:complete"+jobs[jobId]+"%\n\n")
})

const port=process.env.PORT||8000

app.listen(port,()=>{
    console.log(`listening at ${port}`)
})


async function checkJobComplete(jobId) {

    return new Promise((resolve,reject)=>{
        if(jobs[jobId]<100){
            setTimeout(()=>resolve(false),1000)
        }
            else{
                resolve(true)
            }
        }
    )
    
}


function updateJob( jobId,prg){

    jobs[jobId]=prg
console.log(`updated ${jobId} to ${prg}`)

if(prg===100) return;
setTimeout(() => {


    updateJob(jobId,prg+10)    
}, 10000);
}