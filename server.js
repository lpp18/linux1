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
