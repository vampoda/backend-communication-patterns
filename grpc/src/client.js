const grpc=require("@grpc/grpc-js")
const protoLoader=require("@grpc/proto-loader")
const path=require("path")

const PROTO_PATH = path.join(__dirname, 'protos', 'greeter.proto');

const packageDefinition=protoLoader.loadSync(PROTO_PATH)
const  greeterproto=grpc.loadPackageDefinition(packageDefinition).greeter
const cleint=new greeterproto.Greeter("127.0.0.1:50051",
    grpc.credentials.createInsecure()

)


cleint.sayHello({name:"john"},(error,respose)=>{
if(error){
    console.error("Error:",error)
}else{

    console.log("Server response:",respose.message)
}

}
)


