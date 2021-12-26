// import fileSystem promisess
import fs  from "fs";
import { promises as fspromises } from "fs";
import path from "path";
import sharp from "sharp"
// checking image availability
const checkImage = async (
  imageName: string,
  width: number,
  height: number
  ) : Promise<string> => {
  const resizedDir = path.join(__dirname, "../../images/thumbnails/");
  
  const file_path = path.join(resizedDir,`${imageName.toLowerCase()}(${width}x${height}).jpg`);

 
  // return fs.existsSync(file_path);

  
  try {
    await fspromises.readFile(file_path, { flag: "r" });
    return file_path;
  } catch {
    return "";
  }

   
};

export default checkImage;

