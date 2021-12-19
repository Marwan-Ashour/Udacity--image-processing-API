// const myFunc = (num: number): number => {
//     return num * num;
//   };
  
//   export default myFunc;

//============================================

// import express and creating the global app
  import express from 'express';
  const app = express();
  const port = 7000;

// creat endpoint 
app.get('/', (req, res) => {
  res.send('Hello, world!');
 });

 // creat server, listen to port & output a message to the console
 app.listen(port, ()=> {
  console.log(`server started at http://localhost:${port}`)
 });
