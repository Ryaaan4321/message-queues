import amqp from "amqplib";
const RABBITMQ_URL = "amqp://localhost:5672";
const EXCHANGE = "orders_exchange";
const QUEUE = "orders_process_queue";
const ROUTING_KEY = "order.process";

export async function connectRabbitMQ() {
  const connection = await amqp.connect(RABBITMQ_URL);
  const channel = await connection.createChannel();
  await channel.assertExchange(EXCHANGE, "direct", { durable: true });
  await channel.assertQueue(QUEUE, { durable: true });
  await channel.bindQueue(QUEUE, EXCHANGE, ROUTING_KEY);
  console.log("RabbitMQ topology ready");
  return { connection, channel };
}
export { EXCHANGE, QUEUE, ROUTING_KEY };