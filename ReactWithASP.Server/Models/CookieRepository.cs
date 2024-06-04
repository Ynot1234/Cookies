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
              return _reactWithASPDbContext.Cookies;   // will return this when the DB exists
}           }

        public Cookie? GetCookieById(int id)
        {
            return _reactWithASPDbContext.Cookies.FirstOrDefault(p => p.Id == id);

        }
    }
}
