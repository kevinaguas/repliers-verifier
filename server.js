const express = require('express');
const app = express();

app.post('/', (req, res) => {
  const secret = req.header('X-Hook-Secret');
  console.log('Secret received:', secret);

  res.set('X-Hook-Secret', secret);
  res.sendStatus(200);
});

app.get('/', (req, res) => {
  res.send('OK');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on ${PORT}`));
