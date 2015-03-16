using MBBVL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Web;

namespace MBBVL.Core {
    public class SendEmail {
        public void CreateEmailForUser(string toSender, string fromSender, string body) {
            try {


                //Create the msg object to be sent
                MailMessage msg = new MailMessage();
                //Add your email address to the recipients
                //msg.To.Add("jchen.acgt@gmail.com");
                msg.To.Add("order@acgtcorp.com");
                //Configure the address we are sending the mail from 
                MailAddress address = new MailAddress("info@acgtcorp.com");
              //  msg.Bcc.Add("jchen.acgt@gmail.com");
              //  msg.Bcc.Add("andersolind@gmail.com");
              //  MailAddress addressBCC = new MailAddress("andersolind@hotmail.com");
                msg.From = address;
             //   msg.Bcc.Add(addressBCC);
                msg.Subject = "Order form";
                msg.IsBodyHtml = true;
                msg.Body = body;


                ////Configure an SmtpClient to send the mail.            
                SmtpClient smptc = new SmtpClient("localhost"); // Here SMTP Client object is created
                //   smptc.Host = "smtpout.asia.secureserver.net";// here SMTP interface Address is passed
                smptc.Port = 25;// Use port No 25
                smptc.UseDefaultCredentials = true;
                smptc.EnableSsl = false;
                smptc.DeliveryMethod = SmtpDeliveryMethod.Network;
      
                smptc.Send(msg);

           


            } catch (Exception ex) {
                string er = ex.InnerException.ToString();
            }
        }

        public void CreateEmailForJason(string toSender, string fromSender, string body) {
            try {


                //Create the msg object to be sent
                MailMessage msg = new MailMessage();
                //Add your email address to the recipients
                msg.To.Add("Jchen.acgt@gmail.com");
                //  msg.To.Add("jchen.acgt@gmail.com");
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
            m.PickUp = model.PickUp;
            m.sequencingModel = model.sequencingModel;
            m.customPrimers = model.customPrimers;
            m.DataDeliveryOptions = model.DataDeliveryOptions;


            var dnaForm = "";

            //headers<img src=\"cid:image1\">
          //  var ship = "<table><td align='center' style='padding: 40px 0 30 px 0;'><img src='http://youneedafavor.com/images/logo.png'>";
            var ship = "<table><td>";
            ship += "<h1>Dear" + " " + model.Billing.FullName + " " + "here is your Sequencing order</h1></td></table>";

            if (model.IsShipping) {
                ship += "<table width='100' style='float:left' cellpadding='0 cellspacing='0' border='0 align='center'>";
                ship += "<thead>";
                ship += "<tr>";
                ship += "<th ><h1 style='color:blue;text-decoration: underline;'>Pick Up Information</h1></th>";
                ship += "</tr>";
                ship += "</thead>";
                ship += "<tr>";
                ship += "<td valign='top'>";
                ship += "<label for='fullName'>Full Name</label>";
                ship += "</td>";
                ship += "<td valign='top'>";
                ship += m.PickUp.FullName;
                ship += "</td>";
                ship += "</tr>";
                ship += "<tr>";
                ship += "<td valign='top'>";
                ship += "<label for='fullName'>Institution</label>";
                ship += "</td>";
                ship += "<td valign='top'>";
                ship += m.PickUp.Institution;
                ship += "</td>";
                ship += "</tr>";
                ship += "<tr>";
                ship += "<td valign='top'>";
                ship += "<label for='fullName'>Shipping Address</label>";
                ship += "</td>";
                ship += "<td valign='top'>";
                ship += m.PickUp.ShippingAddress;
                ship += "</td>";
                ship += "</tr>";
                ship += "<tr>";
                ship += "<td valign='top'>";
                ship += "<label for='fullName'>Shipping Phone</label>";
                ship += "</td>";
                ship += "<td valign='top'>";
                ship += m.PickUp.Phone;
                ship += "</td>";
                ship += "</tr>";
                ship += "<tr>";
                ship += "<td valign='top'>";
                ship += "<label for='shippingEmail'>Shipping Email</label>";
                ship += "</td>";
                ship += "<td valign='top'>";
                ship += m.PickUp.Email;
                ship += "</td>";
                ship += "</tr>";
                ship += "</table>";
            }
            //Billing


            var bill = "<table width='100' style='float:left;margin-left:100px;' cellpadding='0 cellspacing='0' border='0 align='center'>";

            bill += "<thead>";
            bill += "<tr>";
            bill += "<th ><h1 style='color:blue;text-decoration: underline;'>Billing Information</h1></th>";
            bill += "</tr>";
            bill += "</thead>";
            bill += "<tr>";
            bill += "<td valign='top'>";
            bill += "<label for='first_name'>Quote</label>";
            bill += "</td>";
            bill += "<td valign='top'>";
            bill += m.Billing.Quotenumber;
            bill += "</td>";
            bill += "</tr>";
            // Full Name 
            bill += "<tr>";
            bill += "<td valign='top'>";
            bill += "<label for='first_name'>Full Name</label>";
            bill += "</td>";
            bill += "<td valign='top'>";
            bill += m.Billing.FullName;
            bill += "</td>";
            bill += "</tr>";
            //Institution
            bill += "<tr>";
            bill += "<td valign='top'>";
            bill += "<label for='first_name'>Institution</label>";
            bill += "</td>";
            bill += "<td valign='top'>";
            bill += m.Billing.Institution;
            bill += "</td>";
            bill += "</tr>";
            //Billing Address
            bill += "<tr>";
            bill += "<td valign='top'>";
            bill += "<label for='first_name'>Billing Address</label>";
            bill += "</td>";
            bill += "<td valign='top'>";
            bill += m.Billing.BillingAddress;
            bill += "</td>";
            bill += "</tr>";
            //Billing Phone 
            bill += "<tr>";
            bill += "<td valign='top'>";
            bill += "<label for='first_name'>Biling Phone</label>";
            bill += "</td>";
            bill += "<td valign='top'>";
            bill += m.Billing.Phone;
            bill += "</td>";
            bill += "</tr>";
            //Billing Email
            bill += "<tr>";
            bill += "<td valign='top'>";
            bill += "<label for='first_name'>Billing Email</label>";
            bill += "</td>";
            bill += "<td valign='top'>";
            bill += m.Billing.Email;
            bill += "</td>";
            bill += "</tr>";
            bill += "<tr>";
            bill += "<td valign='top'>";
            bill += "<label for='first_name'>Notes</label>";
            bill += "</td>";
            bill += "<td valign='top'>";
            bill += m.Billing.Notes;
            bill += "</td>";
            bill += "</tr>";
            bill += "</table>";
            var olForm = "<h1 style='padding-top:400px; color:blue;text-decoration: underline;page-break-before:always;'>Sequencing</h1>"; ;
            olForm += "<table width='100%' style='float:left' cellpadding='0' cellspacing='0'  align='center' border='1'>";

            //olForm += "<thead>";
            //olForm += "<tr>";
            //olForm += "<th>Sequencing</th>";
            //olForm += "</tr>";
            //olForm += "</thead>";
            olForm += "<tr  style='width:100%'>";
            olForm += "<td class='boldCell'>Sample Name</td>";
            olForm += "<td class='boldCell'>Sample Conc</td>";
            olForm += "<td class='boldCell'>Vector Name</td>";
            olForm += "<td class='boldCell'>Length</td>";
            olForm += "<td class='boldCell'>Primer Name</td>";
            olForm += "<td class='boldCell'>Primer Conc</td>";
            olForm += "<td class='boldCell'>GMP3</td>";
            olForm += "<td class='boldCell'>SeqID</td>";
            olForm += "<td class='boldCell'>Template OD</td>";
            olForm += "<td class='boldCell'>Primer OD</td>";
            olForm += "<td class='boldCell'>Repeat</td>";

            // more cells here as needed
            olForm += "</tr>";

            for (int i = 0; i < m.sequencingModel.Count(); i++) {
                olForm += "<tr>";
                olForm += "<td class='boldCell'>" + m.sequencingModel[i].SampleName + "</td>";
                olForm += "<td class='boldCell'>" + m.sequencingModel[i].SampleCon + "</td>";
                olForm += "<td class='boldCell'>" + m.sequencingModel[i].VectorName + "</td>";
                olForm += "<td class='boldCell'>" + m.sequencingModel[i].Length + "</td>";
                olForm += "<td class='boldCell'>" + m.sequencingModel[i].PrimerName + "</td>";
                olForm += "<td class='boldCell'>" + m.sequencingModel[i].PrimerConc + "</td>";
                olForm += "<td class='boldCell'>" + m.sequencingModel[i].GmpValue + "</td>";
                olForm += "<td class='boldCell'> </td>";
                olForm += "<td class='boldCell'> </td>";
                olForm += "<td class='boldCell'> </td>";
                olForm += "<td class='boldCell'> </td>";
                // more cells here as needed
                olForm += "</tr>";
            }
            olForm += "</table>";
            if (model.IsPrimer) {
                dnaForm = "<h1>Custom Primers</h1>"; ;
                dnaForm += "<table style='width:100%'  border='1'>";

                dnaForm += "<tr  style='width:100%'>";
                //   dnaForm += "<td class='boldCell'>Gmp</td>";
                dnaForm += "<td class='boldCell'>Primer Named</td>";
                //  dnaForm += "<td class='boldCell'>Scale Value</td>";
                dnaForm += "<td class='boldCell'>Sequence</td>";
                // more cells here as needed
                dnaForm += "</tr>";


                for (int i = 0; i < m.customPrimers.Count(); i++) {
                    dnaForm += "<tr>";
                    // dnaForm += "<td class='boldCell'>" + m.customPrimers[i].GmpValue + "</td>";
                    dnaForm += "<td class='boldCell'>" + m.customPrimers[i].PrimerName + "</td>";
                    //     dnaForm += "<td class='boldCell'>" + m.customPrimers[i].ScaleValue + "</td>";
                    dnaForm += "<td class='boldCell'>" + m.customPrimers[i].Sequence + "</td>";
                    // more cells here as needed
                    dnaForm += "</tr>";
                }
                dnaForm += "</table>";
            }

            var deliveryOptions = "<h1>Delivery Options</h1>"; ;
            deliveryOptions += "<table style='width:100%' class='panel-title' border='1'>";

            deliveryOptions += "<tr  style='width:100%'>";
            deliveryOptions += "<td class='boldCell'>" + m.DataDeliveryOptions.Name + " </td>";
            // more cells here as needed
            deliveryOptions += "</tr>";



            //deliveryOptions += "<tr>";
            //deliveryOptions += "<td class='boldCell'>" + m.DataDeliveryOptions.Value + "</td>";
            //// more cells here as needed
            //deliveryOptions += "</tr>";

            deliveryOptions += "</table> </body> </html>";

            var template = StaticValues.HtmlHeaderText() + ship + bill + olForm + dnaForm + deliveryOptions;

            CreateEmailForUser(m.Billing.Email, "Andersolind@gmail.com", template);
            //  CreateEmailForJason(m.Billing.Email, "Andersolind@gmail.com", template);
            return olForm;
        }

        public void SendPickUp(SequencingWrapperModel model) {
            SequencingWrapperModel m = new SequencingWrapperModel();
            m.PickUp = model.PickUp;
            var ship = "<table><td>";
            
                ship += "<table width='100' style='float:left' cellpadding='0 cellspacing='0' border='0 align='center'>";
                ship += "<thead>";
                ship += "<tr>";
                ship += "<th ><h1  style='color:blue;text-decoration: underline;'>Pick Up Information</h1</th>";
                ship += "</tr>";
                ship += "</thead>";
                ship += "<tr>";
                ship += "<td valign='top'>";
                ship += "<label for='fullName'>Full Name</label>";
                ship += "</td>";
                ship += "<td valign='top'>";
                ship += m.PickUp.FirstName;
                ship += "</td>";
                ship += "</tr>";
                ship += "<tr>";
                ship += "<td valign='top'>";
                ship += "<label for='fullName'>Last Name</label>";
                ship += "</td>";
                ship += "<td valign='top'>";
                ship += m.PickUp.LastName;
                ship += "</td>";
                ship += "</tr>";
                ship += "<tr>";
                ship += "<td valign='top'>";
                ship += "<label for='fullName'>Institution</label>";
                ship += "</td>";
                ship += "<td valign='top'>";
                ship += m.PickUp.Institution;
                ship += "</td>";
                ship += "</tr>";
                ship += "<tr>";
                ship += "<td valign='top'>";
                ship += "<label for='fullName'>Message</label>";
                ship += "</td>";
                ship += "<td valign='top'>";
                ship += m.PickUp.Message;
                ship += "</td>";
                ship += "</tr>";
                ship += "<tr>";
                ship += "<td valign='top'>";
                ship += "<label for='shippingEmail'>Room</label>";
                ship += "</td>";
                ship += "<td valign='top'>";
                ship += m.PickUp.Room;
                ship += "</td>";
                ship += "</tr>";
                ship += "<tr>";
                ship += "<td valign='top'>";
                ship += "<label for='shippingEmail'>Notes</label>";
                ship += "</td>";
                ship += "<td valign='top'>";
                ship += m.PickUp.Notes;
                ship += "</td>";
                ship += "</tr>";
                ship += "<tr>";
                ship += "<td valign='top'>";
                ship += "<label for='shippingEmail'>Email</label>";
                ship += "</td>";
                ship += "<td valign='top'>";
                ship += m.PickUp.Email;
                ship += "</td>";
                ship += "</tr>";
                ship += "</table>";

                ship += "</table> </body> </html>";

                var template = StaticValues.HtmlHeaderText() + ship;

                CreateEmailForUser(m.PickUp.Email, "Andersolind@gmail.com", template);
            
        }

        public string SetUpbill(WrapperModel model) {
            WrapperModel m = new WrapperModel();

            m.billing = model.billing;
            m.shipping = model.shipping;
            m.oligosequence = model.oligosequence;
            //headers
         //éé éé  var ship = "<table><td align='center' style='padding: 40px 0 30 px 0;'><img src='http://youneedafavor.com/images/logo.png'>";
            var ship = "<table><td>";
            ship += "<h1>Dear" + " " + model.shipping.FullName + " " + "here is Oligonucleotide Order</h1></td></table>";

            ship += "<table width='100' style='float:left' cellpadding='0' cellspacing='0' border='0' >";
            ship += "<thead>";
            ship += "<tr>";
            ship += "<th style='color:blue;text-decoration: underline;'><h1>Shipping Information</h1></th>";
            ship += "</tr>";
            ship += "</thead>";
            ship += "<tr>";
            ship += "<td valign='top'>";
            ship += "<label for='fullName'>Full Name</label>";
            ship += "</td>";
            ship += "<td valign='top'>";
            ship += m.shipping.FullName;
            ship += "</td>";

            ship += "</tr>";
            ship += "<tr>";
            ship += "<td valign='top'>";
            ship += "<label for='fullName'>Institution</label>";
            ship += "</td>";
            ship += "<td valign='top'>";
            ship += m.shipping.Institution;
            ship += "</td>";
            ship += "</tr>";
            ship += "<tr>";
            ship += "<td valign='top'>";
            ship += "<label for='fullName'>Shipping Address</label>";
            ship += "</td>";
            ship += "<td valign='top'>";
            ship += m.shipping.ShippingAddress;
            ship += "</td>";
            ship += "</tr>";
            ship += "<tr>";
            ship += "<td valign='top'>";
            ship += "<label for='fullName'>Shipping Phone</label>";
            ship += "</td>";
            ship += "<td valign='top'>";
            ship += m.shipping.Phone;
            ship += "</td>";
            ship += "</tr>";
            ship += "<tr>";
            ship += "<td valign='top'>";
            ship += "<label for='shippingEmail'>Shipping Email</label>";
            ship += "</td>";
            ship += "<td valign='top'>";
            ship += m.shipping.Email;
            ship += "</td>";
            ship += "</tr>";
            ship += "</table>";

            //Billing


            var bill = "<table width='100' style='float:left' cellpadding='0' cellspacing='0' border='0'>";
            bill += "<thead>";
            bill += "<tr>";
            bill += "<th style='color:blue; text-decoration: underline;'><h1>Billing Information</h1></th>";
            bill += "</tr>";
            bill += "</thead>";
            bill += "<tr>";
            bill += "<td valign='top'>";
            bill += "<label for='first_name'>Quote</label>";
            bill += "</td>";
            bill += "<td valign='top'>";
            bill += m.billing.Quotenumber;
            bill += "</td>";
            bill += "</tr>";
            // Full Name 
            bill += "<tr>";
            bill += "<td valign='top'>";
            bill += "<label for='first_name'>Full Name</label>";
            bill += "</td>";
            bill += "<td valign='top'>";
            bill += m.billing.FullName;
            bill += "</td>";
            bill += "</tr>";
            //Institution
            bill += "<tr>";
            bill += "<td valign='top'>";
            bill += "<label for='first_name'>Institution</label>";
            bill += "</td>";

            bill += "<td valign='top'>";
            bill += m.billing.Institution;
            bill += "</td>";
            bill += "</tr>";
            //Billing Address
            bill += "<tr>";
            bill += "<td valign='top'>";
            bill += "<label for='first_name'>Billing Address</label>";
            bill += "</td>";
            bill += "<td valign='top'>";
            bill += m.billing.BillingAddress;
            bill += "</td>";
            bill += "</tr>";
            //Billing Phone 
            bill += "<tr>";
            bill += "<td valign='top'>";
            bill += "<label for='first_name'>Billing Phone</label>";
            bill += "</td>";
            bill += "<td valign='top'>";
            bill += m.billing.Phone;
            bill += "</td>";
            bill += "</tr>";
            //Billing Email
            bill += "<tr>";
            bill += "<td valign='top'>";
            bill += "<label for='first_name'>Billing Email</label>";
            bill += "</td>";
            bill += "<td valign='top'>";
            bill += m.billing.Email;
            bill += "</td>";

            bill += "<tr>";

            bill += "<td valign='top'>";
            bill += "<label for='first_name'> Notes</label>";
            bill += "</td>";
            bill += "<td valign='top'>";
            bill += m.billing.Notes;
            bill += "</td>";

            bill += "</tr> </table>";


            var olForm = "<div style='padding-top:500px'><h1  style='color:blue;text-decoration: underline;page-break-before:always'>Oligonucleotide Sequence</h1>";
            olForm += "<table style='width:100%' border='1'>";
            olForm += "<tr  style='width:100%'>";
            olForm += "<td class='boldCell'>PrimerName</td>";
            olForm += "<td class='boldCell'>Qty</td>";
            olForm += "<td class='boldCell'>OligonucleotideSequence</td>";
            olForm += "<td class='boldCell'>SynthesisScale1</td>";
            olForm += "<td class='boldCell'>GMP2</td>";
            olForm += "<td class='boldCell'>Modification</td>";
            olForm += "<td class='boldCell'>FinalDeliveryForm</td>";
            olForm += "<td class='boldCell'>Purification</td>";
            olForm += "<td class='boldCell'>Price</td>";
            olForm += "<td class='boldCell'>OligoID</td>";
          
            
            // more cells here as needed
            olForm += "</tr>";

            for (int i = 0; i < m.oligosequence.Count(); i++) {
                olForm += "<tr>";
                olForm += "<td class='boldCell'>" + m.oligosequence[i].PrimerName + "</td>";
                olForm += "<td class='boldCell'>" + m.oligosequence[i].Qty + "</td>";
                olForm += "<td class='boldCell'>" + CreateString(m.oligosequence[i].OligonucleotideSequence) + "</td>";
                olForm += "<td class='boldCell'>" + m.oligosequence[i].SynthesisScaleValue + "</td>";
                olForm += "<td class='boldCell'>" + m.oligosequence[i].GMP2 + "</td>";
                olForm += "<td class='boldCell'>" + m.oligosequence[i].ModificationValues + "</td>";
                olForm += "<td class='boldCell'>" + m.oligosequence[i].FinalDeliveryFormValue + "</td>";
                olForm += "<td class='boldCell'>" + m.oligosequence[i].PurificationValue + "</td>";
                olForm += "<td class='boldCell'>" + m.oligosequence[i].Price + "</td>";
                olForm += "<td class='boldCell'> </td>";
                // more cells here as needed
                olForm += "</tr>";
            }
            olForm += "</table> </div> </body> </html>";
            var template = StaticValues.HtmlHeaderText() + ship + bill + olForm;
            CreateEmailForUser(m.shipping.Email, "Andersolind@gmail.com", template);
            //  CreateEmailForJason(m.shipping.Email, "Andersolind@gmail.com", template);
            return olForm;
        }
        private string CreateString(string original) {
            StringBuilder buffer = new StringBuilder(original.Length * 3 / 2);
            for (int i = 0; i < original.Length; i++) {
                if ((i > 0) & (i % 3 == 0))
                    buffer.Append(" ");
                buffer.Append(original[i]);
            }
            return buffer.ToString();
        }
    }
}