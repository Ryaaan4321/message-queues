
import { connectRabbitMQ,EXCHANGE,ROUTING_KEY } from "./lib/rabbitMq.js";
async function main() {
  const { channel, connection } = await connectRabbitMQ();
  const order = { orderId: Date.now(), item: "laptop", amount: 50000 };
  channel.publish(EXCHANGE, ROUTING_KEY, Buffer.from(JSON.stringify(order)), {
    persistent: true,
  });
  console.log("Sent:", order);
  setTimeout(() => connection.close(), 500);
}
main();