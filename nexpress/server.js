import cors from "cors";
import path from "path";
import fs, { appendFileSync } from "fs";
import { isAsyncFunction } from "util/types";
import { assert } from "console";
import minimal from "./src/minimal";

const app = minimal();

app.use(cors());

app.get("/about", (req, res) => {
  res.send("I am the about page via GET");
});

app.get("/", (req, res) => {
  fs.readFile(path.resolve(__dirname, "..", "public", "index.html"),
    (err, data) => {
      if (err) {
        console.log("Get / Errored!");
        console.log(err);
        return res.status(500).send("Error Occured");
      }
      return res.status(200).send(data);
    });
});

const server = app.listen(9000, () => {
  console.log("Server is running");
});

export function addNumbersTestExample(a, b) {
  return a + b;
}