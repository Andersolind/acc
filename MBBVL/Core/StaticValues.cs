using System;
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

    }
}