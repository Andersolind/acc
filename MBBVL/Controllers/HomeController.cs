using MBBVL.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Validation;
using System.IO;
using System.Linq;
using System.Web.Mvc;
using System.Xml.Serialization;
using iTextSharp.text;
using MBBVL.Core;
namespace MBBVL.Controllers {
    public class HomeController : Controller {

        public ApplicationDbContext db = new ApplicationDbContext();
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

            return View("About","_Layout - SubPages");
        }

        public ActionResult Contact() {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult News() {
            ViewBag.Message = "Your News page.";

            return View();
        }
        public ActionResult Location() {
            ViewBag.Message = "Your Location page.";

            return View();
        }

        public ActionResult Order(int? oligonucleotideNum) {

            var model = new WrapperModel();
            ViewBag.Message = "Your contact page.";
            Createviewbags();
            if (oligonucleotideNum != null) {
                ViewBag.MakeCount = oligonucleotideNum;
            }
            return View(model);
        }
        private void Createviewbags() {
            var getSynthesis = Core.StaticValues.Synthesis.ToList();
            var getFinalDelivery = Core.StaticValues.FinalDelivery.ToList();
            var purifcation = Core.StaticValues.Purification.ToList();
            ViewBag.Purification = purifcation;
            ViewBag.Synthesis = getSynthesis;
            ViewBag.FinalDelivery = getFinalDelivery;
        }
        private ActionResult CreateExcel(IEnumerable<object> model) {

            var stream = new MemoryStream();
            var serializer = new XmlSerializer(typeof(List<WrapperModel>));

            //We load the data
            List<object> data = model.ToList();

            //We turn it into an XML and save it in the memory
            serializer.Serialize(stream, data);
            stream.Position = 0;

            //We return the XML from the memory as a .xls file
            return File(stream, "application/vnd.ms-excel", "Orders.xls");
        }
        public ActionResult SubmitOrder(WrapperModel model, FormCollection form) {

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
        public ActionResult PDF(WrapperModel m) {

            return new RazorPDF.PdfResult(m, "PDF");
        }

        //  public ActionResult GeneratePDF() { return new Rotativa.ActionAsPdf("Orders"); }
        private WrapperModel CreateOrder(WrapperModel model) {

            WrapperModel templateData = new WrapperModel();
            List<Oligosequence> getList = new List<Oligosequence>();
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
                bill.Notes = model.billing.Notes;
                bill.UserId = g;
                templateData.billing = bill;

                db.Entry(bill).State = EntityState.Added;
                db.Billing.Add(bill);


                //Shipping
                Shipping ship = new Shipping();
                ship.ShippingDate = model.shipping.ShippingDate;
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
                Oligosequence ol;

                for (int i = 0; i < model.oligosequence.Count(); i++) {
                    ol = new Oligosequence();
                    ////Primer Name
                    //ol.PrimerName = model.oligosequence[i].PrimerName;
                    ////Qty
                    //ol.Qty = model.oligosequence[i].Qty;
                    ////OligonucleotideSequence
                    //ol.OligonucleotideSequence = model.oligosequence[i].OligonucleotideSequence;
                    ////SynthesisScale1
                    //var getSynthesisScale1 = Core.StaticValues.SynthesisD.SingleOrDefault(x => x.Value == Convert.ToInt32(model.oligosequence[i].SynthesisScale1));
                    //ol.SynthesisScale1 = getSynthesisScale1.Key;

                    //var final = Core.StaticValues.FinalDelivery.SingleOrDefault(x => x.Value == Convert.ToString(model.oligosequence[i].FinalDeliveryForm));
                    //ol.FinalDeliveryForm = final.Text;
                    //ol.GMP2 = model.oligosequence[i].GMP2;
                    //ol.Modification = model.oligosequence[i].Modification;
                   
                    //var purification = Core.StaticValues.Purification.SingleOrDefault(X => X.Value == model.oligosequence[i].Purification);
                    //ol.Purification = purification.Text;
                   
                   
                    //ol.UserId = g;
                    //db.Oligosequence.Add(ol);
                    //db.Entry(ol).State = EntityState.Added;
                    getList.Add(ol);
                }
                //Create email template!
                SendEmail email = new SendEmail();
                templateData.oligosequence = getList;
                email.SetUpbill(templateData);
                // ParseTemplate(ob);
         //       db.SaveChanges();
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
        private void SetupOl() {

        }
        public ActionResult Thankyou() { return View(); }

        public ActionResult CompanyPeople() {
            return View();
        }
        public ActionResult PublicationServices() {
            return View();
        }
        public ActionResult Careers() {
            return View();
        }
        public ActionResult TermsAndConditions() {
            return View();
        }

        public ActionResult Mock()
        {
            return View();
        }
      

        public void ParseTemplate(List<object> model) {
            var html = "";
            html += "<table class='colorful'>";
            foreach (var item in model) {
                html += "<tr>";
                html += "<td class='boldCell'>" + item + "</td>";
                // more cells here as needed
                html += "</tr>";
            }
            html += "</table>";

            //string template = null;
            //String path = HttpContext.Server.MapPath("~/Templates/Orderform.chtml");
            //using (StreamReader reader = System.IO.File.OpenText(path)) {
            //    template = reader.ReadToEnd();
            //}

            //string renderedEmailBody = Razor.Parse(template, model);
        }

    }
}