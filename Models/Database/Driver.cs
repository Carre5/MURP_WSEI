using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WSEI_MURP_v1.Models
{
    public class Driver : DriverViewModel
    {
        public long Id { get; set; }
        public string Surname { get; set; }
        public string EmailAddress { get; set; }
        public decimal PricePerHour { get; set; }
        public decimal PriceForHire { get; set; }
        public string PhoneNumber { get; set; }
        public long CompanyID { get; set; }
    }

    public class DriverViewModel
    {
        public string Name { get; set; }
        public string Licences { get; set; }
        public DateTime ProfDriverSince { get; set; }
        public string City { get; set; }
        public string ImgURL { get; set; }
        public string CompanyName { get; set; }
        public int Status { get; set; }
    }
}
