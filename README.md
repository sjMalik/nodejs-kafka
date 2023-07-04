## What is Kafka?
![](./Kafka.png)

Kafka is an event streaming platform which you can use to build event driven systems. So you can have producer which produce events and you can have compltely seprate application which are able to consume these events by reading them from Kafka. Kafka has the notion of topics, this is kind of different categories of events. So you can have producer that will write to a topic and then you can have a consumer that will read events from that topic.

## What is Zookeeper?
![](./zookeeper.png)
![](./zookeeper2.png)

## [Kafka with zookeeper and kafkadrop](https://www.red-gate.com/simple-talk/development/dotnet-development/setting-up-a-kafka-test-environment-with-kafdrop/)

## Steps
Step 1: Run Kafka
```
docker-compose up
```
Step 2: Create topics
```
docker exec -it kafka /opt/bitnami/kafka/bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic test
```

* If you use this kind of syntax `const import x from '<x-package>'` then use `"type": "module"` in `package.json`.

## Packages used
1. node-rdkafka
The node-rdkafka library is a high-performance NodeJS client for Apache Kafka that wraps the native librdkafka library. 
2. Avsc
Pure JavaScript implementation of the Avro specification. Blazingly fast and compact serialization! Typically faster than JSON with much smaller encodings.

## What is Avro?
Avro facilitates the exchange of big data between programs written in any language. With the serialization service, programs can efficiently serialize data into files or into messages. The data storage is compact and efficient. Avro stores both the data definition and the data together in one message or file.

Avro stores the data definition in JSON format making it easy to read and interpret; the data itself is stored in binary format making it compact and efficient. 