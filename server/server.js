import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { ServerLocation } from "@reach/router";
import App from "../src/App";
import dotenv from "dotenv";

import routes from "./routes/routes";
import db from "./config/db";

process.on("uncaughtException", (err) => {
    console.log(err);
    process.exit(1);
});
process.on("unhandledRejection", (err) => {
    console.log(err);
    process.exit(2);
});

const app = express();
dotenv.config();
db();
app.use("/api", routes);
app.use(express.static(path.resolve(__dirname, "..", "build")));

if (!process.env.server) {
    app.use("/*", (req, res) => {
        fs.readFile(
            path.resolve("./build/public/index.html"),
            "utf-8",
            (err, data) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send("ERROR on thee server");
                }
                return res.send(
                    data.replace(
                        '<div id="root"></div>',
                        `<div id="root">
                    ${ReactDOMServer.renderToString(
                        <ServerLocation url={req.url}>
                            <App />
                        </ServerLocation>
                    )}
                    </div>`
                    )
                );
            }
        );
    });
} else {
    app.get("/", (req, res) => {
        res.send("SERVER MODE");
    });
}

const PORT = process.env.SERVER_PORT || process.env.PORT || 3000;
app.listen(PORT, () => {
    if (process.env.server) console.log("ONLY API SERVER");
    console.log(`App launched on http://localhost:${PORT}`);
});
