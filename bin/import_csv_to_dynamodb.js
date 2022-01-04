/**
 * Description: Script for converting data in text file into json file for request import data to dynamoDB
 * Command 1: node scriptname.js
 * Command 2: aws dynamodb batch-write-item --request-items file://ProductCatalog.json 
 */
const { readdir } = require("fs");
const { join, resolve } = require("path");
const { exec } = require("child_process");
const filesInfo = require("./aws_db_config");


try{

  readdir(resolve("data", "aws"), (err, files) => {
    if(err){
      console.error(`ERROR reading directory [${resolve("data", "aws")}]\n${err}`);
      return;
    } 

    //console.log(`\nreaddir files\n${files}`);
    //console.log(typeof files);
    

    files.map(file => {
      console.log(`\nFile\n${file}`);
      console.log(`\nFilesInfo\n${filesInfo}`);
      const fileInfo = filesInfo.find(data => file.includes(`${data.type}_`));
      console.log("fileInfo", fileInfo);
      
      const filename = join(resolve("data","aws"), file);
      exec(
        `aws dynamodb batch-write-item --request-items file://${ filename }`, 
        (err, stdout, stderr) => {
          if(err){
            console.warn(`\nERROR Exporting local data to dynamoDB\n${err}`);
            return;
          } 
  
          if(stderr){
            console.warn(`\nWarning\n${ stderr }`);
            return;
          } 
          
          stdout && console.log(`\nSuccess data added to ${ fileInfo.dbTabName }\n${ stdout }`);
        }
      );
    });


  })

  

  
}catch(e){
  console.warn("error", e);
}

