using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WSEI_MURP_v1.Models;
using WSEI_MURP_v1.Models.DataContext;

namespace WSEI_MURP_v1.Controllers
{
    [Route("api/[controller]")]
    public class OrdersController : Controller
    {
        private readonly DataContext DB;

        public OrdersController(DataContext db)
        {
            DB = db;
        }

        [HttpGet("[action]")]
        public string Index()
        {
            return "AAA";
        }
    }
}