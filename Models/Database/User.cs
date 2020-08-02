using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WSEI_MURP_v1.Models
{
    public class User : UserViewModel
    {
        public long Id { get; set; }
        public bool IsCompany { get; set; }
    }

    public class UserViewModel
    {
        public string Name { get; set; }
        public string EmailAddress { get; set; }
        public bool IsVIP { get; set; }
    }
}
