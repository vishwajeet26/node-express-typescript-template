import express, { Application, Request, Response } from "express";
const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

app.listen(5000, () => console.log("listening on port 5000...."));
