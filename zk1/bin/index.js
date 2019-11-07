#! /usr/bin/env node
const fs = require('fs');
const path = require('path');
let param = process.argv[2].slice(1);
const url = path.join(process.cwd(),param);
if(fs.existsSync(url)){
    if(fs.statSync(url).isDirectory()){
        let dirList = fs.readdirSync(url); //['css','index.js','index.html']
        let targetList = dirList.map(item => {
            let extname = path.extname(item);
            let size = fs.statSync(path.join(param,item)).size;
            return `${item}-${extname && extname.slice(1)}-${size ? size : ''}`
        })
        console.log(targetList)
    }else{
        console.log(param)
    }
}else{
    console.log("此目录不存在")
}