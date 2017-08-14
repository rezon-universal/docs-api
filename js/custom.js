$(document).ready(function(){
    gitbook.events.bind("page.change", function() {
        $(".book-summary .logo").remove();
        $("<a />").attr("href", "http://rezonuniversal.com").addClass("logo").prependTo($(".book-summary"));
    });
});