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
});
