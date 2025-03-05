// 1. import
import express from 'express';
import cors from 'cors'
import 'dotenv/config'
// 2 create app
const app = express();
const port = 8080
app.use(cors())
// 3. One route
app.get('/', (req, res) => {
res.send('Hello World!');
})
// listen on a specific port
app.listen(port, () => {
console.log(`Example app listening on port ${port}`);
})