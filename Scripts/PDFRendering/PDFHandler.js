(function (spa,$) {

    $(document).ready(function () {

        $("#newpdf").click(function () {
            var newWindow = window.open("DownLoadPDF", "Hello", "height=200,width=800,status=yes,toolbar=yes,menubar=yes,location=yes");
           
        });
    });

       
   
}(window.spa = window.spa || {}, jQuery));
