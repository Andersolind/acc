using MBBVL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Web;

namespace MBBVL.Core {
    public class SendEmail {
        public void CreateEmail(string toSender, string fromSender, string body) {
            try {
                MailAddress SendFrom = new MailAddress(fromSender);
                MailAddress SendTo = new MailAddress(toSender);
                MailMessage MyMessage = new MailMessage(SendFrom, SendTo);
                MyMessage.Subject = "Your order form";
                MyMessage.Body = body;
                MyMessage.IsBodyHtml = true;
                SmtpClient smtp = new SmtpClient("relay-hosting.secureserver.net");
                smtp.Send(MyMessage);


            } catch (Exception ex) {
                string er = ex.InnerException.ToString();
            }
        }
        public string SetUpbill(WrapperModel model) {
            WrapperModel m = new WrapperModel();

            m.billing = model.billing;
            m.shipping = model.shipping;
            m.oligosequence = model.oligosequence;
            //headers
            var bill = "";
            bill += "<table class='colorful'>";
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

            bill += "<tr>";
            bill += "<td class='boldCell'>" + m.billing.Quotenumber + "</td>";
            bill += "<td class='boldCell'>" + m.billing.FullName + "</td>";
            bill += "<td class='boldCell'>" + m.billing.Institution + "</td>";
            bill += "<td class='boldCell'>" + m.billing.BillingAddress + "</td>";
            bill += "<td class='boldCell'>" + m.billing.Phone + "</td>";
            bill += "<td class='boldCell'>" + m.billing.Email + "</td>";
            // more cells here as needed
            bill += "</tr>";
            //shipping

            var ship = "";
            ship += "</table><table class='colorful'>";
            ship += "<tr>";
            ship += "<td class='boldCell'>Date</td>";
            ship += "<td class='boldCell'>Full name</td>";
            ship += "<td class='boldCell'>Institution</td>";
            ship += "<td class='boldCell'>Shipping Address</td>";
            ship += "<td class='boldCell'>Phone</td>";
            ship += "<td class='boldCell'>Email</td>";
            // more cells here as needed
            ship += "</tr>";


            ship += "<tr>";
            ship += "<td class='boldCell'>" + m.shipping.Date + "</td>";
            ship += "<td class='boldCell'>" + m.shipping.FullName + "</td>";
            ship += "<td class='boldCell'>" + m.shipping.Institution + "</td>";
            ship += "<td class='boldCell'>" + m.shipping.ShippingAddress + "</td>";
            ship += "<td class='boldCell'>" + m.shipping.Phone + "</td>";
            ship += "<td class='boldCell'>" + m.shipping.Email + "</td>";
            // more cells here as needed
            ship += "</tr>";
            var olForm = "";
            olForm += "</table><table class='colorful'>";

            olForm += "<tr>";
            olForm += "<td class='boldCell'>Date</td>";
            olForm += "<td class='boldCell'>Full name</td>";
            olForm += "<td class='boldCell'>Institution</td>";
            olForm += "<td class='boldCell'>Shipping Address</td>";
            olForm += "<td class='boldCell'>Phone</td>";
            olForm += "<td class='boldCell'>Email</td>";
            // more cells here as needed
            olForm += "</tr>";

            for (int i = 0; i < m.oligosequence.Count(); i++) {
                olForm += "<tr>";
                olForm += "<td class='boldCell'>" + m.oligosequence[i].PrimerName + "</td>";
                olForm += "<td class='boldCell'>" + m.oligosequence[i].Qty + "</td>";
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
            CreateEmail(m.shipping.Email, "Andersolind@gmail.com", olForm);
            return olForm;
        }
    }
}