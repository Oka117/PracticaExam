using AOWebApp.Data;
using AOWebApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using NuGet.Protocol;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace AOWebApp.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class WebAPIController : ControllerBase
    {
        private readonly AmazonDbContext _context;

        public WebAPIController(AmazonDbContext context)
        {
            _context = context;
        }

  
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Item>>> GetItems(int? categoryID)
        {
            if (categoryID == null)
            {
                return await _context.Items.ToListAsync();
            }
            else
            {
                return await _context.Items.Where(i => i.CategoryId == categoryID ||
                i.Category.ParentCategoryId == categoryID).ToListAsync();
            }
        }


        [HttpGet]
        public async Task<string> GetCategories()
        {
            return _context.ItemCategories.Distinct().ToJson();
        }

        public async Task<ActionResult<IEnumerable<Item>>> GetItemsBetweenPriceRange(decimal minPrice, decimal maxPrice)
        {
            var items = _context.Items.Where(p => p.ItemCost >= minPrice && p.ItemCost <= maxPrice);
            return await items.ToListAsync();
        }

        public async Task<ActionResult<String>> D3GraphFetch(){

            var results = _context.Items.OrderBy(i => i.ItemCost).AsEnumerable();
            var results2 = results.Select((d, i) => new { Item = d, Index = i });
            var deciles = results2.Count() / 10.0;

            var groupedByDecile = results2
               .GroupBy(i => (int)Math.Floor(i.Index / deciles))
               .Select(g => new
               {
                   Decile = g.Key + 1,
                   AverageCost = g.Average(i => i.Item.ItemCost)
       });

            return groupedByDecile.ToJson();

        }

        public async Task<ActionResult<String>> Test()
        {
            return "It Works".ToJson();
        }

        // GET: api/API/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Item>> GetItem(int id)
        {
            var item = await _context.Items.FindAsync(id);

            if (item == null)
            {
                return NotFound();
            }

            return item;
        }

    }
}
