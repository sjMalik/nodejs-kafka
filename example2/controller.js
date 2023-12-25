import debug from 'debug';
import KafkaConfig from './config.js';

const logger = debug('node-kafka:controller');

const createTopic = async (req, res) => {
  try {
    const { topic, noOfPartitions } = req.body;
    const kafkaConfig = new KafkaConfig();
    await kafkaConfig.createTopic(topic, noOfPartitions);
    res.status(200).json({
      status: 'Ok',
      message: 'Topic successfully created',
    });
  } catch (e) {
    logger(e);
    res.status(500).send({
      message: 'Failed to publish message',
    });
  }
};

const sendMessageToKafka = async (req, res) => {
  try {
    const { topic, message } = req.body;
    const kafkaConfig = new KafkaConfig();
    const messages = [{
      key: message?.key,
      value: message?.value,
    }];
    kafkaConfig.produce(topic, messages);

    res.status(200).json({
      status: 'Ok',
      message: 'Message successfully published',
    });
  } catch (e) {
    logger(e);
    res.status(500).send({
      message: 'Failed to publish message',
    });
  }
};

const getMessasgeFromKafka = async (req, res) => {
  try {
    const { topic } = req.body;
    const kafkaConfig = new KafkaConfig();
    kafkaConfig.consume(topic, (message) => {
      logger('Receive message', message);
      res.status(200).json({
        status: 'Ok',
        message,
      });
    });
  } catch (e) {
    logger(e);
    res.status(500).send({
      message: 'Failed to publish message',
    });
  }
};

const controllers = { createTopic, sendMessageToKafka, getMessasgeFromKafka };
export default controllers;
