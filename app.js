// todo: получить масив блоков с элементами
// todo: получить стили каждого блока


var fs = require('fs'),
    cheerio = require('cheerio'),
    css = require('css');

var htmlparser = require("htmlparser2");

var _ = require('lodash');





//  http://iamdustan.com/reworkcss_ast_explorer/ пример работы css
//var obj = css.parse('body { font-size: 12px; }', {});
//console.log(obj.stylesheet.rules[0]);


fs.readFile('./index.html', 'utf8' ,function(err, data){
   if (err) {
       return console.log(err);
   }


    // todo: находим блок>элемент  -> заноси разметку в переменную -> записываем в новый файл -> идем в сss >
    // todo; ищем свойства -> записываем в новый css


    // пример работы cheerio
    $ = cheerio.load(data);
    var pageSource = $.parseHTML(data);

    //pageSource.forEach(function(item){
    //   if (item.name === 'html'){
    //       var htmlChildrens = item.children;
    //
    //       htmlChildrens.forEach(function(item){
    //           if (item.name === 'body'){
    //
    //               item.children.forEach(function(item){
    //                  if (item.type === 'tag'){
    //                      var tagClass = item.attribs.class;
    //
    //
    //                      item.children.forEach(function(item){
    //                          if (item.type === 'tag') {
    //                              if (item.attribs.class.indexOf(tagClass + '_') != -1){
    //                                  console.log(item);
    //                              }
    //                          }
    //                      });
    //                  }
    //               });
    //           }
    //       })
    //   }
    //});



});




//fs.readFile('./main.css', 'utf8',function(err, data) {
//    if (err) {
//        return console.log(err);
//    }
//
//    var obj = css.parse(data,{});
//
//    var GOBJ = {};
//
//    obj.stylesheet.rules.forEach(function (item) {
//        if (item.type === 'rule') {
//            for (var k = 0; k < item.selectors.length; k++) {
//                GOBJ[item.selectors[k]] = [];
//            }
//        }
//    });
//
//    for (var key in GOBJ) {
//        obj.stylesheet.rules.forEach(function (item) {
//            if (item.type === 'rule') {
//                var arr;
//                for (var p=0; p<item.selectors.length; p++) {
//                    if (key === item.selectors[p]) {
//                        arr = GOBJ[key].concat(item.declarations);
//                        GOBJ[key] = arr;
//                    }
//                }
//            }
//        })
//    }
//
//    //console.log(GOBJ);
//});




