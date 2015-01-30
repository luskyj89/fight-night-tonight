var panel2 = $('.panel-2');


function init() {

    setInterval(function() {
        window.location.reload();
    }, 300000);

    panel2.delay(9100).animate({
        left: 0,
    }, 2000, 'easeOutElastic', sendContent2);

    function sendContent2() {
        // panel2.delay(8000).animate({
        //     transform: 'rotateX(90deg)'
        // }, 2000, 'easeInOutQuint');
    }

}

$(document).ready(function(){
    init()
});
