using MBBVL.Core;
using MBBVL.HelperClass;
using MBBVL.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Validation;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
namespace MBBVL.Controllers {
    public class OligosequenceController : ApiController {

        public ApplicationDbContext db = new ApplicationDbContext();
        // GET api/<controller>
        public IEnumerable<string> Get() {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id) {
            return "value";
        }

        // POST api/<controller>
        [HttpPost]
        public IHttpActionResult Post(WrapperModel model) {
            //Insert into database
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

                //db.Entry(bill).State = EntityState.Added;
                // db.Billing.Add(bill);


                //Shipping
                Shipping ship = new Shipping();
                ship.ShippingDate = model.shipping.ShippingDate;
                ship.FullName = model.shipping.FullName;
                ship.Institution = model.shipping.Institution;
                ship.ShippingAddress = model.shipping.ShippingAddress;
                ship.Phone = model.shipping.Phone;
                ship.Email = model.shipping.Email;
                ship.UserId = g;
                // db.Shipping.Add(ship);
                //   db.Entry(ship).State = EntityState.Added;
                templateData.shipping = ship;

                //Oligosequence
                Oligosequence ol;

                for (int i = 0; i < model.oligosequence.Count(); i++) {
                    ol = new Oligosequence();
                    //Primer Name
                    ol.PrimerName = model.oligosequence[i].PrimerName;
                    //Qty
                    ol.Qty = model.oligosequence[i].Qty;
                    //OligonucleotideSequence
                    ol.OligonucleotideSequence = model.oligosequence[i].OligonucleotideSequenceValue;
                    //SynthesisScale1
                    ol.SynthesisScaleValue = model.oligosequence[i].SynthesisScaleValue;
                    ol.FinalDeliveryFormValue = model.oligosequence[i].FinalDeliveryFormValue;
                    ol.GMP2 = model.oligosequence[i].GMP2;
                    ol.Modification = model.oligosequence[i].ModificationValues;
                    ol.PurificationValue = model.oligosequence[i].PurificationValue;
                    ol.Price = model.oligosequence[i].Price;
                    ol.UserId = g;
                    //  db.Oligosequence.Add(ol);
                    //   db.Entry(ol).State = EntityState.Added;
                    getList.Add(ol);
                }
                //Create email template!
                SendEmail email = new SendEmail();
                templateData.oligosequence = getList;
                email.SetUpbill(templateData);
                // ParseTemplate(ob);
                //       db.SaveChanges();
                return Ok();
            } catch (Exception ex) {
                //// Retrieve the error messages as a list of strings.
                //var errorMessages = ex.EntityValidationErrors
                //    .SelectMany(x => x.ValidationErrors)
                //    .Select(x => x.ErrorMessage);

                //// Join the list to a single string.
                //var fullErrorMessage = string.Join("; ", errorMessages);

                //// Combine the original exception message with the new one.
                //var exceptionMessage = string.Concat(ex.Message, " The validation errors are: ", fullErrorMessage);

                //// Throw a new DbEntityValidationException with the improved exception message.
                //throw new DbEntityValidationException(exceptionMessage, ex.EntityValidationErrors);
                string error = ex.InnerException.ToString();
                return Ok(error);
            }



        }
        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value) {
        }

        // DELETE api/<controller>/5
        public void Delete(int id) {
        }
    }
}