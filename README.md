# Backend Communication Patterns in Node.js

This repository contains my implementations of various backend communication patterns in Node.js. After completing the **Fullstackopen** MOOC, I wanted to explore and understand different backend communication patterns, such as **polling**, **long polling**, **short polling**, **server-sent events (SSE)**, and others. The goal is to experiment with these patterns, deepen my understanding, and compare how they can be used in real-world applications.

The repository includes various patterns I’ve learned through the course and from additional research, and I am continuously expanding and refining them. Some patterns are still a work in progress, so please keep that in mind as you explore the project.

## Patterns Included

- **Polling**: Simple request-response model where the client repeatedly checks the server for new data.
- **Long Polling**: A variation of polling where the server holds the request open until new data is available.
- **Server-Sent Events (SSE)**: Real-time unidirectional communication where the server sends updates to the client over HTTP.
- **WebSockets**: Full-duplex, bi-directional communication between server and client.
- **Message Queues / Pub/Sub**: Event-driven architecture that decouples producers and consumers of messages.
- **GraphQL**: A flexible alternative to REST for querying and mutating data through a single endpoint.
- **Short Polling**: A hybrid pattern with frequent but limited polling intervals to reduce server load.

> **Note**: Not all patterns are fully implemented yet. This project is ongoing, and I'm actively working to complete the implementations for all the communication patterns listed above.

## Key Features

- **Node.js & Express**: Uses Node.js and Express to implement the backend patterns.
- **Error Handling**: Centralized error handling with custom error classes to manage different types of errors in a consistent way.
- **Real-Time Communication**: Implementation of both **WebSockets** and **Server-Sent Events** for real-time communication between the server and the client.
- **Polling Variants**: Various polling strategies (short polling, long polling) to compare and analyze their advantages and drawbacks.
- **Scalable Architecture**: Concepts such as **Message Queues** (e.g., **RabbitMQ**, **Kafka**) to handle distributed systems and decouple microservices.
- **Testing**: Unit and integration tests for verifying the behavior of each pattern.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/backend-communication-patterns.git
