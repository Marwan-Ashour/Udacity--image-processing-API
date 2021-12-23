
// import express from express to have access to the express router
import express from "express";
import imageConverter from "./imageConverter";

// create router object
const routes = express.Router();

routes.get("/imageConverter", imageConverter);

   // export the route here and import it into the main file
   export default routes;
