using Microsoft.AspNetCore.Mvc;
using ReactWithASP.Server.Models;

namespace ReactWithASP.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CookieController : ControllerBase
    {
        private readonly ILogger<CookieController> _logger;
        private readonly ICookieRepository _cookieRepository;

        public CookieController(ILogger<CookieController> logger, ICookieRepository cookieRepository)
        {
            _logger = logger;
            _cookieRepository = cookieRepository;
        }


        [HttpPost(Name = "")]
        public IEnumerable<Cookie> PostCookie([FromBody] Cookie data)

        {
            IEnumerable<Cookie> retval = Tools.Load();


            Cookie SubmittedCookie = new Cookie
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(retval.Count() + 1)),
                Id = 6,
                name = data.name,
                desc = data.desc,
                Price = 2.99
            };

           return retval.Append(SubmittedCookie).ToArray();
        }


        //currently using DI
        [HttpGet(Name = "GetCookie")]
        public IEnumerable<Cookie> Get()
        {
            IEnumerable<Cookie> retval = _cookieRepository.AllCookies;
            return retval;
        }
    }
}
