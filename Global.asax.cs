using PDFRendering.Views.VewEngine;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace PDFRendering
{
    public class MvcApplication : HttpApplication
    {
        protected void Application_Start()
        {
            PDFViewEngine engine = new PDFViewEngine();
            engine.AddViewLocationFormat("~/PDFRendering/{0}.cshtml");
            engine.AddPartialViewLocationFormat("~/PDFRendering/{0}.cshtml");
            ViewEngines.Engines.Add(engine);
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
}
