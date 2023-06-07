import express from "express";
import createRoute from "./imports/post.js";
import getRoute from "./imports/get.js";
import deleteRoute from "./imports/delete.js";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", getRoute);
app.post("/", createRoute);
app.delete("/", deleteRoute);

const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});