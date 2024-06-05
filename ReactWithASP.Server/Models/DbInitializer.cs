using Microsoft.Extensions.DependencyInjection;

namespace ReactWithASP.Server.Models
{
    public class DbInitializer
    {
    
            public static void Seed(IApplicationBuilder applicationBuilder)
            {
                    ReactWithASPDbContext context =
                         applicationBuilder.ApplicationServices.CreateScope
                         ().ServiceProvider.GetRequiredService<ReactWithASPDbContext>();

                    if(!context.Cookies.Any())
                    {
                        context.AddRange
                        (
                            Enumerable.Range(1, 5).Select(index => new Cookie
                            {
                                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                                name = Tools.Summaries[Random.Shared.Next(Tools.Summaries.Length)],
                                desc = "sweet",
                                Price = 1.99
                            })
                        );
                    }

                    context.SaveChanges();
            }
    }
}
