

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


console.log(__dirname);

const app = express();


const baseDir = (path.join(__dirname, '/dist'));
console.log(baseDir)

app.get('*', (req,res) => res.sendFile('index.html' , { root : baseDir }))

const port = 4000

app.listen(port, () => console.log(`Servidor subiu com sucesso em http://localhost:${port}`))