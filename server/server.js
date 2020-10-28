import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "../src/App";
import dotenv from "dotenv";
import { ServerStyleSheets } from "@material-ui/core/styles";

import routes from "./routes/routes";

process.on("uncaughtException", (err) => {
    console.log(err);
});
process.on("unhandledRejection", (err) => {
    console.log(err);
});

const app = express();
dotenv.config();

app.get("*.client.js", function (req, res, next) {
    req.url = req.url + ".gz";
    res.set("Content-Encoding", "gzip");
    next();
});

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
                const sheets = new ServerStyleSheets();
                const html = ReactDOMServer.renderToString(
                    sheets.collect(
                        <StaticRouter location={req.originalUrl} context={ctx}>
                            <App />
                        </StaticRouter>
                    )
                );
                const css = sheets.toString();
                data = data.replace(
                    '<style id="jss-server-side"></style>',
                    `<style id="jss-server-side">${css}</style>`
                );
                return res.send(
                    data.replace(
                        '<div id="root"></div>',
                        `<div id="root">
                    ${html}
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
