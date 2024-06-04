namespace ReactWithASP.Server.Models
{
    public interface ICookieRepository
    {
       IEnumerable<Cookie> AllCookies { get; }

    //   IEnumerable<Cookie> CookiesOfTheWeek { get; }

       Cookie? GetCookieById(int CookieID);
    
    }
}
