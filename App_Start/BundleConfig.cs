using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace PDFRendering
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/PDFRendering/css").Include(
                         "~/Content/bootstrap.css"));

            bundles.Add(new ScriptBundle("~/PDFRendering/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/PDFRendering/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/PDFRendering/knockout").Include(
                        "~/Scripts/knockout-{version}.js"));



            bundles.Add(new ScriptBundle("~/PDFRendering/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));



            //Project Specific
            bundles.Add(new ScriptBundle("~/PDFRendering/Helpers").Include(
                     "~/Scripts/Helper/SPAHandler.js",
                     "~/Scripts/Helper/SPAWindow.js"));

            bundles.Add(new ScriptBundle("~/PDFRendering/ProjectHelpers").Include(
                   "~/Scripts/PDFRendering/PDFHandler.js"));



            bundles.Add(new ScriptBundle("~/PDFRendering/modernizr").Include(
                       "~/Scripts/modernizr-*"));

        }

    }
}