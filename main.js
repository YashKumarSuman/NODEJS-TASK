let inputArr = process.argv.slice(2);
let fs = require("fs");
let path = require("path");
let helpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let organizeObj = require("./commands/organize");


let input = inputArr[0];
let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}
     if(input =="tree")
    {
        treeObj.treeuse(inputArr[1]);
    }      
    else if(input =="organize")
    {
        organizeObj.organizeuse(inputArr[1]);
    }
    else if(input =="help")
    {
        helpObj.helpuse();
    }
    else
        console.log("Please 🙏 Wrong input");
        
