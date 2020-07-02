/**
 * Created by Administrator on 2020/2/6.
 */
let http = require('http');
let server = http.createServer(function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('hello blog')
})
/**
* hhahhahahhahahah
*/
server.listen(3000, ()=>{
    console.log('server is listening at point 3000')
})
// master分支第一次改动
// master分支第二次改动

//这是feature/dev1

//master回退之后的改动

//别人的改动

// master分支的修改
 //master分支的第二次修改


 // dev1的修改
// master分支的第三次修改

