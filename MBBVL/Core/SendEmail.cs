using MBBVL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web;

namespace MBBVL.Core {
    public class SendEmail {
        public void CreateEmailForUser(string toSender, string fromSender, string body) {
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

        public void CreateEmailForJason(string toSender, string fromSender, string body) {
            try {


                //Create the msg object to be sent
                MailMessage msg = new MailMessage();
                //Add your email address to the recipients
                msg.To.Add(toSender);
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
            var htmlTemplate = "<html xmlns='http://www.w3.org/1999/xhtml'>";
            htmlTemplate += "<head>";
            htmlTemplate += "<style type='text/css'>";
            /* Client-specific Styles */
            htmlTemplate += "#outlook a {padding:0;}";
            htmlTemplate += "body{width:100% !important; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; margin:0; padding:0;}";
            /* Prevent Webkit and Windows Mobile platforms from changing default font sizes, while not breaking desktop design. */
            htmlTemplate += ".ExternalClass {width:100%;}";
            htmlTemplate += ".ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;}";
            htmlTemplate += "#backgroundTable {margin:0; padding:0; width:100% !important; line-height: 100% !important;}";
            /* End reset */

            /* Some sensible defaults for images
            1. "-ms-interpolation-mode: bicubic" works to help ie properly resize images in IE. (if you are resizing them using the width and height attributes)
            2. "border:none" removes border when linking images.
            3. Updated the common Gmail/Hotmail image display fix: Gmail and Hotmail unwantedly adds in an extra space below images when using non IE browsers. You may not always want all of your images to be block elements. Apply the "image_fix" class to any image you need to fix.

            Bring inline: Yes.
            */
            htmlTemplate += "img {outline:none; text-decoration:none; -ms-interpolation-mode: bicubic;}";
            htmlTemplate += "a img {border:none;}";
            htmlTemplate += ".image_fix {display:block;}";

            /** Yahoo paragraph fix: removes the proper spacing or the paragraph (p) tag. To correct we set the top/bottom margin to 1em in the head of the document. Simple fix with little effect on other styling. NOTE: It is also common to use two breaks instead of the paragraph tag but I think this way is cleaner and more semantic. NOTE: This example recommends 1em. More info on setting web defaults: http://www.w3.org/TR/CSS21/sample.html or http://meiert.com/en/blog/20070922/user-agent-style-sheets/

            Bring inline: Yes.
            **/
            htmlTemplate += "p {margin: 1em 0;}";

            /** Hotmail header color reset: Hotmail replaces your header color styles with a green color on H2, H3, H4, H5, and H6 tags. In this example, the color is reset to black for a non-linked header, blue for a linked header, red for an active header (limited support), and purple for a visited header (limited support).  Replace with your choice of color. The !important is really what is overriding Hotmail's styling. Hotmail also sets the H1 and H2 tags to the same size.

            Bring inline: Yes.
            **/
            htmlTemplate += "	h1, h2, h3, h4, h5, h6 {color: black !important;}";

            htmlTemplate += "	h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {color: blue !important;}";

            htmlTemplate += "	h1 a:active, h2 a:active,  h3 a:active, h4 a:active, h5 a:active, h6 a:active { color: red !important;}";

            htmlTemplate += "h1 a:visited, h2 a:visited,  h3 a:visited, h4 a:visited, h5 a:visited, h6 a:visited { color: purple !important;}";

            /** Outlook 07, 10 Padding issue: These "newer" versions of Outlook add some padding around table cells potentially throwing off your perfectly pixeled table.  The issue can cause added space and also throw off borders completely.  Use this fix in your header or inline to safely fix your table woes.

            More info: http://www.ianhoar.com/2008/04/29/outlook-2007-borders-and-1px-padding-on-table-cells/
            http://www.campaignmonitor.com/blog/post/3392/1px-borders-padding-on-table-cells-in-outlook-07/

            H/T @edmelly

            Bring inline: No.
            **/
            htmlTemplate += "	table td {border-collapse: collapse;}";

            /** Remove spacing around Outlook 07, 10 tables

            More info : http://www.campaignmonitor.com/blog/post/3694/removing-spacing-from-around-tables-in-outlook-2007-and-2010/

            Bring inline: Yes
            **/
            htmlTemplate += "table { border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; }";

            /* Styling your links has become much simpler with the new Yahoo.  In fact, it falls in line with the main credo of styling in email, bring your styles inline.  Your link colors will be uniform across clients when brought inline.

            Bring inline: Yes. */
            htmlTemplate += "	a {color: orange;} ";

            /* Or to go the gold star route...
            a:link { color: orange; }
            a:visited { color: blue; }
            a:hover { color: green; }
            */

            /***************************************************
            ****************************************************
            MOBILE TARGETING

            Use @media queries with care.  You should not bring these styles inline -- so it's recommended to apply them AFTER you bring the other stlying inline.

            Note: test carefully with Yahoo.
            Note 2: Don't bring anything below this line inline.
            ****************************************************
            ***************************************************/

            /* NOTE: To properly use @media queries and play nice with yahoo mail, use attribute selectors in place of class, id declarations.
            table[class=classname]
            Read more: http://www.campaignmonitor.com/blog/post/3457/media-query-issues-in-yahoo-mail-mobile-email/
            */



            htmlTemplate += "</style> ";


            htmlTemplate += "</head>";
            htmlTemplate += "<body>";

            var dnaForm = "";

            //headers<img src=\"cid:image1\">
            var ship = "<table><td align='center' style='padding: 40px 0 30 px 0;'><img src='http://youneedafavor.com/images/logo.png'>";
            ship += "<h1>Dear" + " " + model.Billing.FullName + " " + "here is your Order</h1></td></table>";

            if (model.IsShipping) {
                ship += "<table width='100%' style='float:left'>";
                ship += "<thead>";
                ship += "<tr>";
                ship += "<th>Pick up Information</th>";
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


            var bill = "<table width='100%' style='float:left;padding-bottom:100px;'>";
            bill += "<thead>";
            bill += "<tr>";
            bill += "<th>Billing Information</th>";
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
            bill += "</td.";
            bill += "</tr>";
            //Billing Email
            bill += "<tr>";
            bill += "<td valign='top'>";
            bill += "<label for='first_name'>Billing Email</label>";
            bill += "</td>";
            bill += "<td valign='top'>";
            bill += m.Billing.Email;
            bill += "</td.";
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
            var olForm = "<h1 style='padding-top:300px'>Sequencing</h1>"; ;
            olForm += "<table style='width:100%' class='panel-title'  border='1'>";
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

            var template = htmlTemplate + ship + bill + olForm + dnaForm + deliveryOptions;

            CreateEmailForUser(m.Billing.Email, "Andersolind@gmail.com", template);
            //  CreateEmailForJason(m.Billing.Email, "Andersolind@gmail.com", template);
            return olForm;
        }

        public string SetUpbill(WrapperModel model) {
            WrapperModel m = new WrapperModel();

            m.billing = model.billing;
            m.shipping = model.shipping;
            m.oligosequence = model.oligosequence;
            //headers
            var ship = "<img src='http://youneedafavor.com/images/logo.png'>";
            ship += "<h1>Dear" + " " + model.shipping.FullName + " " + "Here is your Order</h1>";
            ship += "<div style='width:100%;padding-bottom:300px;'>";
            ship += "<table style='float:left'>";
            ship += "<thead>";
            ship += "<tr>";
            ship += "<th style='color:blue'>Shipping Information</th>";
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


            var bill = "<table  style='float:left'>";
            bill += "<thead>";
            bill += "<tr>";
            bill += "<th>Billing Information</th>";
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
            bill += "</tr>";
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
            bill += "</td.";
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
            bill += "</div>";

            var olForm = "<div><h1>Oligonucleotide Sequence</h1></div>";
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
            // more cells here as needed
            olForm += "</tr>";

            for (int i = 0; i < m.oligosequence.Count(); i++) {
                olForm += "<tr>";
                olForm += "<td class='boldCell'>" + m.oligosequence[i].PrimerName + "</td>";
                olForm += "<td class='boldCell'>" + m.oligosequence[i].Qty + "</td>";
                olForm += "<td class='boldCell'>" + m.oligosequence[i].OligonucleotideSequence + "</td>";
                olForm += "<td class='boldCell'>" + m.oligosequence[i].SynthesisScaleValue + "</td>";
                olForm += "<td class='boldCell'>" + m.oligosequence[i].GMP2 + "</td>";
                olForm += "<td class='boldCell'>" + m.oligosequence[i].Modification + "</td>";
                olForm += "<td class='boldCell'>" + m.oligosequence[i].FinalDeliveryFormValue + "</td>";
                olForm += "<td class='boldCell'>" + m.oligosequence[i].PurificationValue + "</td>";
                // more cells here as needed
                olForm += "</tr>";
            }
            olForm += "</table>";
            var template = ship + bill + olForm;
            CreateEmailForUser(m.shipping.Email, "Andersolind@gmail.com", template);
            //  CreateEmailForJason(m.shipping.Email, "Andersolind@gmail.com", template);
            return olForm;
        }
    }
}