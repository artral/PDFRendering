/// <reference path="../jquery-2.2.1.js" />
/// <reference path="../jquery.validate.js" />
/// <reference path="underscore.js" />
(function (spa, $) {

    $(document).ready(function () {

        $('#SUB1').click(function () {
            //  var logoutUrl = '@Url.Action("Index", "PDFRenderingController")';
            //var newWindow = window.open('logoutUrl', "Hello", "height=200,width=800,status=yes,toolbar=yes,menubar=yes,location=yes");
            //window.location = logoutUrl;

            spa.PUBSUB.Subscribe('test', function (evt) { alert(evt); }, '1212');

        });
        $('#SUB2').click(function () {
            spa.PUBSUB.Publish('test', '1212');
        });

        
        
    });
   
       
   
}(window.spa = window.spa || {}, jQuery));
