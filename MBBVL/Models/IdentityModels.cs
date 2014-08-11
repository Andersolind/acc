using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;

namespace MBBVL.Models
{
    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit http://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    public class ApplicationUser : IdentityUser {

        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int UserId { get; set; }
    }
    public class Shipping {
        [Key]
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int ShippingId { get; set; }
        public DateTime Date { get; set; }
        [Required]
        [Display(Name = "Full Name")]
        public string FullName { get; set; }
        [Display(Name = "Institution")]
        public string Institution { get; set; }
        [Display(Name = "Shipping Address")]
        public string ShippingAddress { get; set; }
        [Display(Name = "Phone")]
        public string Phone { get; set; }
        [Required]
        [Display(Name = "Email")]
        [EmailAddress]
        public string Email { get; set; }
    }

    public class Billing {
        [Key]
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int BillingId { get; set; }
        [Required]
        [Display(Name = "Quote no")]
        public string Quotenumber { get; set; }
        [Required]
        [Display(Name = "Full Name")]
        public string FullName { get; set; }
        [Display(Name = "Institution")]
        public string Institution { get; set; }
        [Display(Name = "Billing Address")]
        public string BillingAddress { get; set; }
        [Display(Name = "Phone")]
        public string Phone { get; set; }
        [EmailAddress]
        [Display(Name = "Email")]
        public string Email { get; set; }

    }
    public class Oligosequence {
        [Key]
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int SequenceId { get; set; }
        [Required]
        [Display(Name = "Primer Name")]
        public string[] PrimerName { get; set; }
        [Display(Name = "QTY")]
        public int[] Qty { get; set; }
        [Display(Name = "Oligonucleotide Sequence")]
        public string OligonucleotideSequence { get; set; }
        [Display(Name = "Synthesis Scale1 (μmole)")]
        public string SynthesisScale1 { get; set; }
        [Display(Name = "GMP2(Y/N)")]
        public bool GMP2 { get; set; }
        [Display(Name = "Modification")]
        public string Modification { get; set; }
        [Display(Name = "Final Delivery")]
        public string FinalDeliveryForm { get; set; }
        [Display(Name = "Purification")]
        public string Purification { get; set; }

    }
    public class OrderForm {
        [Key]
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int ShippingId { get; set; }
        public int OrderFormId { get; set; }
        public int BillingId { get; set; }
    }
    public class WrapperModel {
        public Shipping shipping { get; set; }
        public Billing billing { get; set; }
        public List<Oligosequence> oligosequence { get; set; }
    }

    public class ApplicationDbContext : IdentityDbContext<ApplicationUser> {
        public ApplicationDbContext()
            : base("DefaultConnection") {
        }
        public DbSet<Shipping> Shipping { get; set; }
        public DbSet<Billing> Billing { get; set; }
        public DbSet<Oligosequence> Oligosequence { get; set; }
        public DbSet<OrderForm> OrderForm { get; set; }
    }
}