require("dotenv").config()

const config={
    rabbitmq:{
        host:process.env.RABBITMQ_HOST ||"localhost",
        queue:process.env.RABBITMQ_QUEUE|| "task_queue",
        port: process.env.RABBITMQ_PORT || 5672,

        user:process.env.RABBITMQ_USER || "guest",
        password:process.env.RABBITMQ_PASSWORD ||"guest",



    },
};
module.exports=config

