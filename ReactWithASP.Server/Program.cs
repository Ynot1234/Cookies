using Microsoft.EntityFrameworkCore;
using ReactWithASP.Server.Models;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddScoped<ICookieRepository, CookieRepository>();

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ReactWithASPDbContext>(options => { 
    options.UseSqlServer(
        builder.Configuration["ConnectionStrings:ReactWithASPDbContextConnection"]); 
});

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
