import fastq, { queueAsPromised } from 'fastq';
import { worker } from './worker';

export type QueueTask = {
  email: string;
};

const CONCURRENCY = 5;

export const queue: queueAsPromised<QueueTask> = fastq.promise(
  worker,
  CONCURRENCY
);
