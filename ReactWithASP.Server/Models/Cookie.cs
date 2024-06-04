namespace ReactWithASP.Server.Models
{
    public class Cookie
    {
        public int Id { get; set; }

        public DateOnly Date { get; set; }
        public string? name { get; set; }

        public string? desc { get; set; }

        public double Price { get; set; }

    }
}
