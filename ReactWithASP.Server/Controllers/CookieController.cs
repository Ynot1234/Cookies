using Microsoft.AspNetCore.Components.Server;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using System.Text.Json.Nodes;

namespace ReactWithASP.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CookieController : ControllerBase
    {
        private readonly ILogger<CookieController> _logger;

        public CookieController(ILogger<CookieController> logger)
        {
            _logger = logger;
        }


        [HttpPost(Name = "")]
        public IEnumerable<Cookie> Post([FromBody] Cookie data)

        {
            IEnumerable<Cookie> retval = Tools.Load();


            Cookie SubmittedCookie = new Cookie
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(retval.Count() + 1)),
                Id = new Guid(),
                name = data.name,
                desc = data.desc,
                Price = 2.99
            };

        //    retval = retval.Append(SubmittedCookie);
        //    retval = retval.ToArray();
        //    return retval;

           return retval.Append(SubmittedCookie).ToArray();
        }


        [HttpGet(Name = "GetCookie")]

        public IEnumerable<Cookie> Get()
        {
            IEnumerable<Cookie> retval = Tools.Load();
            return retval;
        }
    }
}
