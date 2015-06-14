/**
 * Created by Administrator on 2015/6/14.
 * 获取http://www.umei.cc/网站美女大图的src
 */
var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");
var url = "http://www.umei.cc/p/gaoqing/xiuren_VIP/20140811144151.htm";

request(url,function(error,res,body){
    if(!error && res.statusCode==200){
        var $ = cheerio.load(body);
        var img = $(".IMG_show").attr("src");
        console.log(img);
    }
});