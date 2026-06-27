const fs = require("fs");
const https = require("https");
const path = require("path");

const icons = {
  c: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.png",
  cplusplus: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.png",
  r: "https://raw.githubusercontent.com/devicons/devicon/master/icons/r/r-original.png",
  github: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.png",
  vercel: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.png"
};

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on("finish", () => {
        file.close(resolve);
      });
    }).on("error", (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

const main = async () => {
  const imagesDir = path.join(__dirname, "../../public/images");
  for (const [name, url] of Object.entries(icons)) {
    const dest = path.join(imagesDir, `${name}.png`);
    try {
      await download(url, dest);
      console.log(`Downloaded ${name}.png successfully.`);
    } catch (err) {
      console.error(`Failed to download ${name}.png:`, err.message);
    }
  }
};

main();
