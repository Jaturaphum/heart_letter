$(document).ready(function() {

    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function() {
        toggleEnvelope();
    });
    btn_open.click(function() {
        toggleEnvelope();
    });
    btn_reset.click(function() {
        close();
    });

    function toggleEnvelope() {
        if (envelope.hasClass("open")) {
            close();
        } else {
            open();
        }
    }

    function open() {
        envelope.addClass("open")
            .removeClass("close");
    }

    function close() {
        envelope.addClass("close")
            .removeClass("open");
    }

});
