import cors from "cors";
import path from "path";
import fs, { appendFileSync } from "fs";
import { isAsyncFunction } from "util/types";
import { assert } from "console";
import minimal from "./src/minimal";

const app = minimal();

app.use(cors());

app.get("/get", (req, res) => {
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

 //My code added
app.put("/put", (req, res) => {
  res.send("I am the about page via PUT");
});

app.put("/", (req, res) => {
  fs.readFile(path.resolve(__dirname, "..", "public", "putindex.html"),
    (err, data) => {
      if (err) {
        console.log("Put / Errored!");
        console.log(err);
        return res.status(500).send("Error Occured");
      }
      return res.status(200).send(data);
    });
});

app.post("/post", (req, res) => {
  res.send("I am the post page via POST");
});

app.post("/", (req, res) => {
  fs.readFile(path.resolve(__dirname, "..", "public", "postindex.html"),
    (err, data) => {
      if (err) {
        console.log("Post / Errored!");
        console.log(err);
        return res.status(500).send("Error Occured");
      }
      return res.status(200).send(data);
    });
});

app.delet("/delet", (req, res) => {
  res.send("I am the about page via delete");
});

app.delet("/", (req, res) => {
  fs.readFile(path.resolve(__dirname, "..", "public", "deleteindex.html"),
    (err, data) => {
      if (err) {
        console.log("delete / Errored!");
        console.log(err);
        return res.status(500).send("Error Occured");
      }
      return res.status(200).send(data);
    });
});


app.patch("/patch", (req, res) => {
  res.send("I am the about page via PATCH");
});

app.patch("/", (req, res) => {
  fs.readFile(path.resolve(__dirname, "..", "public", "patchindex.html"),
    (err, data) => {
      if (err) {
        console.log("Patch / Errored!");
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

export function get1(a,b,c)
{
  return a+b+c;
}
