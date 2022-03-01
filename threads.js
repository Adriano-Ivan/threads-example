const { isMainThread, workerData, Worker } = require("worker_threads");

if (isMainThread) {
  console.log(`Main Thread ! Process ID: ${process.pid}`);
  new Worker(__filename, {
    workerData: [7, 6, 3, 9],
  });
  new Worker(__filename, {
    workerData: [1, 4, 3, 2],
  });
} else {
  console.log(`Worker ! Process ID: ${process.pid}`);
  console.log(`${workerData} sorted is ${workerData.sort()}`);
}
