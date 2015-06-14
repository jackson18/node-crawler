/**
 * Created by Administrator on 2015/6/14.
 * 下载http://www.umei.cc/网站美女大图到本地
 * 和http://www.22mm.cc/不同的是http://www.umei.cc/网在请求图片数据的时候会检查
 * http header中的 Referer,所以要特殊处理。而不能直接在浏览器中输入图片的url
 */
var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");

var options = {
    url:"http://ix.umei.cc//img2012/XR_VIP04/XR20140809N00201/0059.jpg",
    headers:{
        "Referer":'http://www.umei.cc/'  // 必须添加Referer，否则会被拒绝下载
    }
};

request(options).pipe(fs.createWriteStream("myImg.jpg"));

