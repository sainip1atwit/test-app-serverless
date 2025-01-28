const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
    DATABASE_URL: process.env.DATABASE_URL ? process.env.DATABASE_URL : 'no database found',
  });
});

app.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

//server-full app
// app.listen(3000, () => {
//   console.log('Running on localhost:3000');
// });

exports.handler = serverless(app);
