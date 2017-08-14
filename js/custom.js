$(document).ready(function(){
    $("<a />").attr("href", "http://rezonuniversal.com").addClass("logo").prependTo($(".book-summary"));
    gitbook.events.bind("page.change", function() {
        console.log('page change');
    });
});