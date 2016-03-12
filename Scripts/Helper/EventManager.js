/// <reference path="../jquery-2.2.1.js" />
/// <reference path="../jquery.validate.js" />

(function (spa, $) {


    _submit = function () {
        alert('submiting data');
    };

    spa.LogEvent = function (logmessage) {
        console.log("Event-ConsoleLogging: " + logmessage);
    };


    $.extend(true, spa, {

        Event: {
            
            Publish: function (handlername,handler) {
                spa.EventList = spa.EventList || {};
                var _callback = $.Callbacks();
                _callback.add(handler);
                
                return null;
            },
            Subscribe: function () { },
            UnSubsCribe: function () { },




        }
    });
}(window.spa = window.spa || {}, jQuery));