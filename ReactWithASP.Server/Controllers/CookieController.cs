﻿using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactWithASP.Server.Models;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace ReactWithASP.Server.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class CookieController : ControllerBase
    {
        private readonly ILogger<CookieController> _logger;
        private readonly ICookieRepository _cookieRepository;
        
        public CookieController(ILogger<CookieController> logger, ICookieRepository cookieRepository)
        {
            _logger = logger;
            _cookieRepository = cookieRepository;
        }


        [HttpPost(Name = "")]
        public IEnumerable<Cookie> PostCookie([FromBody] Cookie data)

        {
            _cookieRepository.AddCookie(
                  new()
                  {
                      Date = DateOnly.FromDateTime(DateTime.Now),
                      name = data.name,
                      desc = data.desc,
                      Price = data.Price
                  }
            );

            return _cookieRepository.AllCookies;
        }


        [HttpPost]
        public IEnumerable<Cookie> UpdateCookie([FromBody] Cookie data)

        {
            data.Date = DateOnly.FromDateTime(DateTime.Now);
            _cookieRepository.Update(data);
            return _cookieRepository.AllCookies;
        }

        [HttpPost]
        public IEnumerable<Cookie> DeleteCookie([FromBody] Cookie data)
        {
            _cookieRepository.DeleteCookie(data.Id);
            return _cookieRepository.AllCookies;
        }


        [HttpGet(Name = "GetCookie")]
        public IEnumerable<Cookie> GetAllCookies()
        {
           return _cookieRepository.AllCookies;
        }
    }
}
