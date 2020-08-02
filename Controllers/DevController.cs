using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WSEI_MURP_v1.Models;
using WSEI_MURP_v1.Models.DataContext;

namespace WSEI_MURP_v1.Controllers
{
    [Route("api/[controller]")]
    public class DevController : Controller
    {
        private readonly DataContext _context;

        public DevController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("[action]")]
        public async Task<ActionResult<IEnumerable<Order>>> AddOrderRecords()
        {
            foreach (Order o in DataFixtures.Orders)
            {
                _context.Orders.Add(o);
            }

            return await _context.Orders.ToListAsync();
        }

        [HttpGet("[action]/{id}")]
        public async Task<ActionResult<IEnumerable<Car>>> AddCarRecords()
        {
            foreach (Car o in DataFixtures.Cars)
            {
                _context.Cars.Add(o);
            }

            return await _context.Cars.ToListAsync();
        }

        [HttpGet("[action]/{id}")]
        public async Task<ActionResult<IEnumerable<Company>>> AddCompanyRecords()
        {
            foreach (Company o in DataFixtures.Companies)
            {
                _context.Companies.Add(o);
            }

            return await _context.Companies.ToListAsync();
        }

        [HttpGet("[action]")]
        public async Task<ActionResult<IEnumerable<Order>>> AddDatabaseRecords()
        {
            await AddCompanyRecords();
            await AddCarRecords();
            await AddOrderRecords();

           await _context.SaveChangesAsync();

            return await _context.Orders.ToListAsync();
        }
    }

    public static class DataFixtures
    {
        public static List<Company> Companies = new List<Company>()
        {
            new Company()
            {
                CompanyName = "TransMar",
                EmailAddress = "kontakt@transmar.pl",
                TIN = "12345678901"
            },
            new Company()
            {
                CompanyName = "MarPyj",
                EmailAddress = "kontakt@marpyj.pl",
                TIN = "10987654321"
            },
            new Company()
            {
                CompanyName = "MaroPyjo",
                EmailAddress = "kontakt@maropyjo.pl",
                TIN = "56735742321"
            },
            
            new Company()
            {
                CompanyName = "TransBud",
                EmailAddress = "kontakt@transbud.pl",
                TIN = "56749236791"
            },
            new Company()
            {
                CompanyName = "Terefere",
                EmailAddress = "kontakt@terefere.pl",
                TIN = "97428549275"
            },
            new Company()
            {
                CompanyName = "UNTZ UNTZ",
                EmailAddress = "kontakt@untzuntz.pl",
                TIN = "08154836782"
            },
            new Company()
            {
                CompanyName = "WrumWrum",
                EmailAddress = "kontakt@wrumwrum.pl",
                TIN = "92364829502"
            },
            new Company()
            {
                CompanyName = "EEEEAAAA",
                EmailAddress = "kontakt@eeeeaaaa.pl",
                TIN = "92556374654"
            },
            new Company()
            {
                CompanyName = "IOExpress",
                EmailAddress = "kontakt@ioexpress.pl",
                TIN = "55644477928"
            },
            new Company()
            {
                CompanyName = "Poloniax",
                EmailAddress = "kontakt@poloniax.pl",
                TIN = "44453879175"
            },
            new Company()
            {
                CompanyName = "Marubudex",
                EmailAddress = "kontakt@marubudex.pl",
                TIN = "97593847395"
            },
            new Company()
            {
                CompanyName = "OOOAAT",
                EmailAddress = "kontakt@oooaat.pl",
                TIN = "06583956767"
            }
        };

        public static List<Car> Cars = new List<Car>()
        {
            new Car()
            {
                Load = 500,
                Model = "Fiat Doblo",
                CompanyEmail = "kontakt@transmar.pl",
                RegistrationNumber = "DW 056V5",
                Status = (int) GSS.CarStatus.OpenOccupied
            },
            new Car()
            {
                Load = 300,
                Model = "Renault Master III",
                CompanyEmail = "kontakt@transmar.pl",
                RegistrationNumber = "DW VODKA",
                Status = (int) GSS.CarStatus.OpenReady
            },
            new Car()
            {
                Load = 1000,
                Model = "Volswagen Transporter",
                CompanyEmail = "kontakt@marpyj.pl",
                RegistrationNumber = "KR 08C45",
                Status = (int) GSS.CarStatus.PendingRepair
            },
            new Car()
            {
                Load = 1000,
                Model = "Volswagen Transporter",
                CompanyEmail = "kontakt@marpyj.pl",
                RegistrationNumber = "KR 06FCQ",
                Status = (int) GSS.CarStatus.OpenReady
            },
            new Car()
            {
                Load = 900,
                Model = "Renault Master III",
                CompanyEmail = "kontakt@maropyjo.pl",
                RegistrationNumber = "KR 896GR",
                Status = (int) GSS.CarStatus.OpenOccupied
            }
        };

        public static List<Order> Orders = new List<Order>()
        {
            new Order()
            {
                OrderID = "ORD/2019/06/20/01",
                CompanyID = 10001,
                CarID = 20001,
                CarRegistrationNumber = "KR 896GR",
                PriceMin = 2.56m,
                PriceMax = 3.56m,
                DriverRequired = false,
                Location = "Pcim",
                DateStart = DateTime.Parse("07/07/2019"),
                DateEnd = DateTime.Parse("14/07/2019"),
                CreationDate = DateTime.Parse("20/06/2019"),
                Status = (int) GSS.OrderStatus.New,
                WasStartedTiming = false,
                Description = "Dupa cycki ( ͡° ͜ʖ ͡°)!"
            },
            new Order()
            {
                OrderID = "ORD/2020/06/10/01",
                CompanyID = 10001,
                CarID = 20001,
                CarRegistrationNumber = "KR 896GR",
                PriceMin = 2.56m,
                PriceMax = 3.56m,
                StartTiming = DateTime.Parse("07/07/2019"),
                EndTiming = DateTime.Parse("07/07/2019"),
                DriverRequired = false,
                Location = "Kraków",
                DateStart = DateTime.Parse("07/07/2019"),
                DateEnd = DateTime.Parse("14/07/2019"),
                CreationDate = DateTime.Parse("20/06/2019"),
                Status = (int) GSS.OrderStatus.New,
                WasStartedTiming = true,
                Description = "DZIAŁAJ!!!"
            }
        //    new Order()
        //{
        //    CompanyID = 1234567,
        //        PriceMin = "2.56",
        //        Location = "Wrocław",
        //        DateStart = DateTime.Parse("26/05/2020"),
        //        DateEnd = DateTime.Parse("06/06/2020"),
        //        CreationDate = DateTime.Parse("21/05/2020"),
        //        CarRegistrationNumber = "DW 056V5",
        //        Status = "IN PROGRESS",
        //        Description = "Najtaniej we Wrocławiu"
        //    },
        //    new Order()
        //{
        //    CompanyID = 1234567,
        //        PriceMin = "2.56",
        //        Location = "Kraków",
        //        DateStart = DateTime.Parse("19/08/2020"),
        //        DateEnd = DateTime.Parse("19/09/2020"),
        //        CreationDate = DateTime.Parse("15/07/2020"),
        //        CarRegistrationNumber = "KR 06FCQ",
        //        Status = "NEW",
        //        Description = "Najszybszy w mieście"
        //    },
        //    new Order()
        //{
        //    CompanyID = 1234567,
        //        PriceMin = "2.56",
        //        Location = "Wrocław",
        //        DateStart = DateTime.Parse("23/05/2020"),
        //        DateEnd = DateTime.Parse("07/06/2020"),
        //        CreationDate = DateTime.Parse("21/04/2020"),
        //        CarRegistrationNumber = "DW VODKA",
        //        Status = "NEW",
        //        Description = "Najbardziej imprezowy wóz pod słońcem"
        //    },
        //    new Order()
        //{
        //    CompanyID = 1234567,
        //        PriceMin = "2.56",
        //        Location = "Wrocław",
        //        DateStart = DateTime.Parse("15/06/2020"),
        //        DateEnd = DateTime.Parse("30/06/2020"),
        //        CreationDate = DateTime.Parse("20/05/2019"),
        //        CarRegistrationNumber = "DW 056V5",
        //        Status = "ONHOLD",
        //        Description = "Najwygodniejsza bryka"
        //    },
        //    new Order()
        //{
        //    CompanyID = 1234567,
        //        PriceMin = "2.56",
        //        Location = "Wrocław",
        //        DateStart = DateTime.Parse("28/08/2020"),
        //        DateEnd = DateTime.Parse("30/08/2020"),
        //        CreationDate = DateTime.Parse("21/07/2020"),
        //        CarRegistrationNumber = "DW 056V5",
        //        Status = "ONHOLD",
        //        Description = "Najtaniej we Wrocławiu"
        //    }
    };
    }
}