import express from "express";
import checkImage from "../coordinator/checkImage";
import {manipulateImage}  from "../coordinator/processImage";
import path from "path";
const route = express.Router();

const  imageConverter=async (req: express.Request, res: express.Response) => {
  const image = req.query.image as string;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  const resizedDir = path.join(__dirname, "../../images/thumbnails/");
  console.log(resizedDir)
  const file_path = path.join(resizedDir,`${image.toLowerCase()}(${width}x${height}).jpg`);

  if (!(req.query.image && req.query.width && req.query.height)) {
    res.statusCode = 400;
    return res.send("400: Invalid request");
  }
  if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
    res.statusCode = 400;
    return res.send("Invalid dimensions.");
  }
  const reflectedImage = await checkImage(image, width , height);

  if (reflectedImage) {
    res.sendFile(file_path);
  } else {
    try {
      const image_path = await manipulateImage(image, width, height);
      res.sendFile(image_path);
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