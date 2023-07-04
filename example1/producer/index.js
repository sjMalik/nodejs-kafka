const Kafka = require('node-rdkafka');
const debug = require('debug')('node-kafka:producer');
const eventType = require('../eventType');

const stream = Kafka.Producer.createWriteStream({ 'metadata.broker.list': 'localhost:9092' }, {}, { topic: 'test' });

stream.on('error', err => {
  debug('Error in Kafka Stream');
  debug(err);
})

function getRandomAnimal() {
  const categories = ['CAT', 'DOG'];
  return categories[Math.floor(Math.random() * categories.length)];
}

function getRandomNoise(animal) {
  if (animal === 'CAT') {
    const noises = ['meow', 'purr'];
    return Math.floor(Math.random() * noises.length);
  } if (animal === 'DOG') {
    const noises = ['bark', 'woof'];
    return Math.floor(Math.random() * noises.length);
  }
  return 'silence...';
}

function queueRandomMessage() {
  const category = getRandomAnimal();
  const noise = getRandomNoise(category);
  const event = { category, noise };
  const success = stream.write(eventType.toBuffer(event));
  if (success) {
    debug(`Message queued ${JSON.stringify(event)}`);
  } else {
    debug('Too many message in the queue already');
  }
}

setInterval(() => {
  queueRandomMessage();
}, 3000);
