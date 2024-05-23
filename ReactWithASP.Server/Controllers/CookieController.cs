using Microsoft.AspNetCore.Mvc;

namespace ReactWithASP.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CookieController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Crunchy", "Chocolate", "Oatmeal", "Soft", "Sweet", "Warm"
        };

        private readonly ILogger<CookieController> _logger;

        public CookieController(ILogger<CookieController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetCookie")]

        public IEnumerable<Cookie> Get()
        {
            List<Cookie> cookies = new List<Cookie>();

        //    cookies.Add(new Cookie() { Desc = "test", Id = Guid.NewGuid().ToString(),Name = "Chocolate Chip", Price=2.99});
            cookies.Add(new Cookie() { Desc = "test", Id = "5", Name = "Chocolate Chip", Price = 2.99 });
            return cookies;
            //return Enumerable.Range(1, 5).Select(index => new Cookie
            //{
            //    //Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            //    Id = new Guid(),
            //    Name = Summaries[0]
            //})
            //.ToArray();
        }
    }
}
