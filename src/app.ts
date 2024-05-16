const express = require('express')
import { json } from 'body-parser';
const bodyParser = require('body-parser')
import * as dotenv from 'dotenv';
import mainRouter from "./routes/MainRoute";
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(json());

// Enable CORS
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use('/v1/data', mainRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
