import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "../src/App";
import dotenv from "dotenv";

import routes from "./routes/routes";

process.on("uncaughtException", (err) => {
    console.log(err);
});
process.on("unhandledRejection", (err) => {
    console.log(err);
});

const app = express();
dotenv.config();

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
                const ctx = {};
                return res.send(
                    data.replace(
                        '<div id="root"></div>',
                        `<div id="root">
                    ${ReactDOMServer.renderToString(
                        <StaticRouter location={req.url} context={ctx}>
                            <App />
                        </StaticRouter>
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
