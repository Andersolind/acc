using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MBBVL.Controllers
{
    public class SequencingController : Controller
    {
        //
        // GET: /Sequencing/
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult PickUp() {
            return View();
        }
        public ActionResult SequencingTechnology() {
           return View();
        }
        public ActionResult SequencingOrderForm() {
           return View();
        }
        public ActionResult SamplePreparation() {
            return View();
        }
        public ActionResult InhousePrimers() {
            return View();
        }
        public ActionResult PriceList() {
            return View();
        }
        public ActionResult FAQ() {
            return View();
        }
        
	}
}