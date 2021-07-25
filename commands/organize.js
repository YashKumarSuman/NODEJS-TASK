let fs=require("fs");
let path=require("path");
let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}
function organizefn(dirPath) 
{
    
    let destPath;
    if (dirPath == undefined) 
    {
        destPath = process.cwd();
        return;
    } 
    else 
    {
        let existornot = fs.existsSync(dirPath);
        if (existornot) {

            destPath = path.join(dirPath, "organized_files");
            if (fs.existsSync(destPath) == false) {
                fs.mkdirSync(destPath);
            }

        } 
        else {

            console.log("Kindly enter the correct path");
            return;
        }
    }
    organizeHelper(dirPath, destPath);
    
}
function organizeHelper(src, dest) {
    
    let items = fs.readdirSync(src);
    
    for (let i = 0; i < items.length; i++) {
        let itemaddress = path.join(src, items[i]);
        let isFile = fs.lstatSync(itemaddress).isFile();
        if (isFile) {
            let category = getCategory(items[i]);
            console.log(items[i], "belongs to --> ", category);
             sendFiles(itemaddress, dest, category);
        }
    }
}
function sendFiles(srcFilePath, dest, category) {
    // 
    let categoryPath = path.join(dest, category);
    if (fs.existsSync(categoryPath) == false) {
        fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath, fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    //fs.unlinkSync(srcFilePath);
    console.log(fileName, "copied to ", category);

}
function getCategory(name) {
    let ext = path.extname(name);
    ext = ext.slice(1);
    for (let type in types) {
        let cTypeArray = types[type];
        for (let i = 0; i < cTypeArray.length; i++) {
            if (ext == cTypeArray[i]) {
                return type;
            }
        }
    }
    return "others";
}
module.exports = {
    organizeuse: organizefn
}