/// <reference path="../jquery-2.2.1.js" />
/// <reference path="../jquery.validate.js" />
(function (spa, $) {

    
    $("#TestH").submit(function (event) {

        aspa.LogThistoConsole("Nice");
        aspa.Util.ALERT();
    });


})(window.spa = window.spa || {}, jQuery);