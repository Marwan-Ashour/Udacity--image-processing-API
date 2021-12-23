// import file system promises
import fs  from "fs";
import path from "path";
import sharp from "sharp"
// checking image availability
const checkImage =  (
  imageName: string,
  width: number,
  height: number
) => {
  const resizedDir = path.join(__dirname, "../../images/thumbnails/");
  
  const file_path = path.join(resizedDir,`${imageName.toLowerCase()}(${width}x${height}).jpg`);

 
  return fs.existsSync(file_path);
   
};

export default checkImage;