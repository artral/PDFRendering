/// <reference path="../jquery-2.2.1.js" />
/// <reference path="../jquery.validate.js" />
/// <reference path="underscore.js" />

(function (spa, $,undefined) {

        var __handlers = {};
    

    function _format(str) {
        return 'test';
    }

    function _getEvtHandlers(evt) {
        var fevt = _format(evt);
        var result = __handlers[fevt];
        if (!result) {
            result = [];
            __handlers[fevt] = result;
        }
        return result;
    }

    function _setEvtHandlers(evt, handlers) {
        var fevt = _format(evt);
        __handlers[fevt] = handlers;
    }
    _submit = function () {
        alert('submiting data');
    };

    spa.LogEvent = function (logmessage) {
        console.log("Event-ConsoleLogging: " + logmessage);
    };


    $.extend(true, spa, {

        PUBSUB: {

            Publish: function (eventname,params) {


                //var match = _.find(Event.EventList, function (item) { if (item.handlername === handlername) return item; });
                var match = _getEvtHandlers(eventname);

                if (match) {

                    _.each(match, function (item) { item.callback('121212'); });
                }
                else {
                    _setEvtHandlers(handler);
                }
            },
            Subscribe: function (eventname,callback, handler) {

                var handlers = _getEvtHandlers(eventname);
                handlers.push({
                    callback: callback,
                    handle: handler
                });
                _setEvtHandlers(eventname, handlers);
            },
            UnSubscribe: function (handlername, handler) {
                var match = _getEvtHandlers(handler);
                if (match) {
                    match.callbackfnhandler.remove(match.eventhandler);
                }
            },
        }
    });
})(window.spa = window.spa || {}, jQuery);