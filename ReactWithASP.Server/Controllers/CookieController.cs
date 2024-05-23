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

            //    cookies.Add(new Cookie() { Desc = "test", Id = Guid.NewGuid().ToString(),Name = "Chocolate Chip", iPrice=2.99});
            //  cookies.Add(new Cookie() { Ix2booger = "5",  Desc = "test",  Name = "Oatmeal", iPrice = 4.00 });
            //   return cookies;

            //  return Enumerable.Range(1, 1).Select(index => new Cookie { Id = new Guid(), Desc = "test", Name = "Chocolate Chip", Price = 2.99 });

            return Enumerable.Range(1, 5).Select(index => new Cookie
            {
                //Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                Id = new Guid(),
                Name = Summaries[Random.Shared.Next(Summaries.Length)],
                Desc = "sweet",
                Price = 1.99
            })
            .ToArray();
        }
    }
}
