(function (spa,$) {

    $(document).ready(function () {

        $("#newpdf").click(function () {

            var newWindow = window.open("", null, "height=200,width=400,status=yes,toolbar=no,menubar=no,location=no");
            newWindow.document.write("<select>");
            newWindow.document.write("<option>");
            newWindow.document.write(obj);
            newWindow.document.write("</option>");
            newWindow.document.write("</select>");
            alert('heyyy');
        });
    });

       
   
})(window.spa = window.spa || {}, jQuery);
