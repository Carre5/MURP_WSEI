using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WSEI_MURP_v1.Models
{
    public class Order
    {
        public long Id { get; set; }

        public string OrderID { get; set; }
        public DateTime CreationDate { get; set; }
        public string CarRegistrationNumber { get; set; }
        public string Status { get; set; }
        public string Description { get; set; }
        public string Price { get; set; }

        //public virtual Car Car { get; set; }
        //public virtual Company Company { get; set; }

        /*
        public string Localization { get; set; }
        public DateTime DateStart { get; set; }
        public DateTime DateEnd { get; set; }
        public bool DriverRequired { get; set; }
        public int UserRating { get; set; }
        public string UserEmail { get; set; }
        */
    }
}
