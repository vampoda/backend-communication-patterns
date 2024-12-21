const amqp=require("amqplib")
const config=require("./config")
const winston=require("winston")

const logger=winston.createLogger({
    level:"info",
    transports:[
        new winston.transports.Console(),
        new winston.transports.File({filename:"app.log"})

    ],
});



const sendToQueue=async (message) =>{


    try{
        const connection = await amqp.connect(`amqp://${config.rabbitmq.user}:${config.rabbitmq.password}@${config.rabbitmq.host}:${config.rabbitmq.port}`);

        const channel=await connection.createChannel();



        await channel.assertQueue(config.rabbitmq.queue,{
            durable:true,
        })
        channel.sendToQueue(config.rabbitmq.queue,Buffer.from(message),{persistent:true})
        logger.info("sent message succesfully")

await channel.close()
await connection.close()



    }catch (error){

logger.error("Error sending message to RabbitMQ",error)


    }
    
};


setInterval(()=>{
    sendToQueue(`Task message at ${new Date().toISOString()}`)

},2000);
