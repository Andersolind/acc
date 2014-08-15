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
            try {

                return View();

            } catch (Exception ex) {
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
        public ActionResult SubmitOrder(WrapperModel model, FormCollection form) {

            var num = form["oNum"];
            if (ModelState.IsValid) {
                //Submit
                //Logic
                //Insert all the billing 
                Billing bill = new Billing();
                //  bill.Date = DateTime.Now;
                bill.FullName = model.billing.FullName;
                bill.Institution = model.billing.Institution;
                bill.BillingAddress = model.billing.BillingAddress;
                bill.Phone = model.billing.Phone;
                bill.Email = model.billing.Email;

                //Shipping
                Shipping ship = new Shipping();
                ship.Date = model.shipping.Date;
                ship.FullName = model.shipping.FullName;
                ship.Institution = model.shipping.Institution;
                ship.ShippingAddress = model.shipping.ShippingAddress;
                ship.Phone = model.shipping.Phone;
                ship.Email = model.shipping.Email;
                //Oligosequence
                for (int i = 0; i < model.oligosequence.Count(); i++) {
                    Oligosequence ol = new Oligosequence();
                    ol.PrimerName = model.oligosequence[1].PrimerName;
                    var getSynthesisScale1 = Core.StaticValues.SynthesisD.SingleOrDefault(x => x.Value == Convert.ToInt32(model.oligosequence[i].SynthesisScale1));
                    var ti = getSynthesisScale1.Key;
                }
            }
            return View(model);
        }
        private void CreateOrder(WrapperModel model) {
            ApplicationDbContext ab;


            using (var ctx = new ApplicationDbContext()) {
                Billing bill = new Billing();
                //  bill.Date = DateTime.Now;
                bill.FullName = model.billing.FullName;
                bill.Institution = model.billing.Institution;
                bill.BillingAddress = model.billing.BillingAddress;
                bill.Phone = model.billing.Phone;
                bill.Email = model.billing.Email;
                ctx.Billing.Add(bill);

                //Shipping
                Shipping ship = new Shipping();
                ship.Date = model.shipping.Date;
                ship.FullName = model.shipping.FullName;
                ship.Institution = model.shipping.Institution;
                ship.ShippingAddress = model.shipping.ShippingAddress;
                ship.Phone = model.shipping.Phone;
                ship.Email = model.shipping.Email;
                ctx.Shipping.Add(ship);

                //Oligosequence
                for (int i = 0; i < model.oligosequence.Count(); i++) {
                    Oligosequence ol = new Oligosequence();
                    ol.PrimerName = model.oligosequence[1].PrimerName;
                    var getSynthesisScale1 = Core.StaticValues.SynthesisD.SingleOrDefault(x => x.Value == Convert.ToInt32(model.oligosequence[i].SynthesisScale1));
                    var ti = getSynthesisScale1.Key;
                    ctx.Oligosequence.Add(ol);
                }
                
                ctx.SaveChanges();
            }
        }


    }
}