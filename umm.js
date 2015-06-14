/**
 * Created by Administrator on 2015/6/14.
 * 获取http://www.umei.cc/网站首页的图片的src
 */
var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");
var url = "http://www.umei.cc/";

request(url,function(error,res,body){
    if(!error && res.statusCode==200){
        var $ = cheerio.load(body);
        var li = $("div[class=t]");
        var arr = [];
        li.each(function(index,ele){
            var a = $(this).children()[1];
            var title = $(a).attr("title");
            var href = $(a).attr("href");
            var src = $("img",a).attr("src");
            var obj = {
                title:title,
                href:"http://www.umei.cc"+href,
                src:src
            };
            arr.push(obj);
        });
        console.log(arr);
    }
});