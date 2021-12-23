import path from "path";
import { manipulateImage } from "../coordinator/processImage";

describe("test to check the cached image", () => {
  
  it("returns the reflected image path", async () => {
    const gottenPath = path.join(__dirname,`../../images/thumbnails/fjord(200x200).jpg`);
    
    console.log(gottenPath);
    expect((
        await manipulateImage("fjord", 200, 200))
        
    ).toBe(gottenPath);
  });
});