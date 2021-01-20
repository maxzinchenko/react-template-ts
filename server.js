const path = require('path');
const express = require('express');

const BUILD_DIR = path.join(__dirname, 'dist');
const PORT = 8080;
const app = express();

// Serving the files on the dist folder
app.use(express.static(BUILD_DIR));

// Send index.html when the user access the web
app.get('*', (req, res) => {
  res.sendFile(path.join(BUILD_DIR, 'index.html'));
});

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`\n\n\nServer is running on port ${ PORT } to stop it press Ctrl + C\n\n\n`));
