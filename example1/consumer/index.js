const Kafka = require('node-rdkafka');
const debug = require('debug')('node-kafka:consumer');
const eventType = require('../eventType');

const consumer = new Kafka.KafkaConsumer({
  'group.id': 'kafka',
  'metadata.broker.list': 'localhost:9092',
}, {});

consumer.connect();

consumer.on('ready', () => {
  debug('Consumer is ready');
  consumer.subscribe(['test']);
  consumer.consume();
}).on('data', (data) => {
  debug(`Received message ${eventType.fromBuffer(data.value)}`);
});
