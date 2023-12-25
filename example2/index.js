import express from 'express';
import debug from 'debug';
import controllers from './controller.js';

const app = express();
const logger = debug('node-kafka:express');

app.use(express.json());
app.post('/api/createTopic', controllers.createTopic);
app.post('/api/send', controllers.sendMessageToKafka);
app.post('/api/receive', controllers.getMessasgeFromKafka);

// const kafkaConfig = new KafkaConfig();
// kafkaConfig.consume('my-topic', (value) => {
//   logger('Receive message', value);
// });

app.listen(8080, () => {
  logger('server running at port 8080');
});
