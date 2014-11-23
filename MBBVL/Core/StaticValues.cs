﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.WebPages.Html;

namespace MBBVL.Core {
    public class StaticValues {
        public static Dictionary<string, int> SynthesisD {
            get {
                Dictionary<string, int> synthesisD = new Dictionary<string, int>();
                synthesisD.Add("0.02", 1);
                synthesisD.Add("0,04", 2);
                synthesisD.Add("0.2", 3);
                synthesisD.Add("1", 4);
                return synthesisD;
            }
        }

        public static List<SelectListItem> Synthesis {
            get {
                List<SelectListItem> items = new List<SelectListItem>();
                items.Add(new SelectListItem { Text = "--Select--", Value = "0" });
                items.Add(new SelectListItem { Text = "0.02", Value = "1" });
                items.Add(new SelectListItem { Text = "0.04", Value = "2" });
                items.Add(new SelectListItem { Text = "0.2", Value = "3" });
                items.Add(new SelectListItem { Text = "1", Value = "4" });
                return items;
            }

        }
        public static List<SelectListItem> FinalDelivery {
            get {
                List<SelectListItem> items = new List<SelectListItem>();
                items.Add(new SelectListItem { Text = "--Select--", Value = "0" });
                items.Add(new SelectListItem { Text = "Liquid", Value = "1" });
                items.Add(new SelectListItem { Text = "Dry", Value = "2" });
                return items;
            }
        }
        public static List<SelectListItem> Purification {
            get {
                List<SelectListItem> items = new List<SelectListItem>();
                items.Add(new SelectListItem { Text = "--Select--", Value = "0" });
                items.Add(new SelectListItem { Text = "Desalted", Value = "1" });
                items.Add(new SelectListItem { Text = "RP-Cartridge", Value = "2" });
                items.Add(new SelectListItem { Text = "PAGE", Value = "3" });
                items.Add(new SelectListItem { Text = "HPLC", Value = "4" });
                return items;
            }
        }

        public static List<SelectListItem> GMP3 {
            get {
                List<SelectListItem> items = new List<SelectListItem>();
                items.Add(new SelectListItem { Text = "--Select--", Value = "0" });
                items.Add(new SelectListItem { Text = "Yes", Value = "Yes" });
                items.Add(new SelectListItem { Text = "No", Value = "No" });
                return items;
            }
        }

        public static string HtmlHeaderText() {
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
            return htmlTemplate;
        }


    }
}