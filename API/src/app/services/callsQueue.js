const kue = require('kue');
const eventsHandlerJob = require('../jobs/eventsHandlerJob');

// Create the queue
const Queue = kue.createQueue({
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
  }
});

//Queues the job
Queue.process(
  eventsHandlerJob.key,
  process.env.NUMBER_PARALLEL_JOBS || 1,
  eventsHandlerJob.handle
);

module.exports = Queue;
