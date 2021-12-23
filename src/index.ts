
// import express and creating the global app
  import express from "express";
  // import routes
  import routes from "./routes/index";
  const app = express();
  const port = 7000;

// creat endpoint 
app.use("/api", routes);

 // creat server, listen to port & output a message to the console
 app.listen(port, ()=> {
  console.log(`server started at http://localhost:${port}`)
 });

 export default app;