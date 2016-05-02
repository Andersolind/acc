using System.Web;
using System.Web.Optimization;

namespace MBBVL {
    public class BundleConfig {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles) {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/js/Angular.js",
                      "~/Scripts/bootstrap.js",
                      "~/js/Angular/TypeaHead/Type.js",
                      "~/js/Angular/TypeaHead/bloodhound.js",
                      "~/js/Angular/Directives/Typeahead.js",
                       "~/js/ui-bootstrap-tpls-0.11.2.min.js",
                      "~/js/angular/app.js",
                       "~/js/angular/Service/acgtService.js",
                       "~/js/angular/Service/acgtPrices.js",
                       "~/js/angular/Service/ModifierService.js",
                         "~/js/angular/Service/OligoCalcUtilsService.js",
                         "~/js/angular/Service/CalculateNeighborsService.js",
                       "~/js/angular/Directives/preventKeyPress.js",
                       "~/js/angular/Fac/factory.js",
                       "~/js/angular/Controller/OrderSequencingctrl.js",
                       "~/js/angular/Controller/OrderOgliCtrl.js",
                        "~/js/angular/Controller/MockCtrl.js",
                       "~/js/angular/Controller/PickUpCtrl.js",
                        
                      "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/Directives").Include(
                  "~/js/angular/OligoFormDirective/OligoDirective.js",
                   "~/js/angular/OligoFormDirective/OligoFormCtrl.js"
                  ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/Bootstrap/bootstrap.css",
                     "~/Content/Bootstrap/datepicker.css",
                      "~/Content/Bootstrap/site.css"));
            bundles.Add(new StyleBundle("~/Content/subClasses").Include(
                      "~/Content/Bootstrap/bootstrap.css",
                     "~/Content/Bootstrap/datepicker.css",
                      "~/Content/Bootstrap/SubPages.css",
                      "~/Content/Bootstrap/SideNavBar.css"));

            bundles.Add(new StyleBundle("~/Content/MakeOver").Include(
               "~/Content/Bootstrap/bootstrap.css",
                    "~/Content/MakeOver/animate.min.css",
                    "~/Content/MakeOver/font-awesome.min.css",
                   "~/Content/MakeOver/lightbox.css",
                     "~/Content/MakeOver/main.css",
                      "~/Content/MakeOver/presets/preset1.css"));

        }
    }
}
