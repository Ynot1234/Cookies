namespace ReactWithASP.Server.Models
{
    public interface ICategoryRepository
    {
      IEnumerable<Cookie> AllCategories { get; }
    }
}
