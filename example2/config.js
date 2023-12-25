import debug from 'debug';
import { Kafka } from 'kafkajs';

const logger = debug('node-kafka:config');

class KafkaConfig {
  constructor() {
    this.kafka = new Kafka({
      clientId: 'nodejs-kafka',
      brokers: ['localhost:9092'],
    });
    // producer = this.kafka.producer();
    // consumer = this.kafka.consumer({ groupId: 'test-group' });
  }

  // Function to create a topic with multiple partitions
  async createTopic(topicName, NoOfPartitions) {
    try {
      // Create an admin client to manage Kafka topics
      const admin = this.kafka.admin();
      await admin.connect();
      await admin.createTopics({
        topics: [{
          topic: topicName.toString(),
          // eslint-disable-next-line radix
          numPartitions: parseInt(NoOfPartitions), // Number of partitions for the topic
          replicationFactor: 1, // Replication factor, adjust as needed
        }],
      });
      await admin.disconnect();
    } catch (e) {
      debug(e);
    }
  }

  async produce(topic, messages) {
    const producer = this.kafka.producer();
    try {
      await producer.connect();
      await producer.send({
        topic,
        messages,
      });
    } catch (e) {
      debug(e);
    } finally {
      await producer.disconnect();
    }
  }

  async consume(topicName, callback) {
    const consumer = this.kafka.consumer({ groupId: 'test-group' });
    try {
      await consumer.connect();
      await consumer.subscribe({
        topic: topicName,
        fromBeginning: true,
      });
      await consumer.run({
        eachMessage: async ({
          topic,
          partition,
          message,
        }) => {
          const value = `Received message: ${message.value.toString()} 
          from partition ${partition} & topic ${topic}`;
          callback(value);
        },
      });
    } catch (e) {
      logger(e);
    }
  }
}

export default KafkaConfig;
