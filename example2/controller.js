import debug from 'debug';
import KafkaConfig from './config.js';

const logger = debug('node-kafka:controller');

const sendMessageToKafka = async (req, res) => {
  try {
    const { message } = req.body;
    const kafkaConfig = new KafkaConfig();
    const messages = [{
      key: 'key1',
      value: message,
    }];
    kafkaConfig.produce('my-topic', messages);

    res.status(200).json({
      status: 'Ok',
      message: 'Message successfully send',
    });
  } catch (e) {
    logger(e);
  }
};

const controllers = { sendMessageToKafka }
export default controllers;
