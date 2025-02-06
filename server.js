const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use('/audio', express.static(path.join(__dirname, 'public/audio')));

app.get('/', (req, res) => {
    res.send('Audio server is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
