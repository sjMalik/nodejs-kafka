import debug from 'debug';
import { Kafka } from 'kafkajs';

const logger = debug('node-kafka:config')

class KafkaConfig {
  constructor() {
    this.kafka = new Kafka({
      clientId: 'nodejs-kafka',
      brokers: ['localhost:9092'],
    });
    this.producer = this.kafka.producer();
    this.consumer = this.kafka.consumer({ groupId: 'test-group' });
  }

  async produce(topic, messages) {
    try {
      await this.producer.connect();
      await this.producer.send({
        topic,
        messages,
      });
    } catch (e) {
      debug(e);
    } finally {
      await this.producer.disconnect();
    }
  }

  async consume(topic, callback) {
    try {
      await this.consumer.connect();
      await this.consumer.subscribe({
        topic,
        fromBeginning: true,
      });
      await this.consumer.run({
        eachMessage: async ({
          topic,
          partition,
          message,
        }) => {
          const value = message.value.toString();
          callback(value);
        },
      });
    } catch (e) {
      debug(e);
    }
  }
}

export default KafkaConfig;
