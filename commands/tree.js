let fs=require("fs")
let path=require("path")
function treefn(dirPath) 
{

    if (dirPath == undefined) 
    {

        treecreator(process.cwd(), "");
        return;
    } 
    else 
    {
        let doesExist = fs.existsSync(dirPath);
        if (doesExist) {
            treecreator(dirPath, "");
        } else {

            console.log("Kindly enter the correct path");
            return;
        }
    }
}

function treecreator(dirPath, indent) 
{
    
    let isFile = fs.lstatSync(dirPath).isFile();
    if (isFile == true) {
        let fileName = path.basename(dirPath);
        console.log(indent + "├──" + fileName);
    } else {
        let dirName = path.basename(dirPath)
        console.log(indent + "└──" + dirName);
        let childrens = fs.readdirSync(dirPath);
        for (let i = 0; i < childrens.length; i++) {
            let childPath = path.join(dirPath, childrens[i]);
            treecreator(childPath, indent + "\t");
        }
    }


}
module.exports = {
    treeuse: treefn
}