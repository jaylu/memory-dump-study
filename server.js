import express from 'express';
import { writeHeapSnapshot } from 'node:v8';
const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello, world!');
});

app.get('/heapdump', (req, res) => {
    const outputPath = `/tmp/${new Date().getTime()}.heapsnapshot`
    const outputFile = writeHeapSnapshot(outputPath);
    res.download(outputFile);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});