require("dotenv").config();
const express = require("express");
const productRouter = require("./routes/product.routes");
const customErrorMiddleware = require("./middlewares/error.middleware");
const databaseConnection = require("./database/dbconnection");

const app = express();

//middleware
app.use("/api/v1/products", productRouter);

app.use(customErrorMiddleware);

app.get("/", (req, res) => {
  res.send("Welcome to our home page");
});

const startServer = async () => {
  try {
    // connect to db
    await databaseConnection();

    const server = app.listen(process.env.PORT, "127.0.0.1", (error) => {
      if (error) {
        throw error;
      }
      console.log(`Server is listening on Port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(error.message);
  }
};

await startServer();
