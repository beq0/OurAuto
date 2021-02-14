const fs = require('fs');

module.exports.getImageInfoToSave = (baseImage, username) => {
    const uploadPath = "";
    const localPath = `${uploadPath}/car-images/${username}/`;

    const ext = baseImage.substring(baseImage.indexOf("/") + 1, baseImage.indexOf(";base64"));
    const fileType = baseImage.substring("data:".length,baseImage.indexOf("/"));
    const regex = new RegExp(`^data:${fileType}\/${ext};base64,`, 'gi');
    const base64Data = baseImage.replace(regex, "");

    const rand = Math.ceil(Math.random()*1000);
    const filename = `Car_Image_${Date.now()}_${rand}.${ext}`;

    const fullPath = localPath + filename;
    return {base64Data, fullPath};
}

module.exports.saveImage = (imageBase64Data, fullPath) => {
    const pathParts = fullPath.split('/');
    let currPath = '/';
    for (let i = 0; i < pathParts.length - 1; i++) {
        if (pathParts[i].length === 0) continue;
        currPath += `${pathParts[i]}/`
        if (!fs.existsSync(currPath)) {
            fs.mkdirSync(currPath);
        }
    }
    fs.writeFileSync(fullPath, imageBase64Data, 'base64');
}

module.exports.removeFile = (filePath) => {
    fs.unlinkSync(filePath);
}