using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MBBVL.HelperClass {
    public static class CheckNulls {

        public static string IsNotNull(string dataDeliveryOptions) {
            string isYes = "No";
            isYes = dataDeliveryOptions != null ? isYes = "Yes" : isYes = "No";
            return isYes;
        }
    }
}