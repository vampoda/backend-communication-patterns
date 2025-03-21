const express=require("express")
const swaggerUi=require("swagger-ui-express")
const YAML=require("yamljs")
const zod=require("zod")
const cors=require("cors")
const helmet=require("helmet")

const {OpenApiValidator}=require("express-openapi-validator")

let todoSchema=zod.object({
    id:z.string,
    title:z.string.min(),
    completed:z.boolean().optional()

})

require("dotenv").config()
const app=express()

const PORT=process.env.PORT||4000


const swaggerDocument=YAML.load("openapi.yaml")
app.use(helmet())
app.use(cors())
app.use(express.json())

// app.use(
//     OpenApiValidator.middleware({apiSpec:"openapi.yaml",
//      validateRequests:true,
//     validateResponses:true,
//     })
// )



let todos=[{id:"1",title:"learn openai",completed:false},{id:"1",title:"learn openai3",completed:true},{id:"2",title:"learn openai2",completed:false}]


app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDocument))


app.get("/todos",(re,res)=>{
    res.json(todos)
})
app.post("/todos",(req,res)=>{
const {id,title,completed=false}=req.body
console.log({id,title,completed})
if(!id||!title)
    return res.status(400).json("Id and title are required");
    

const newTodo={id,title,completed:completed||false}

todos.push(newTodo)
res.status(201).json(newTodo)


})




app.use((err,req,res,next)=>{
    if(err.status){
        res.status(err.status).json({error:err.message})
        
    }else{
        
    console.error("Unexpected error:",err);
    res.status(500).json({error:"internal server error"})
    
    
    }
})




app.listen(PORT,()=>console.log("started ",PORT))








