using Microsoft.EntityFrameworkCore;



namespace ReactWithASP.Server.Models
{
    public class ReactWithASPDbContext : DbContext
    {
   
        public ReactWithASPDbContext(DbContextOptions<ReactWithASPDbContext> options): base(options) 
        { 
        
        }

        public DbSet<Cookie> Cookies {  get; set; }
    }
}
