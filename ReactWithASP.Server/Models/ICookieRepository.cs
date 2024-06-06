namespace ReactWithASP.Server.Models
{
    public interface ICookieRepository
    {
       IEnumerable<Cookie> AllCookies { get; }

    
       Cookie? GetCookieById(int CookieID);

       public void AddCookie(Cookie cookie);

       public int Update<T>(T item) where T : Cookie;
    }
}
