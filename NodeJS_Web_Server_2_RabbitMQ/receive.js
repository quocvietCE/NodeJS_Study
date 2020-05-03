var express = require('express');

var app = express();

var amqp = require('amqplib/callback_api');

const port = 3002;

// amqp.connect('amqp://localhost', (err, conn) => {
// 	conn.createChannel((err, ch) => {
// 		var queue = 'FirstQueue';
// 		// var message = {type: 2, content: 'Hello RabbitMQ'};

// 		ch.assertQueue(queue, {durable: false});
// 		console.log('Waiting for message in ', queue)
// 		// ch.sendToQueue(queue, Buffer.from(JSON.stringify(message))); 
// 		ch.consume(queue, (message) => {
// 			console.log(`Received ${message.content}`);
// 		}, {noAck: true});
		
// 	});
// 	//  
// })

Step 1: npm install amqplib
Step 2: Create file and pase Code below
var amqp = require('amqplib/callback_api');
amqp.connect('amqp://rabbitmq:s3cr3tc00ki3@qa.customer.cargopedia.success-ss.com.vn:5672/cargopedia', (err, connection) => {
	connection.createChannel((err, channel) => {
		if (err) {
			console.log('err: ', err);
			throw err;
		}
		var queue = 'NotificationQueue2231';
		channel.assertQueue(queue, {durable: false});
		console.log('Waiting for message in ', queue)
		channel.consume(queue, (message) => {
			console.log(`Received ${message.content}`);
			// channel.ack(message);
		}, {
			noAck: true
		});
	});
})

// app.listen(port, ()=>console.log('App Listening on port ', port))