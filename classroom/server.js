// const express = require("express");
// const app = express();
// const users = require("./routes/user.js");
// const posts = require("./routes/post.js");
// const session = require("express-session");
// const flash = require("connect-flash");

// const sessionOption = {
//   secret: "mysupersecretstring",
//   resave: false,
//   saveUninitialized: true,
// };

// app.use(session(sessionOption));
// app.use(flash());

// app.get("/register", (req, res) => {
//   let { name = "anonymous" } = req.query;
//   req.session.name = name;
//   res.redirect("/greet");
// });

// app.get("/greet", (req, res) => {
//   res.send(`namste ${req.session.name}`);
// });

// // app.get("/test", (req, res) => {
// //   res.send("test succesful :)");
// // });

// app.listen(3000, () => {
//   console.log("server is listening to 3000");
// });


const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");
const flash = require("connect-flash");

const sessionOption = {
  secret: "mysupersecretstring",
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionOption));
app.use(flash());

// ✅ Add a home route
app.get("/", (req, res) => {
  res.send("Welcome to Patidar Hotel!");
});

app.get("/register", (req, res) => {
  let { name = "anonymous" } = req.query;
  req.session.name = name;
  res.redirect("/greet");
});

app.get("/greet", (req, res) => {
  res.send(`Namaste ${req.session.name}`);
});

// app.get("/test", (req, res) => {
//   res.send("test successful :)");
// });

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
