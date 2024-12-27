const grpc=require("@grpc/grpc-js")
const protoLoader=require("@grpc/proto-loader")

const path=require("path")

const { start } = require("repl");
const PROTO_PATH = path.join(__dirname, 'protos', 'greeter.proto');

const packageDefinition=protoLoader.loadSync(PROTO_PATH)
const greeterProto=grpc.loadPackageDefinition(packageDefinition).greeter



function sayHello(call,callback){


const {name}=call.request

if(!name){
    return callback({
        code: grpc.status.INVALID_ARGUMENT,
        details: 'Name is required.',
    })
}
callback(null,{message:`hello,${name}!`})

}

const server=new grpc.Server();


function startServer(){
server.addService(greeterProto.Greeter.service,{sayHello:sayHello})

}




const PORT="50051"

server.bindAsync(`127.0.0.1:${PORT}`,grpc.ServerCredentials.createInsecure(),(err,port)=>{
if(err){

console.error("Server failed to bind:",err)
return

}
console.log(`Server is running on https://localhost:${port}`)


})







startServer()


