using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Web;
using System.Web.Mvc;

namespace PDFRendering.ExtensionsHelper
{
    public static class ExtensionsHelper
    {
        /// <summary>
        /// 
        /// Get the buffer or you can just pass the stream to render....
        /// </summary>
        /// <param name="filepath"></param>
        /// <returns></returns>
        public static byte[] GetPDFMemerySteram(string filepath)
        {
            FileStream pdfStream = new FileStream(filepath, FileMode.Open, FileAccess.Read);
            pdfStream.Position = 0;
            byte[] buffer = new byte[pdfStream.Length];
            for (int totalBytesCopied = 0; totalBytesCopied < pdfStream.Length;)
                totalBytesCopied += pdfStream.Read(buffer, totalBytesCopied, Convert.ToInt32(pdfStream.Length) - totalBytesCopied);
            return buffer;

        }
    }
}
