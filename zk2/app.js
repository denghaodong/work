const child_process=require('child_process');
const fs=require('fs');
const path=require('path');
let filePath=path.join(__dirname,process.argv[2]);
let childProcess=createProcess();
function createProcess() {
    if(fs.existsSync(filePath)){
        let child=child_process.spawn('node',[filePath]);
        child.stdout.on('data',(data)=>{
            console.log(data)
        })
        child.stderr.on('data',(error)=>{
            console.log(error)
        })
    }else{
        console.log('当前文件不存在')
    }
}
let watcher=fs.watch(filePath);
watcher.om('change',()=>{
    childProcess.kill();
    childProcess=createProcess()
})