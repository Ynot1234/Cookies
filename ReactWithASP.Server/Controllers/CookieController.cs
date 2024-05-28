using Microsoft.AspNetCore.Mvc;

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


        [HttpGet(Name = "SubmittedData")]
        public IEnumerable<Cookie> SubmittedData([FromForm] string Name)

        {
         //   var x = Desc;
            IEnumerable<Cookie> retval = Tools.Load();


            Cookie SubmittedCookie = new Cookie
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(retval.Count() + 1)),
                Id = new Guid(),
                Name = "Lime",
                Desc = "Yuck",
                Price = 2.99
            };

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
