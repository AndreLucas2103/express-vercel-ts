import express from "express";
const app = express();
import { router } from "./api/product";


app.use("/", router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
