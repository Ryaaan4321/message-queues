import rabbit from 'rabbitmq-stream-js-client'

const client=new rabbit.connect({
    hostname:"localhost",
    port:5552,
    username:"guest",
    password:"guest",
    vhost:"/"
})
