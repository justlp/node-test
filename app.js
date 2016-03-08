// todo: получить масив блоков с элементами
// todo: получить стили каждого блока


var fs = require('fs'),
    cheerio = require('cheerio'),
    css = require('css');

var _ = require('lodash');





//  http://iamdustan.com/reworkcss_ast_explorer/ пример работы css
//var obj = css.parse('body { font-size: 12px; }', {});
//console.log(obj.stylesheet.rules[0]);


fs.readFile('./index.html', 'utf8' ,function(err, data){
   if (err) {
       return console.log(err);
   }

    // пример работы cheerio
    //$ = cheerio.load(data);
    //var blockClass = $('ul').attr('class');
    //var blockChildren = $('ul').children();
    //var blockElement = blockChildren.map(function(i, el){
    //    if ($(this).attr().class.indexOf(blockClass) !== -1){
    //        return $(this)
    //    }
    //});
    //console.log(blockElement);




});

fs.readFile('./main.css', 'utf8',function(err, data) {
    if (err) {
        return console.log(err);
    }
    
    var obj = css.parse(data,{});
    //console.log(obj.stylesheet);


    var GOBJ = {};

    obj.stylesheet.rules.forEach(function (item) {
        if (item.type === 'rule') {
            for (var k = 0; k < item.selectors.length; k++) {
                GOBJ[item.selectors[k]] = [];
            }
        }
    });

    for (var key in GOBJ) {
        obj.stylesheet.rules.forEach(function (item) {
            if (item.type === 'rule') {
                var arr;
                for (var p=0; p<item.selectors.length; p++) {
                    if (key === item.selectors[p]) {
                        arr = GOBJ[key].concat(item.declarations);
                        GOBJ[key] = arr;
                    }
                }
            }
        })
    }
    
    console.log(GOBJ);
});
