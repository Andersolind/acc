using MBBVL.Models;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MBBVL.DbAccess {
    public static class DbAcces {
         public static ApplicationDbContext ApplicationDbContext { get; set; }
         public static UserManager<ApplicationUser> UserManager { get; set; }
    }
}