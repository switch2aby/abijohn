



import express from 'express'

import { renderToString } from 'react-dom/server'
import App from './components/App'
import fs from 'fs';

var app = express();

// app.use(express.static('public'))
app.get('/app', (req, res) => {
    let out = renderToString(<App />)
    let html = fs.readFileSync(__dirname, 'index.html')
    html.replace('<-- App --> ', out);
    res.send(html);
})

app.listen(3000, () => {
    console.log("server listenint at http://localhost:3000");
})