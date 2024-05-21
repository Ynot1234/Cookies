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

            return Enumerable.Range(1, 5).Select(index => new Cookie
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                Name = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}
