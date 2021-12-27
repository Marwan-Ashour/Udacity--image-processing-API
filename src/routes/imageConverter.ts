import express from "express";
import checkImage from "../coordinator/checkImage";
import {manipulateImage}  from "../coordinator/processImage";
import path from "path";
import  fs from "fs";
const route = express.Router();

const  imageConverter=async (req: express.Request, res: express.Response) => {
  const image = req.query.image as string;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  const resizedDir = path.join(__dirname, "../../images/thumbnails/");
  const orignalPath = path.join(__dirname, `../../images/${image.toLowerCase()}.jpg`);
  const file_path = path.join(resizedDir,`${image.toLowerCase()}(${width}x${height}).jpg`);

 // check if any of the params is missing
 if (!(req.query.image)) {
  res.statusCode = 400;
  return res.send("400: image name can not be empty, please enter an existing image name");
}
  if (!(req.query.width && req.query.height)) {
    res.statusCode = 400;
    return res.send("400: Invalid request, please enter the missing params value");
  }

    const reflectedImage = await checkImage(image, width , height);
   
  if (reflectedImage) {
    res.sendFile(file_path);
  } else {
    try {
      // check if width or height value is missing or equals Zero
  if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
    res.statusCode = 400;
    return res.send("Invalid dimensions, please enter positive value for width & height");
  }
  
      const image_title = req.query.image as string;
      if (fs.existsSync(orignalPath)){ 

      
      const image_path =await manipulateImage (image_title, width, height);
      res.sendFile(image_path);}
      else{res.status (400).send ("image does not exist, please enter a corrent image name")}
    } catch (e) {
      const error = e as Error;
      if (error.message == "Image not available") {
        res.statusCode = 404;
        res.send("404: Image not available. Please enter a correct image name.");
      }

          
    }
  }
};

  
export default imageConverter
