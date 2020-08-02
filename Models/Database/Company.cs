using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WSEI_MURP_v1.Models
{
    public class Company : CompanyViewModel
    {
        public long Id { get; set; }
        public string TIN { get; set; }
        public string UserID { get; set; }
        //public User User { get; set; }
        public double PriceMargin { get; set; }
    }

    public class CompanyViewModel
    {
        public string CompanyName { get; set; }
        public string EmailAddress { get; set; }
        public string Location { get; set; }
    }
}
