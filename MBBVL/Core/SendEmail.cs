using MBBVL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web;

namespace MBBVL.Core {
    public class SendEmail {
        public void CreateEmail(string toSender, string fromSender, string body) {
            try {


                //Create the msg object to be sent
                MailMessage msg = new MailMessage();
                //Add your email address to the recipients
                msg.To.Add(toSender);
                //Configure the address we are sending the mail from
                MailAddress address = new MailAddress("info@acgt.com");
                MailAddress addressBCC = new MailAddress("andersolind@hotmail.com");
                msg.From = address;
                msg.Bcc.Add(addressBCC);
                msg.Subject = "Order form";
                msg.IsBodyHtml = true;
                msg.Body = body;

                ////Configure an SmtpClient to send the mail.            
                SmtpClient smptc = new SmtpClient(); // Here SMTP Client object is created
                //   smptc.Host = "smtpout.asia.secureserver.net";// here SMTP interface Address is passed
                smptc.Port = 25;// Use port No 25
                smptc.UseDefaultCredentials = false;
                smptc.EnableSsl = false;
                smptc.DeliveryMethod = SmtpDeliveryMethod.Network;
                NetworkCredential credentials = new NetworkCredential("info@snapcheckit.com", "Travel2014");
                smptc.Credentials = credentials;
                smptc.Send(msg);

                ////Setup credentials to login to our sender email address ("UserName", "Password")
                //NetworkCredential credentials = new NetworkCredential("andersolind@gmail.com", "Oscar@2015");
                //client.UseDefaultCredentials = true;
                //client.Credentials = credentials;

                ////Send the msg
                //client.Send(msg);
                //var client = new SmtpClient("smtp.gmail.com", 587) {
                //    Credentials = new NetworkCredential("andersolind@gmail.com", "Oscar@2015"),
                //    EnableSsl = true
                //};

                //client.Send("andersolind@hotmail.com", "andersolind@gmail.com", "test", "testbody");


            } catch (Exception ex) {
                string er = ex.InnerException.ToString();
            }
        }
        public string SetUpSequence(SequencingWrapperModel model) {
            SequencingWrapperModel m = new SequencingWrapperModel();

            m.Billing = model.Billing;
            m.Shipping = model.Shipping;
            m.sequencingModel = model.sequencingModel;
            //headers
            var bill = "<h1>Dear" + model.Billing.FullName + "Here is your Order <br>Billing</h1>";

            bill += "<table style='width:100%' class='panel-title'>";
            bill += "<tr>";
            bill += "<td class='boldCell'>Quote Number</td>";
            bill += "<td class='boldCell'>Full Name</td>";
            bill += "<td class='boldCell'>Institution</td>";
            bill += "<td class='boldCell'>Billing Address </td>";
            bill += "<td class='boldCell'>Phone</td>";
            bill += "<td class='boldCell'>Email</td>";
            // more cells here as needed
            bill += "</tr>";
            //Content

            bill += "<tr  style='width:100%'>";
            bill += "<td class='boldCell'>" + m.Billing.Quotenumber + "</td>";
            bill += "<td class='boldCell'>" + m.Billing.FullName + "</td>";
            bill += "<td class='boldCell'>" + m.Billing.Institution + "</td>";
            bill += "<td class='boldCell'>" + m.Billing.BillingAddress + "</td>";
            bill += "<td class='boldCell'>" + m.Billing.Phone + "</td>";
            bill += "<td class='boldCell'>" + m.Billing.Email + "</td>";
            // more cells here as needed
            bill += "</tr>";
            //shipping

            var ship = "<h1>Shipping</h1>";
            ship += "</table><table  style='width:100%' class='colorful'>";
            ship += "<tr style='width:100%'>";
            ship += "<td class='boldCell'>Date</td>";
            ship += "<td class='boldCell'>Full name</td>";
            ship += "<td class='boldCell'>Institution</td>";
            ship += "<td class='boldCell'>Shipping Address</td>";
            ship += "<td class='boldCell'>Phone</td>";
            ship += "<td class='boldCell'>Email</td>";
            // more cells here as needed
            ship += "</tr>";


            ship += "<tr>";
            ship += "<td class='boldCell'>" + m.Shipping.ShippingDate + "</td>";
            ship += "<td class='boldCell'>" + m.Shipping.FullName + "</td>";
            ship += "<td class='boldCell'>" + m.Shipping.Institution + "</td>";
            ship += "<td class='boldCell'>" + m.Shipping.ShippingAddress + "</td>";
            ship += "<td class='boldCell'>" + m.Shipping.Phone + "</td>";
            ship += "<td class='boldCell'>" + m.Shipping.Email + "</td>";
            // more cells here as needed
            ship += "</tr>";
            var olForm = "<h1>Sequencing</h1>"; ;
            olForm += "</table><table style='width:100%' class='colorful'>";

            olForm += "<tr  style='width:100%'>";
            olForm += "<td class='boldCell'>Sample Name</td>";
            olForm += "<td class='boldCell'>Sample Conc</td>";
            olForm += "<td class='boldCell'>Vector Name</td>";
            olForm += "<td class='boldCell'>Length</td>";
            olForm += "<td class='boldCell'>Primer Name</td>";
            olForm += "<td class='boldCell'>Primer Conc</td>";
            olForm += "<td class='boldCell'>GMP3</td>";

            // more cells here as needed
            olForm += "</tr>";


            for (int i = 0; i < m.sequencingModel.Count(); i++) {
                olForm += "<tr>";
                olForm += "<td class='boldCell'>" + m.sequencingModel[i].SampleName.SingleOrDefault() + "</td>";
                olForm += "<td class='boldCell'>" + m.sequencingModel[i].SampleCon.SingleOrDefault() + "</td>";
                olForm += "<td class='boldCell'>" + m.sequencingModel[i].VectorName + "</td>";
                olForm += "<td class='boldCell'>" + m.sequencingModel[i].Length + "</td>";
                olForm += "<td class='boldCell'>" + m.sequencingModel[i].PrimerConc + "</td>";
                olForm += "<td class='boldCell'>" + m.sequencingModel[i].GMP3 + "</td>";
                // more cells here as needed
                olForm += "</tr>";
            }
            olForm += "</table>";
            var template = bill + ship + olForm;
            CreateEmail(m.Shipping.Email, "Andersolind@gmail.com", template);
            return olForm;
        }

        public string SetUpbill(WrapperModel model) {
            WrapperModel m = new WrapperModel();

            m.billing = model.billing;
            m.shipping = model.shipping;
            m.oligosequence = model.oligosequence;
            //headers
            var bill = "<h1>Dear" + model.billing.FullName + "Here is your Order <br>Billing</h1>";

            bill += "<table style='width:100%' class='panel-title'>";
            bill += "<tr>";
            bill += "<td class='boldCell'>Quote Number</td>";
            bill += "<td class='boldCell'>Full Name</td>";
            bill += "<td class='boldCell'>Institution</td>";
            bill += "<td class='boldCell'>Billing Address </td>";
            bill += "<td class='boldCell'>Phone</td>";
            bill += "<td class='boldCell'>Email</td>";
            // more cells here as needed
            bill += "</tr>";
            //Content

            bill += "<tr  style='width:100%'>";
            bill += "<td class='boldCell'>" + m.billing.Quotenumber + "</td>";
            bill += "<td class='boldCell'>" + m.billing.FullName + "</td>";
            bill += "<td class='boldCell'>" + m.billing.Institution + "</td>";
            bill += "<td class='boldCell'>" + m.billing.BillingAddress + "</td>";
            bill += "<td class='boldCell'>" + m.billing.Phone + "</td>";
            bill += "<td class='boldCell'>" + m.billing.Email + "</td>";
            // more cells here as needed
            bill += "</tr>";
            //shipping

            var ship = "<h1>Shipping</h1>";
            ship += "</table><table  style='width:100%' class='colorful'>";
            ship += "<tr style='width:100%'>";
            ship += "<td class='boldCell'>Date</td>";
            ship += "<td class='boldCell'>Full name</td>";
            ship += "<td class='boldCell'>Institution</td>";
            ship += "<td class='boldCell'>Shipping Address</td>";
            ship += "<td class='boldCell'>Phone</td>";
            ship += "<td class='boldCell'>Email</td>";
            // more cells here as needed
            ship += "</tr>";


            ship += "<tr>";
            ship += "<td class='boldCell'>" + m.shipping.ShippingDate + "</td>";
            ship += "<td class='boldCell'>" + m.shipping.FullName + "</td>";
            ship += "<td class='boldCell'>" + m.shipping.Institution + "</td>";
            ship += "<td class='boldCell'>" + m.shipping.ShippingAddress + "</td>";
            ship += "<td class='boldCell'>" + m.shipping.Phone + "</td>";
            ship += "<td class='boldCell'>" + m.shipping.Email + "</td>";
            // more cells here as needed
            ship += "</tr>";
            var olForm = "<h1>Oligosequence</h1>"; ;
            olForm += "</table><table style='width:100%' class='colorful'>";

            olForm += "<tr  style='width:100%'>";
            olForm += "<td class='boldCell'>PrimerName</td>";
            olForm += "<td class='boldCell'>Qty</td>";
            olForm += "<td class='boldCell'>OligonucleotideSequence</td>";
            olForm += "<td class='boldCell'>SynthesisScale1</td>";
            olForm += "<td class='boldCell'>GMP2</td>";
            olForm += "<td class='boldCell'>Modification</td>";
            olForm += "<td class='boldCell'>FinalDeliveryForm</td>";
            olForm += "<td class='boldCell'>Purification</td>";
            // more cells here as needed
            olForm += "</tr>";


            for (int i = 0; i < m.oligosequence.Count(); i++) {
                olForm += "<tr>";
                olForm += "<td class='boldCell'>" + m.oligosequence[i].PrimerName.SingleOrDefault() + "</td>";
                olForm += "<td class='boldCell'>" + m.oligosequence[i].Qty.SingleOrDefault() + "</td>";
                olForm += "<td class='boldCell'>" + m.oligosequence[i].OligonucleotideSequence + "</td>";
                olForm += "<td class='boldCell'>" + m.oligosequence[i].SynthesisScale1 + "</td>";
                olForm += "<td class='boldCell'>" + m.oligosequence[i].GMP2 + "</td>";
                olForm += "<td class='boldCell'>" + m.oligosequence[i].Modification + "</td>";
                olForm += "<td class='boldCell'>" + m.oligosequence[i].FinalDeliveryForm + "</td>";
                olForm += "<td class='boldCell'>" + m.oligosequence[i].Purification + "</td>";
                // more cells here as needed
                olForm += "</tr>";
            }
            olForm += "</table>";
            var template = bill + ship + olForm;
            CreateEmail(m.shipping.Email, "Andersolind@gmail.com", template);
            return olForm;
        }
    }
}