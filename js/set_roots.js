(function(){
  var calc = function(){
    var docElement = document.documentElement;
    console.log(document.documentElement)
    var clientWidthValue = docElement.clientWidth>750 ? 750 : docElement.clientWidth;
     console.log(docElement.clientWidth)
    docElement.style.fontSize = 20*(clientWidthValue/375)+'px';
    console.log(docElement.style.fontSize)
  }
  calc();
   window.addEventListener('resize',calc);

})();


// var deviceWidth
// setHtmlFontSize()

// if (window.addEventListener) {
//   window.addEventListener('resize', function () {
//       setHtmlFontSize()
//   }, false)
// }
// function setHtmlFontSize () {
//   // 1366是设计稿的宽度，当大于1366时采用1366宽度，比例也是除以13.66
//     deviceWidth = document.documentElement.clientWidth > 1920 ? 1366 : document.documentElement.clientWidth
//     document.getElementsByTagName('html')[0].style.cssText = 'font-size:' + deviceWidth / 13.66 + 'px !important'
//     if(document.documentElement.clientWidth<=768){
//       document.getElementsByTagName('html')[0].style.cssText = 'font-size:26.67vw';
//     }
    