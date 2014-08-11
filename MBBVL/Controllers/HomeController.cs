using MBBVL.DbAccess;
using MBBVL.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace MBBVL.Controllers {
    public class HomeController : Controller {
       

        public ActionResult Index() {
            //Check if the user is logged in..
            try
            {
               
                    return View();
                
            }
            catch(Exception ex)
            {
                string error = ex.InnerException.ToString();
            }
            return View();
        }

        public ActionResult About() {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact() {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult Vbrules()
        {
            ViewBag.Message = "Vollyball Rules";

            return View();
        }
        public ActionResult BaseballRules()
        {
            ViewBag.Message = "Baseball Rules";

            return View();
        }
        public ActionResult Maps()
        {
            ViewBag.Message = "Maps";
            return View();
        }
        public ActionResult LeagueInfo()
        {
            ViewBag.Message = "League Info";
            return View();
        }
        public ActionResult Price()
        {
            ViewBag.Message = "Price and Cost";
            return View();
        }
       
          public ActionResult Order(int? oligonucleotideNum) {

            var model = new WrapperModel();
            ViewBag.Message = "Your contact page.";
            var getSynthesis = Core.StaticValues.Synthesis.ToList();
            var getFinalDelivery = Core.StaticValues.FinalDelivery.ToList();
            var purifcation = Core.StaticValues.Purification.ToList();
            ViewBag.Purification = purifcation;
            ViewBag.Synthesis = getSynthesis;
            ViewBag.FinalDelivery = getFinalDelivery;
            if (oligonucleotideNum != null) {
                ViewBag.MakeCount = oligonucleotideNum;
            }
            return View(model);
        }
        
        
    }
}