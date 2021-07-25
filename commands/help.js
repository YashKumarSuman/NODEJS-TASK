function helpfn() 
{
    console.log(`
    List of All the commands:
                1. node main.js tree "directoryPath"
                2. node main.js organize "directoryPath"
                3. node main.js help
                `);
}
module.exports={
    helpuse: helpfn
}