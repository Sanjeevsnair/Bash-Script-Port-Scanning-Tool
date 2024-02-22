const express = require('express');
const bodyParser = require('body-parser');
const nmap = require('node-nmap');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/scan', async (req, res) => {
    const { target } = req.body;
    const quickscan = new nmap.QuickScan(target);
    await quickscan.on('complete', data => {
        res.json(data);
    }).on('error', err => {
        res.status(500).json({ error: err.message });
    }).start();
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
