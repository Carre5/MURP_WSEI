using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Security.Policy;
using System.Threading.Tasks;

namespace WSEI_MURP_v1.Models
{
    public class Order : OrderViewModel
    {

        public long Id { get; set; }
        public DateTime CreationDate { get; set; }

        #region CompanyDependent
        public long CompanyID { get; set; }
        //public Company Company { get; set; }
        public long CarID { get; set; }
        public string CarRegistrationNumber { get; set; }
        //public Car Car { get; set; }
        #endregion

        #region Pricing
        public decimal PriceMin { get; set; }
        public decimal EndPrice { get; set; }
        public decimal PriceMax { get; set; }
        public DateTime? StartTiming { get; set; }
        public DateTime? EndTiming { get; set; }
        public bool WasStartedTiming { get; set; }
        public double KilometersTaken { get; set; }
        public int Priority { get; set; }
        #endregion

        #region UserDependent
        public bool DriverRequired { get; set; }
        public long UserRatingID { get; set; }
        //public UserRating UserRating { get; set; }
        #endregion
    }

    public class OrderViewModel
    {
        public int Status { get; set; }
        public string CompanyName { get; set; }
        public string CarModel { get; set; }

        #region InitialData
        public string OrderID { get; set; }
        public DateTime DateStart { get; set; }
        public DateTime DateEnd { get; set; }
        public string Location { get; set; }
        public string Description { get; set; }
        #endregion
    }
}
