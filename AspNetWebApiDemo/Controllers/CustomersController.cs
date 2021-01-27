using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AspNetWebApiDemo.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AspNetWebApiDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        // vastaa osoitteessa: /api/customers
        [HttpGet]
        public List<Customers> PalautaKaikki()
        {
            NorthwindContext konteksti = new NorthwindContext();
            List<Customers> kaikki = konteksti.Customers.ToList();

            return kaikki;
        }

        // vastaa osoitteessa: /api/customers/NIMI
        [HttpGet]
        [Route("{customerId}")]
        public List<Customers> PalautaYksittäinen(string customerId)
        {
            NorthwindContext konteksti = new NorthwindContext();
            List<Customers> asiakas = new List<Customers>() { };
            asiakas.Add(konteksti.Customers.Find(customerId));
            return asiakas;
        }

        // vastaa osoitteessa: /api/customers
        [HttpPost]
        public bool LisääUusi(Customers uusi)
        {
            NorthwindContext konteksti = new NorthwindContext();

            konteksti.Customers.Add(uusi);
            konteksti.SaveChanges();

            return true;
        }
    }
}
