import express from "express";
import { PORT } from "./config/env.js";
import productRouter from "./routes/product.routes.js";
import mongoDbConnection from "./database/mongodb-connection.js";
import customerRouter from "./routes/customer-routes.js";

const app = express();

app.use(express.json());

app.use("/api/v1/products", productRouter);
app.use("/api/v1/customers", customerRouter);

app.get("/", (req, res) => {
  res.status(200).json("Welcome to the Project Management API");
});

const startSever = async () => {
  try {
    await mongoDbConnection();

    app.listen(PORT, () => {
      console.log(
        `Product Management API is now listening on http://localhost:${PORT}`,
      );
    });
  } catch (e) {
    console.error(`Something went wrong, Cannot start the sever: ${e}`);
  }
};

await startSever();
