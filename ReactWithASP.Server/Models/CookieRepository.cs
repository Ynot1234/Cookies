using Microsoft.EntityFrameworkCore;

namespace ReactWithASP.Server.Models
{
    public class CookieRepository : ICookieRepository
    {
        private readonly ReactWithASPDbContext _reactWithASPDbContext;

        public CookieRepository(ReactWithASPDbContext reactWithASPDbContext)
        {
            _reactWithASPDbContext = reactWithASPDbContext;
        }  
        
        public IEnumerable<Cookie> AllCookies
        {
            get 
            {
             //   return _reactWithASPDbContext.Cookies.Include(c => c.Category);   //not using category

             //  return _reactWithASPDbContext.Cookies;   // will return this when the DB exists

                //returning this for now
                return Enumerable.Range(1, 5).Select(index => new Cookie
                {
                    Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                    Id = index,
                    name = Tools.Summaries[Random.Shared.Next(Tools.Summaries.Length)],
                    desc = "sweet",
                    Price = 1.99
                })
               .ToArray();
            }
        }

        public Cookie? GetCookieById(int id)
        {
            return _reactWithASPDbContext.Cookies.FirstOrDefault(p => p.Id == id);

        }
    }
}
