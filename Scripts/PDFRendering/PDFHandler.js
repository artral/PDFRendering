/// <reference path="../jquery-2.2.1.js" />
/// <reference path="../jquery.validate.js" />
(function (spa, $) {

    $(document).ready(function () {

        $("#newpdf").click(function () {
            var logoutUrl = '@Url.Action("Index", "PDFRenderingController")';
            var newWindow = window.open('logoutUrl', "Hello", "height=200,width=800,status=yes,toolbar=yes,menubar=yes,location=yes");
            window.location = logoutUrl;
           
        });
    });

       
   
}(window.spa = window.spa || {}, jQuery));
