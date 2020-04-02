using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WSEI_MURP_v1.Models
{
    public class Company
    {
        public long Id { get; set; }

        public string CompanyName { get; set; }
        public string EmailAddress { get; set; }
        public string TIN { get; set; }

        /*
        public string CompanyAddress { get; set; }
        public int CompanyRatingScore { get; set; }
        public int CompanyRatingAmount { get; set; }
        */
    }
}
