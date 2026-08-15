import { connectRabbitMQ,QUEUE } from "./rabbitMq.js";
async function main() {
  const { channel } = await connectRabbitMQ();

  console.log("Waiting for messages...");

  channel.consume(QUEUE, (msg) => {
    if (msg) {
      const order = JSON.parse(msg.content.toString());
      console.log("Received:", order);
      channel.ack(msg);
    }
  });
}

main();