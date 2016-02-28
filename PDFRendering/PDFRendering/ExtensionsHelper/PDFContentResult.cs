using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace PDFRendering.ExtensionsHelper
{
    public class PDFContentResult : ActionResult
    {
        public string ContentType { get; set; }
        public byte[] PDFContent { get; set; }

        public PDFContentResult(byte[] contentBytes, string contentType= "application.pdf")
        {
            this.PDFContent = contentBytes;
            this.ContentType = contentType;
        }

        public override void ExecuteResult(ControllerContext context)
        {
            var response = context.HttpContext.Response;
            response.Clear();
            response.Cache.SetCacheability(System.Web.HttpCacheability.NoCache);
            response.ContentType = ContentType;
            var stream = new MemoryStream(this.PDFContent);
            stream.WriteTo(response.OutputStream);
            stream.Dispose();
        }


    }
}
