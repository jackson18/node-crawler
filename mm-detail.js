/**
 * Created by Administrator on 2015/6/14.
 * ��ͼ�Ļ�ȡ����ȡ��ͼƬsrc�У�����վ���⽫'pic'������'big'�������Ҫ�Լ�����һ�¡�
 */
var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");
var url = "http://www.22mm.cc/mm/suren/PiaCPJdHHHHaHPCda-2.html";

request(url,function(error,res,body){
    if(!error && res.statusCode==200){
        var $ = cheerio.load(body);
        var div = $('#box-inner');
        var script = div.children()[2];
        var src = $(script).text();
        console.log(src);

        var a = src.lastIndexOf('=');
        var b = src.lastIndexOf('\"');
        var s = src.substring(a+2, b);
        var s = s.replace('big', 'pic');
        console.log("s:", s);
    }
});