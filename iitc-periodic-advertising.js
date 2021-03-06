// ==UserScript==
// @name       IRK 광고 메시지 스케줄러
// @namespace  https://github.com/iamytg/iitc-periodic-advertising
// @version    0.2
// @description  IRK 광고를 정기적으로 띄워줍니다.
// @include        https://www.ingress.com/intel*
// @include        http://www.ingress.com/intel*
// @match          https://www.ingress.com/intel*
// @match          http://www.ingress.com/intel*/
// @require    http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @copyright  2014+, iamytg
// ==/UserScript==

$(function() {
    var intervalMinutes = 5;
    var msg = "Something BIG coming soon - INGRESS RESISTANCE KOREA";
    var tabFaction = $("#chatcontrols").children().filter(function() {
        return $(this).text().toLowerCase() == "faction";
    });
    var chattext = $("#chattext");
    var post = function() {
        chat.chooseAnchor(tabFaction);
        chattext.val(msg);
        chat.postMsg();
    };
    
    var timer = setInterval(function () {
        if(chat && chat.postMsg) {
            clearInterval(timer);
            //console.log("메시지 첫 실행!");
            post();
        } else console.log("메시지 첫 실행을 위해 대기중");
    }, 1000);
    setInterval(post, intervalMinutes * 1000 * 60); // 최소한 IITC 화면접속 최초 구성시간 3초보다 커야함.
});
