using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WSEI_MURP_v1.Models
{
    public class Car : CarViewModel
    {
        public long Id { get; set; }
        public string RegistrationNumber { get; set; }
        public int Status { get; set; }
        public string CompanyEmail { get; set; }
        public long CompanyID { get; set; }
    }

    public class CarViewModel
    {
        public string Model { get; set; }
        public double Load { get; set; }
        public double CurrentLoad { get; set; }
        public string CompanyName { get; set; }
    }
}
