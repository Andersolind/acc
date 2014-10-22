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

namespace MBBVL.Controllers.Sequencing {
    public class SequenceController : ApiController {
        // GET api/<controller>
        public ApplicationDbContext db = new ApplicationDbContext();
        public IEnumerable<string> Get() {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id) {
            return "value";
        }

        // POST api/<controller>
        [HttpPost]
        public void Post(SequencingWrapperModel model) {
            //Insert into database
            SequencingWrapperModel templateData = new SequencingWrapperModel();

            List<SequencingModel> getList = new List<SequencingModel>();
            List<CustomPrimers> getCustomPrimers = new List<CustomPrimers>();
            Guid g = Guid.NewGuid();
            try {

                Billing bill = new Billing();
                //  bill.Date = DateTime.Now;
                bill.FullName = model.Billing.FullName;
                bill.Quotenumber = model.Billing.Quotenumber;
                bill.Institution = model.Billing.Institution;
                bill.BillingAddress = model.Billing.BillingAddress;
                bill.Phone = model.Billing.Phone;
                bill.Email = model.Billing.Email;
                bill.UserId = g;
                templateData.Billing = bill;

                db.Entry(bill).State = EntityState.Added;
                db.Billing.Add(bill);


                //Shipping
                Shipping ship = new Shipping();
                ship.ShippingDate = model.Shipping.ShippingDate;
                ship.FullName = model.Shipping.FullName;
                ship.Institution = model.Shipping.Institution;
                ship.ShippingAddress = model.Shipping.ShippingAddress;
                ship.Phone = model.Shipping.Phone;
                ship.Email = model.Shipping.Email;
                ship.UserId = g;
                db.Shipping.Add(ship);
                db.Entry(ship).State = EntityState.Added;
                templateData.Shipping = ship;

                //DNA
                SequencingModel ol = new SequencingModel();
                for (int i = 0; i < model.sequencingModel.Count(); i++) {
                   
                    ol.SampleName = model.sequencingModel[i].SampleName;
                    ol.SampleCon = model.sequencingModel[i].SampleCon;
                    ol.VectorName = model.sequencingModel[i].VectorName;
                    ol.Length = model.sequencingModel[i].Length;
                    ol.PrimerName = model.sequencingModel[i].PrimerName;
                    ol.PrimerConc = model.sequencingModel[i].PrimerConc;
                    ol.GmpValue = model.sequencingModel[i].GmpValue;
                    ol.UserId = g;
                    //Ties into the other id's
                    db.SequencingModel.Add(ol);
                    getList.Add(ol);
                   // templateData.sequencingModel.Add(ol);
                  
                }
                db.Entry(ol).State = EntityState.Added;

                //DNA
                CustomPrimers cp = new CustomPrimers();
                for (int i = 0; i < model.customPrimers.Count(); i++) {
                    cp.GmpValue = model.customPrimers[i].GmpValue;
                    cp.PrimerName = model.customPrimers[i].PrimerName;
                    cp.ScaleValue = model.customPrimers[i].ScaleValue;
                    cp.Sequence = model.customPrimers[i].Sequence;
                    cp.UserId = g;
                    //Ties into the other id's
                    db.CustomPrimers.Add(cp);
                   // templateData.customPrimers.Add(cp);
                    //for master list
                    getCustomPrimers.Add(cp);
                }


                DataDeliveryOptions ddd = new DataDeliveryOptions();
                ddd.EditedTextData = CheckNulls.IsNotNull(model.dataDeliveryOptions.EditedTextData);
                ddd.TextDataAndChromatogramTrace = CheckNulls.IsNotNull(model.dataDeliveryOptions.TextDataAndChromatogramTrace);
                ddd.UneditedChromatogramTrace = CheckNulls.IsNotNull(model.dataDeliveryOptions.UneditedChromatogramTrace);
                ddd.UneditedTextAndChromatogramTrace = CheckNulls.IsNotNull(model.dataDeliveryOptions.UneditedTextAndChromatogramTrace);
                ddd.UserId = g;
                db.dataDeliveryOptions.Add(ddd);
                templateData.dataDeliveryOptions = ddd;
                db.Entry(ddd).State = EntityState.Added;

                //Create email template!
                SendEmail email = new SendEmail();
                templateData.sequencingModel = getList;
                templateData.customPrimers = getCustomPrimers;
                email.SetUpSequence(templateData);
                // ParseTemplate(ob);
                db.SaveChanges();
               // return templateData;
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

        [HttpPost]
        [ResponseType(typeof(SequenceController))]
        [Route("CreateEmail")]
        public IHttpActionResult CreateEmail(SequencingWrapperModel model) {
            return Ok("");
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value) {
        }

        // DELETE api/<controller>/5
        public void Delete(int id) {
        }
    }
}