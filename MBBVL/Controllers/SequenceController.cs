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
      [RoutePrefix("api/Sequence")]
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
        public IHttpActionResult Post(SequencingWrapperModel model) {
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
                bill.Notes = model.Billing.Notes;
                bill.UserId = g;
                templateData.Billing = bill;

             //   db.Entry(bill).State = EntityState.Added;
               // db.Billing.Add(bill);

                if (model.IsShipping) {
                    //Pickup

                    PickUp ship = new PickUp();
                    ship.PickUpDate = model.PickUp.PickUpDate;
                    ship.FullName = model.PickUp.FullName;
                    ship.Institution = model.PickUp.Institution;
                    ship.ShippingAddress = model.PickUp.ShippingAddress;
                    ship.Phone = model.PickUp.Phone;
                    ship.Email = model.PickUp.Email;

                    ship.UserId = g;
                    //db.PickUp.Add(ship);
                    //db.Entry(ship).State = EntityState.Added;
                    templateData.PickUp = ship;
                }

                //DNA
                SequencingModel ol;
                for (int i = 0; i < model.sequencingModel.Count(); i++) {
                    ol = new SequencingModel();
                    ol.SampleName = model.sequencingModel[i].SampleName;
                    ol.SampleCon = model.sequencingModel[i].SampleCon;
                    ol.VectorName = model.sequencingModel[i].VectorName;
                    ol.Length = model.sequencingModel[i].Length;
                    ol.PrimerName = model.sequencingModel[i].PrimerName;
                    ol.PrimerConc = model.sequencingModel[i].PrimerConc;
                    ol.GmpValue = model.sequencingModel[i].GmpValue;
                    ol.UserId = g;
                    //Ties into the other id's
                    //db.SequencingModel.Add(ol);
                    getList.Add(ol);
                    //db.Entry(ol).State = EntityState.Added;
                }


                //DNA
                if (model.IsPrimer) {
                    CustomPrimers cp;
                    for (int i = 0; i < model.customPrimers.Count(); i++) {
                        cp = new CustomPrimers();
                        cp.GmpValue = model.customPrimers[i].GmpValue;
                        cp.PrimerName = model.customPrimers[i].PrimerName;
                        cp.ScaleValue = model.customPrimers[i].ScaleValue;
                        cp.Sequence = model.customPrimers[i].Sequence;
                        cp.UserId = g;
                        //Ties into the other id's
                        //   db.CustomPrimers.Add(cp);
                        // db.Entry(cp).State = EntityState.Added;
                        getCustomPrimers.Add(cp);
                    }
                }


                DataDeliveryOptions ddd = new DataDeliveryOptions();
                ddd.Name = model.DataDeliveryOptions.Name;
                ddd.Value = model.DataDeliveryOptions.Value;
           //     db.dataDeliveryOptions.Add(ddd);
                templateData.DataDeliveryOptions = ddd;
             //   db.Entry(ddd).State = EntityState.Added;

                //Create email template!
                SendEmail email = new SendEmail();
                templateData.sequencingModel = getList;
                templateData.customPrimers = getCustomPrimers;
                templateData.IsPrimer = model.IsPrimer;
                templateData.IsShipping = model.IsShipping;
                //
                email.SetUpSequence(templateData);
                // ParseTemplate(ob);
           //     db.SaveChanges();
                return Ok();
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
        [Route("SendPickUpEmail")]
        public IHttpActionResult SendPickUpEmail(SequencingWrapperModel model) {

            SendEmail email = new SendEmail();
            SequencingWrapperModel templateData = new SequencingWrapperModel();
            templateData.PickUp = model.PickUp;
            //
            email.SendPickUp(templateData);

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