const amqp = require('amqplib');
const config = require('./config');
const winston = require('winston');
const logger = winston.createLogger({
    level: 'info',
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'app.log' }),
    ],
  });

  const processMessage=async(message)=>{
    logger.info(`processing message : ${message.toString()}`)
   await new Promise((resolve)=>setTimeout(resolve,1000)) ;
   logger.info(`Processed message : ${message.content.toString()}`);

  }



  const consumeFromQueue=async()=>{
    try{
        const connection= await amqp.connect(`amqp://${config.rabbitmq.user}:${config.rabbitmq.password}@${config.rabbitmq.host}`);

const channel =await connection.createChannel()
await channel.assertQueue(config.rabbitmq.queue,{
    disble:true,

})

channel.prefetch(1)
channel.consume(config.rabbitmq.queue,async (message)=>{
    if(message!==null){
        await processMessage(message)
        channel.ack(message)


    }
})

logger.info("waiting for message")


    }catch(error){

        logger.info("Error consuming message from queue:",error);
    }
  }

  consumeFromQueue()

