/**
 * Created by Administrator on 2015/6/14.
 * 获取 ‘http://www.22mm.cc/mm/suren/’页面中所有的图片的src、href、title
 */
var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");
var url = "http://www.22mm.cc/mm/suren/";

//request(url).pipe(fs.createWriteStream("mm.html"));
request(url,function(error,res,body){
    if(!error && res.statusCode==200){
        var $ = cheerio.load(body);
        var li = $("li");
        var arr = [];
        li.each(function(index,ele){
            var text = $(this).text();
            var src = $("img",this).attr("src");
            var href = $("a",this).attr("href");
            var obj = {
                text:text,
                src:src,
                href:"http://www.22mm.cc"+href
            };
            arr.push(obj);
        });
        console.log(arr);
    }
});