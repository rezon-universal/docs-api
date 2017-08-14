$(document).ready(function(){
    var bind = function(){
        $(".book-summary .logo").remove();
        $("<a />").attr("href", "http://rezonuniversal.com").addClass("logo").prependTo($(".book-summary"));
    }
    gitbook.events.bind("page.change", bind);
    bind();
});