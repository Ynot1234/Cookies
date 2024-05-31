namespace ReactWithASP.Server
{
    public static class Tools
    {


        private static readonly string[] Summaries = new[]
        {
            "Crunchy", "Chocolate", "Oatmeal", "Soft", "Sweet", "Warm"
        };

            

        public static IEnumerable<Cookie> Load()
        {
            return Enumerable.Range(1, 5).Select(index => new Cookie
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                Id = new Guid(),
                name = Summaries[Random.Shared.Next(Summaries.Length)],
                desc = "sweet",
                Price = 1.99
            })
           .ToArray();
        }


    }
}
