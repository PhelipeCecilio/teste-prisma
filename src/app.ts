import express from "express";
import routes from "./routes";

import Logger from './utils/logger.utils';

const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get("/", (req, res) => {
    res.status(200).json({ message: "Server is up and running!" });
});

app.use("/api", routes);

const server = app.listen(3000, () => {
    Logger.debug(`Server is up and running @ http://localhost:3000`);
});

export default server;