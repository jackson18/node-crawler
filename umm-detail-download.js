/**
 * Created by Administrator on 2015/6/14.
 * ����http://www.umei.cc/��վ��Ů��ͼ������
 * ��http://www.22mm.cc/��ͬ����http://www.umei.cc/��������ͼƬ���ݵ�ʱ�����
 * http header�е� Referer,����Ҫ���⴦��������ֱ���������������ͼƬ��url
 */
var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");

var options = {
    url:"http://ix.umei.cc//img2012/XR_VIP04/XR20140809N00201/0059.jpg",
    headers:{
        "Referer":'http://www.umei.cc/'  // �������Referer������ᱻ�ܾ�����
    }
};

request(options).pipe(fs.createWriteStream("myImg.jpg"));

