const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const encPath = path.join(__dirname, "../../public/models/character.enc");
const glbPath = path.join(__dirname, "../../public/models/character.glb");

const decryptWithPassword = (password) => {
  try {
    const encryptedData = fs.readFileSync(encPath);
    const iv = encryptedData.subarray(0, 16);
    const data = encryptedData.subarray(16);
    
    const key = crypto.createHash("sha256").update(password).digest();
    const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
    
    const decrypted = Buffer.concat([decipher.update(data), decipher.final()]);
    fs.writeFileSync(glbPath, decrypted);
    console.log(`Success! Decrypted using password: "${password}"`);
    return true;
  } catch (err) {
    console.error(`Failed using password: "${password}"`, err.message);
    return false;
  }
};

if (!decryptWithPassword("MyCharacter12")) {
  decryptWithPassword("Character3D#@");
}
