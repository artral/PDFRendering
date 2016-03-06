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
            return View("Home");
        }
        public ActionResult DownLoadPDF()
        {
            return View("Home");
        }
        public ActionResult PDFResult()
        {
            var path = Server.MapPath(@"\PDFRendering\App_Data\PDF\Test.pdf");
            var pdfBuffer = ExtensionsHelper.ExtensionsHelper.GetPDFMemerySteram(path);
            return new PDFContentResult(pdfBuffer);
        }
    }
}