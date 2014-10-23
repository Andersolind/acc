using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MBBVL.Controllers
{
    public class TechSupportController : Controller
    {
        //
        // GET: /TechSupport/
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult General()
        {
            return View();
        }
        public ActionResult Glossary()
        {
            return View();
        }
        public ActionResult FAQs()
        {
            return View();
        }
        public ActionResult Tools()
        {
            return View();
        }
	}
}