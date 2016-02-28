using PDFRendering.ExtensionsHelper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PDFRendering.Controllers
{
    public class PDFRenderingController : Controller
    {
        // GET: PDFRenderiing
        public ActionResult Index()
        {
            var path = @"C:\Temp\Mobile.pdf";// Server.MapPath(@"C:\Temp\Mobile.pdf");
            var pdfBuffer = ExtensionsHelper.ExtensionsHelper.GetPDFMemerySteram(path);
            //return View("PDFResult");
           // return File(pdfBuffer, "application/pdf");
            return new PDFContentResult(pdfBuffer);
        }
        public ActionResult PDFResult()
        {
            return View("");
        }
    }
}