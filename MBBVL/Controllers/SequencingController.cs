using MBBVL.Core;
using MBBVL.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Validation;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MBBVL.Controllers {
    public class SequencingController : Controller {
        public ApplicationDbContext db = new ApplicationDbContext();
        //
        // GET: /Sequencing/
        public ActionResult Index() {
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
        public ActionResult Order(int? oligonucleotideNum) {

            var model = new SequencingWrapperModel();
            ViewBag.Message = "Your contact page.";
            Createviewbags();
            if (oligonucleotideNum != null) {
                ViewBag.MakeCount = oligonucleotideNum;
            }
            return View(model);
        }
        private void Createviewbags() {
            var GMP3 = Core.StaticValues.GMP3.ToList();
            ViewBag.GMP3 = GMP3;
        }
        public ActionResult SubmitOrder(SequencingWrapperModel model, FormCollection form) {

            var num = form["oNum"];
            if (ModelState.IsValid) {
                var myList = CreateOrder(model);

                ///Generate(model);
                //   var productList = new List<object> { myList.ToList() };
                //   Createviewbags();

                return RedirectToAction("Thankyou");
            } else {
                Createviewbags();
                return View("Order", model);
            }

        }

        private SequencingWrapperModel CreateOrder(SequencingWrapperModel model) {

            SequencingWrapperModel templateData = new SequencingWrapperModel();
            List<SequencingModel> getList = new List<SequencingModel>();
            Guid g = Guid.NewGuid();
            try {

                Billing bill = new Billing();
                //  bill.Date = DateTime.Now;
                bill.FullName = model.billing.FullName;
                bill.Quotenumber = model.billing.Quotenumber;
                bill.Institution = model.billing.Institution;
                bill.BillingAddress = model.billing.BillingAddress;
                bill.Phone = model.billing.Phone;
                bill.Email = model.billing.Email;
                bill.UserId = g;
                templateData.billing = bill;

                db.Entry(bill).State = EntityState.Added;
                db.Billing.Add(bill);


                //Shipping
                Shipping ship = new Shipping();
                ship.Date = model.shipping.Date;
                ship.FullName = model.shipping.FullName;
                ship.Institution = model.shipping.Institution;
                ship.ShippingAddress = model.shipping.ShippingAddress;
                ship.Phone = model.shipping.Phone;
                ship.Email = model.shipping.Email;
                ship.UserId = g;
                db.Shipping.Add(ship);
                db.Entry(ship).State = EntityState.Added;
                templateData.shipping = ship;

                //Oligosequence
                SequencingModel ol = new SequencingModel();
                for (int i = 0; i < model.sequencingModel.Count(); i++) {
                    var final = Core.StaticValues.FinalDelivery.SingleOrDefault(x => x.Value == Convert.ToString(model.sequencingModel[i].SampleName));
                    ol.SampleName = model.sequencingModel[i].SampleName;
                    ol.SampleCon = model.sequencingModel[i].SampleCon;
                    ol.VectorName = model.sequencingModel[i].VectorName;
                    ol.Length = model.sequencingModel[i].Length;
                    ol.PrimerName = model.sequencingModel[i].PrimerName;
                    ol.PrimerConc = model.sequencingModel[i].PrimerConc;
                    ol.GMP3 = model.sequencingModel[i].GMP3;
                    ol.UserId = g;
                    //Ties into the other id's
                    db.SequencingModel.Add(ol);
                    getList.Add(ol);
                }
                db.Entry(ol).State = EntityState.Added;
                

                DataDeliveryOptions ddd = new DataDeliveryOptions();
                ddd.TextData = model.dataDeliveryOptions.TextData;
                ddd.ChromatogramTrace = model.dataDeliveryOptions.ChromatogramTrace;
                ddd.TextAndChromatogramTrace = model.dataDeliveryOptions.TextDataAndChromatogramTrace;
                ddd.TextDataAndChromatogramTrace = model.dataDeliveryOptions.TextDataAndChromatogramTrace;
                ddd.UserId = g;
                db.dataDeliveryOptions.Add(ddd);
                db.Entry(ddd).State = EntityState.Added;

                //Create email template!
                SendEmail email = new SendEmail();
                templateData.sequencingModel = getList;
                email.SetUpSequence(templateData);
                // ParseTemplate(ob);
                db.SaveChanges();
                return templateData;
            } catch (DbEntityValidationException ex) {
                // Retrieve the error messages as a list of strings.
                var errorMessages = ex.EntityValidationErrors
                    .SelectMany(x => x.ValidationErrors)
                    .Select(x => x.ErrorMessage);

                // Join the list to a single string.
                var fullErrorMessage = string.Join("; ", errorMessages);
                // Combine the original exception message with the new one.
                var exceptionMessage = string.Concat(ex.Message, " The validation errors are: ", fullErrorMessage);
                // Throw a new DbEntityValidationException with the improved exception message.
                throw new DbEntityValidationException(exceptionMessage, ex.EntityValidationErrors);
            }
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