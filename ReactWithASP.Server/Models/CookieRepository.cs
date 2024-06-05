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
              return _reactWithASPDbContext.Cookies;   
            }           
        }

        public Cookie? GetCookieById(int id)
        {
            return _reactWithASPDbContext.Cookies.FirstOrDefault(p => p.Id == id);
        }

        public void AddCookie(Cookie cookie) 
        {
            _reactWithASPDbContext.Add(cookie);
            _reactWithASPDbContext.SaveChanges();
        }
    }
}
