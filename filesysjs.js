const fs = require('fs');

let filename = prompt('What is the name of the file?\n');
let filetype = prompt('What is the type of the file?\n');
let filecode = prompt('What do you need to write in the file?\n');

if(filetype === "python"){
  filetype = "py"
  fs.writeFile(`${filename}.${filetype}`, `${filecode}`, (err)=>{
    if(err){
      console.log(`An error:\n${err}!`);
    }else{
      console.log(`Successfully created file: ${filename}.${filetype}!`);
    }
  });
}else if(filetype === "py"){
  fs.writeFile(`${filename}.${filetype}`, `${filecode}`, (err)=>{
    if(err){
      console.log(`An error:\n${err}!`);
    }else{
      console.log(`Successfully created file: ${filename}.${filetype}!`);
    }
  });
}else if(filetype === "javascript"){
  filetype = "js"
  fs.writeFile(`${filename}.${filetype}`, `${filecode}`, (err)=>{
    if(err){
      console.log(`An error:\n${err}!`);
    }else{
      console.log(`Successfully created file: ${filename}.${filetype}!`);
    }
  });
}else if(filetype === "js"){
  fs.writeFile(`${filename}.${filetype}`, `${filecode}`, (err)=>{
    if(err){
      console.log(`An error:\n${err}!`);
    }else{
      console.log(`Successfully created file: ${filename}.${filetype}!`);
    }
  });
}else{
  fs.writeFile(`${filename}.${filetype}`, `${filecode}`, (err)=>{
  if(err){
    console.log(`An error:\n${err}!`);
  }else{
    console.log(`Successfully created file: ${filename}.${filetype}!`);
  }
});
}
