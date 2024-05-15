import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

// const express = require("express")
// const cors = require("cors")
// const bodyParser = require("body-parser")

// const {Configuration, OpenAiApi} = require("openai")

// const config = new Configuration({
//   apiKey: "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",
// })

// const openai = new OpenAiApi(config)

// const app = express();
// app.use(bodyParser.json())
// app.use(cors());

// app.post("/chat", async(req, res) => {
//   const {prompt} = "this is depression detection website, user will give their tweets of recent times and you to recommend them specifically based on their tweets. dont make it look like ai content and use simple and easy to understand english" + req.body;

//   const completion = await openai.creatCompletion({
//     model: "text-davinci-003",
//     max_tokens: 512,
//     temprature: 0,
//     prompt: prompt,
//   });

//   res.send(completion.data.choices[0].text);
// })

// const port = 8000;

// app.listen(port, () => {
//   console.log(`Server listing on port ${port}`);
// });


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <GoogleOAuthProvider clientId="956441359367-98mlfu0baq6nhhf2sg6rubfeb1fvk596.apps.googleusercontent.com">
    <App />
    <Toaster/>
  </GoogleOAuthProvider>
  </BrowserRouter>
    

);
