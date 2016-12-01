var config={
    "log":{"file":"./app.log"}
}
var sarina=require("./../sarina.js")



console.log("");
console.log("");
console.log("");
console.log("Welcome to Sarina Exmaple");
console.log("==========================");
console.log("");
console.log("\t","Version",sarina.info.version);
console.log("\t","Sarina",2016);
console.log("");
console.log("=================");
console.log("");

var app=
    sarina.create(config);

app.service("simpleService",[],function(){
    return "hello";
});

app.exec("simpleService.run",["simpleService"],function(simpleSrv){
   return {
        run:function(resolve,reject){
            console.log(simpleSrv);
            resolve(true);
        }
    }
});

app.start();