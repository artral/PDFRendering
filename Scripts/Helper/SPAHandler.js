(function (spa, $) {

    //http://stackoverflow.com/questions/881515/how-do-i-declare-a-namespace-in-javascript
    _submit = function () {
        alert('submiting data');
    };

    //Public Method
    spa.LogThistoConsole = function (logmessage) {
        console.log("ConsoleLogging: " + logmessage);
    };


    $.extend(true, spa, {
        Util: {
            //Misc utility functions
            //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            //Returns the app-domain specific prefix for a virtual path.
            GetUrl: function (str) {
                var urlPrefix = _getUrlPrefix();
                if (urlPrefix)
                    return str.replace('~/', urlPrefix);

                return null;
            },
            ALERT: function () { alert('WTF'); },

            //Generates a random, dom-unique ID for an element.
            GenerateRandomId: function (prefix) {
                prefix = prefix || 'generated';
                var generatedId = prefix + Math.floor(Math.random() * 99999);
                //Generate another one of this already exists.
                return ($('#' + generatedId).length > 0) ?
                    this.GenerateRandomId() :
                    generatedId;
            },

            //Saves the current focused element on the page.
        }
    });
})(window.spa = window.spa || {}, jQuery);