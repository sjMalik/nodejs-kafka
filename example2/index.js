import express from 'express';
import bodyParser from 'body-parser';
import debug from 'debug';
import controllers from './controller.js';
import KafkaConfig from './config.js';

const app = express();
const logger = debug('node-kafka:express');

app.post('/api/send', bodyParser.json(), controllers.sendMessageToKafka);

const kafkaConfig = new KafkaConfig();
kafkaConfig.consume('my-topic', (value) => {
  logger('Receive message', value);
});

app.listen(8080, () => {
  logger('server running at port 8080');
});
