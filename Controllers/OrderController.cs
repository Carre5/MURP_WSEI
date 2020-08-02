using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using System.Xml;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using WSEI_MURP_v1.Models;
using WSEI_MURP_v1.Models.DataContext;
using WSEI_MURP_v1.Models.Filters;

namespace WSEI_MURP_v1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly DataContext _context;

        public OrderController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Order
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrders()
        {
            _context.SaveChanges();
            return await _context.Orders.ToListAsync();
        }

        // GET: api/Order/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetOrder(long id)
        {
            var order = await _context.Orders.FindAsync(id);

            if (order == null)
            {
                return NotFound();
            }

            return order;
        }

        [HttpPost("/find")]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrder(OrderFilter filter)
        {
            return _context.Orders.Where(
                x => x.Location == filter.Location || 
                x.Status == filter.Status ||
                (double) x.PriceMin >= (double) filter.PriceMin ||
                (double) x.PriceMax <= (double) filter.PriceMax ||
                x.DriverRequired == filter.DriverRequired
                ).ToList();
        }

        // PUT: api/Order/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrder(long id, Order order)
        {
            if (id != order.Id)
            {
                return BadRequest();
            }

            _context.Entry(order).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Order
        [HttpPost]
        public async Task<ActionResult<Order>> PostOrder(Order order)
        {
            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOrder", new { id = order.Id }, order);
        }

        // DELETE: api/Order/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Order>> DeleteOrder(long id)
        {
            var order = await _context.Orders.FindAsync(id);
            if (order == null)
            {
                return NotFound();
            }

            _context.Orders.Remove(order);
            await _context.SaveChangesAsync();

            return order;
        }
        private bool OrderExists(long id)
        {
            return _context.Orders.Any(e => e.Id == id);
        }

        [HttpGet("[action]/{id}")]
        public async Task<ActionResult<decimal>> orderPricing(long id)
        {
            var order = await _context.Orders.FindAsync(id);

            //OrderStatus.Resolved
            if (order.Status != (int) GSS.OrderStatus.Resolved || order.WasStartedTiming == false)
            {
                return BadRequest();
            }

            TimeSpan orderTime = (TimeSpan)(order.EndTiming - order.StartTiming);
            decimal totalPrice = order.EndPrice - orderTime.Hours;

            return totalPrice;
        }

        [HttpPost("[action]/{id}")]
        public async Task<ActionResult<OrderViewModel>> toggleTiming(long id)
        {
            var order = await _context.Orders.FindAsync(id);

            if (new[] { (int)GSS.OrderStatus.Resolved, (int)GSS.OrderStatus.PendingPricing }.Contains(order.Status))
                {
                if (!order.WasStartedTiming)
                {
                    order.StartTiming = DateTime.Now;
                    order.WasStartedTiming = true;
                    await _context.SaveChangesAsync();
                    return order;
                }
                else if (order.WasStartedTiming && order.Status != (int)GSS.OrderStatus.PendingPricing)
                {
                    order.EndTiming = DateTime.Now;
                    order.Status = (int)GSS.OrderStatus.PendingPricing;
                    await _context.SaveChangesAsync();
                    return order;
                }
                else
                {
                    return null;
                }
            }
            else
            {
                return BadRequest();
            }

            
        }

        [HttpGet("[action]/{name}")]
        public async Task<string> getPolandCities(string name = null)
        {
            XmlDocument doc = new XmlDocument();
            try
            {
                doc.Load("./Resources/Data/Polish_Cities.xml");
                XmlNode root = doc.LastChild;

                List<string> citiesList = new List<string>();

                if (root.HasChildNodes)
                {
                    foreach (XmlNode node in root.ChildNodes[0].ChildNodes)
                    {
                        citiesList.Add(node.ChildNodes[6].InnerText);
                    }
                }

                citiesList = citiesList.Distinct().ToList();
                if(name != null)
                {
                    citiesList = citiesList.Where(x => x.StartsWith(name)).ToList();
                }
                citiesList.Sort();

                return JsonConvert.SerializeObject(citiesList);
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }
    }
}
