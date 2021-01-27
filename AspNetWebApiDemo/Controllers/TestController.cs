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
    public class TestController : ControllerBase
    {
        [HttpGet]
        [Route("omatesti")]
        public Asiakas PalautaYksittäinenAsiakas()
        {
            return new Asiakas()
            {
                AsiakasId = 1001,
                Nimi = "Matti Möttönen",
                Puhelinnumero = "09 123 4567"
            };
        }

        [HttpPost]
        [Route("toinentesti")]
        public string PostTesti()
        {
            return "Moi, olen POST-kutsun vastaus.";
        }
    }
}
