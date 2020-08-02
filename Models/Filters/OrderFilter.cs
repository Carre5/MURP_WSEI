using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WSEI_MURP_v1.Models.Filters
{
    public class OrderFilter : PublicOrderFilter
    {
        public long CarID { get; set; }
        public long DriverID { get; set; }
        public long Status { get; set; }
        public bool DriverRequired { get; set; }
    }

    public class PublicOrderFilter
    {
        public string Location { get; set; }
        public double PriceMin { get; set; }
        public double PriceMax { get; set; }
    }
}
