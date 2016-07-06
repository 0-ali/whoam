var vendor = {
    sleep: function (sleepDuration) {
        var now = new Date().getTime();
        while (new Date().getTime() < now + sleepDuration) { return true; }
    },
    tts: function () {
        a = new Audio();
        a.src = "data:audio/wav;base64,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QJZMQU1FMy45OS41qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExC4AAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExIEAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";
        a.play();
    },
    readmore: function (e, b) {
        $('div [data-target="' + e + '"]').remove();
        if (b == 'h') {
            $(e).hide();
            $(e).children().animateCss('slideOutUp',
                $(e).after('<div class="read-js tabs" data-target="' + e + '"><show data-target="' + e + '" data-type="s" style="font-size: 28px;-webkit-animation: hue 60s infinite linear;" onclick="vendor.readjs(this);">More</a></div>')
            );
        } else if (b == 's') {
            $(e).show();
            $(e).children().addClass('read-js-effect');
            $(e).children().animateCss('slideInDown',
                $(e).after('<div class="read-js tabs" data-target="' + e + '"><show data-target="' + e + '" data-type="h" style="font-size: 28px;-webkit-animation: tags 60s infinite linear;" onclick="vendor.readjs(this);"> Less</show></div>')
            );
        }
    },
    readjs: function (c) {
        var a = $(c).attr('data-target'),
            b = $(c).attr('data-type');
        vendor.readmore(a, b);
    }
}
$.fn.tcb = function (a, b) {
    this.animate({ left: "170px", opacity: "0.5" }, "slow");
    if (typeof b == "undefined")
        b = "2.15em"
    $.when(this.animate({ fontSize: a }, "slow")).done(function () {
        this.animate({ fontSize: b }, "slow");
        this.removeAttr('style');
    });
};
$.fn.readjs = function () {
    _ = this.attr('read-id');
    a = ("read[read-id='" + _ + "']");
    this.hide();
    this.after('<div class="read-js tabs" data-target="' + a + '"><show data-target="' + a + '" data-type="s" style="font-size: 28px;-webkit-animation: hue 60s infinite linear;" onclick="vendor.readjs(this);">More</a></div>')
};
$(document).ready(function () {
    $("h2").hoverIntent(function () {
        $(this).animateCss('swing', $(this).tcb('40px'));
    });
readjs= $("[read-id]").toArray();
for (var i= 0; i < readjs.length; i++) {
   $(readjs[i]).readjs();
}
});
$.fn.extend({
    animateCss: function (animationName, callback) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).removeClass('animated ' + animationName);
            if (typeof callback == "function") {
                callback();
            }
        });
    },

});
