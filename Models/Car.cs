using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WSEI_MURP_v1.Models
{
    public class Car
    {
        public long Id { get; set; }

        public string Model { get; set; }
        public int Load { get; set; }
        public string RegistrationNumber { get; set; }
        public string Status { get; set; }

        //public virtual Company Company {get; set;}

        /*
        public string Category { get; set; }
        public string ShortDescription { get; set; }
        */
    }
}
