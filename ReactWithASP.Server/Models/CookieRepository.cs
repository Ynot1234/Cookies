using Microsoft.AspNetCore.Components.Server;
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


        public void UpdateProperties(DbContext context, object target, object source)
        {
            foreach (var propertyEntry in context.Entry(target).Properties)
            {
                var property = propertyEntry.Metadata;
                // Skip shadow and key properties
                if (property.IsShadowProperty() || (propertyEntry.EntityEntry.IsKeySet && property.IsKey())) continue;
                propertyEntry.CurrentValue = property.GetGetter().GetClrValue(source);
            }
        }

        public int Update<T>(T item) where T : Cookie
        {
            var cookie = GetCookieById(item.Id);
            if (cookie == null) 
            {
                return 0;
            }


            foreach(var propertyEntry in _reactWithASPDbContext.Entry(cookie).Properties)
            {
                var property = propertyEntry.Metadata;
                var NewValue = property.GetGetter().GetClrValue(item);
                if (NewValue == null || NewValue.ToString().Trim() == "") continue;
                propertyEntry.CurrentValue = property.GetGetter().GetClrValue(item);
            }

            return   _reactWithASPDbContext.SaveChanges();
        }
    }
}
