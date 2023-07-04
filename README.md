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

# Building event-driven systems with kafka

## What are we building?
* A simple event-driven system that will allow us to send messages to kafka and then consume them

<img src="./diagram.png" width="500px" />b


## Why Kafka?
* Kafka is a distributed streaming platform
* It is horizontally scalable
* It is fault tolerant
* It is fast
* It is used by many companies including Uber, Netflix, LinkedIn, and many more

## Kafka terms and definitions
* **Producer** - A producer is a client that sends messages to a topic on the Kafka cluster

* **Consumer** - A consumer is a client that reads messages from a topic on the Kafka cluster

* **Topic** - A topic is a category or feed name to which records are published. Topics in Kafka are always multi-subscriber

* **Broker** - A broker is a server that hosts a topic. Each broker is identified by a unique id

* **Partition** - A partition is an ordered, immutable sequence of records that is continually appended to a file. The records in the partitions are each assigned a sequential id number called the offset that uniquely identifies each record within the partition.

* **Replication** - Replication is the process of duplicating data across multiple brokers. Replication provides fault tolerance and high availability. A topic can have multiple partitions, and each partition can have multiple replicas.

* **Consumer Group** - A consumer group is a group of consumers that cooperate to consume messages from a set of topics. Each consumer in a group can process the messages in parallel. The Kafka cluster ensures that each message is delivered to one consumer in each subscribing consumer group.

* **Offset** - The offset is a unique identifier for a message within a partition. The offset is assigned when a producer publishes a message to a partition. The offset is used by the consumer to determine the message to process next.

* **Leader** - The leader is the server that is currently the active controller for a partition. The leader handles all read and write requests for the partition. Only the leader can become a follower.

* **Follower** - The follower is a passive server that replicates the log of the leader. The follower can become the leader if the current leader fails.