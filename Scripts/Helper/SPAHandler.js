/// <reference path="../jquery-2.2.1.js" />
/// <reference path="../jquery.validate.js" />
(function (spa, $) {

    /*http://stackoverflow.com/questions/881515/how-do-i-declare-a-namespace-in-javascript*/
    _submit = function () {
        alert('submiting data');
    };

    spa.LogThistoConsole = function (logmessage) {
        console.log("ConsoleLogging: " + logmessage);
    };


    $.extend(true, spa, {
        Util: {
            GetUrl: function (str) {
                var urlPrefix = _getUrlPrefix();
                if (urlPrefix)
                    return str.replace('~/', urlPrefix);

                return null;
            },
            ALERT: function () { alert('WTF'); },

            
            GenerateRandomId: function (prefix) {
                prefix = prefix || 'generated';
                var generatedId = prefix + Math.floor(Math.random() * 99999);
                
                return ($('#' + generatedId).length > 0) ?
                    this.GenerateRandomId() :
                    generatedId;
            },

            
        }
    });
}(window.spa = window.spa || {}, jQuery));