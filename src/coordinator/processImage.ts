

import path from "path";
import sharp from "sharp";

const manipulateImage = async (
  imageName: string,
  width: number,
  height: number
): Promise<string> => {
  const file_path = path.join(__dirname,`../../images/${imageName.toLowerCase()}.jpg`);

  const output_file_path = path.join(__dirname,`../../images/thumbnails/${imageName.toLowerCase()}(${width}x${height}).jpg`
  );
  
  try {
    await sharp(file_path)
      .resize({ width, height })
      .toFile(output_file_path);
    
  } catch {
    
    throw new Error("Sorry, cannot manipulate!");
  }
  return output_file_path;
};

export { manipulateImage };