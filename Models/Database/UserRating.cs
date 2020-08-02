using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WSEI_MURP_v1.Models
{
    public class UserRating : UserRatingViewModel
    {
        public long Id { get; set; }
        public long CarID { get; set; }
        public long CompanyID { get; set; }
        public long UserID { get; set; }
        //public Car Car { get; set; }
        //public Company Company { get; set; }
        //public User User { get; set; }
    }

    public class UserRatingViewModel
    {
        public int Rating { get; set; }
        public string Comment { get; set; }
        public DateTime CreationDate { get; set; }
        public string UserName { get; set; }
    }
}
