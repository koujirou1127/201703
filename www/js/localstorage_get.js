// This is a JavaScript file

var app = angular.module('testApp', ['onsen']);
console.log("app.js001");
/**
 * controllerでアプリケーションの機能を設定する
 */
//app.controller('testAppController1', function(){
app.controller("testAppController1", function($scope){
    console.log("app.js002");
  //var obj = 'sasara';
  //localStorage.setItem('obj', JSON.stringify(obj));
    var str = JSON.parse(localStorage.getItem('setdata'));
    this.message = "Wiki Page";
console.log(str.mail + ":" + str.pass);
    this.hello = function(string) {
    //alert('Hello ' + string + ' ' + str.mail + ' ' + str.pass);
    console.log(str.mail + ":" + str.pass);
    //location.href = 'http://' + str.mail + ":"+ str.pass + '@lightcrew.co.jp/cp-bin/mediawiki/';
    //return('http://' + str.mail + ":"+ str.pass + '@lightcrew.co.jp/cp-bin/mediawiki/');
    window.open('http://' + str.mail + ':' + str.pass + '@lightcrew.co.jp/cp-bin/mediawiki/index.php?title=%E7%AC%AC%E4%BA%8C%E6%8A%80%E8%A1%93%E9%83%A8','_blank','location=no' );
    };
    this.hello1 = function(string) {
    //alert('Hello ' + string + ' ' + str.mail + ' ' + str.pass);
    console.log(str.mail + ":" + str.pass);
    //location.href = 'http://' + str.mail + ":"+ str.pass + '@lightcrew.co.jp/cp-bin/mediawiki/';
    //return('http://' + str.mail + ":"+ str.pass + '@lightcrew.co.jp/cp-bin/mediawiki/');
    window.open('http://' + str.mail + ':' + str.pass + '@lightcrew.co.jp/cp-bin/mediawiki/index.php?title=%E7%AC%AC%E4%BA%8C%E6%8A%80%E8%A1%93%E9%83%A8&action=edit','_blank','location=no' );
    };
  
});

