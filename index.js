import express from "express";
import cors from "cors";
const app = express()

app.use(cors())
    .use("/", express.static('main_page'));

app.get("/sasas", (req, res) => res.send("[\"agaga\"]"));

const port = 80;
const server = app.listen(port);

console.log('Express app started on port ' + port);
