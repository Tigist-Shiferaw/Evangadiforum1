require('dotenv').config();
const pool=require('./server/config/database')
const mysql = require ("mysql");
const express = require("express");
const cors = require("cors");
const userRouter = require('./server/api/users/user.router');
// const { Pool } = require('@mui/icons-material');
const app = express();

const port = process.env.PORT;



app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users", userRouter);



app.listen(port, () => console.log(`Listening at http://localhost:${port}`));