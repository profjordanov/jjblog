using System;
using System.Collections.Generic;
using Blog.Api.Domain.Entities;
using Microsoft.AspNetCore.Mvc;


namespace Blog.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticlesController : ControllerBase
    {
        // GET: api/<ArticlesController>
        [HttpGet]
        public IEnumerable<Article> Get()
        {
            var result = new Article[]
            {
                new Article
                {
                    Id = Guid.NewGuid(),
                    Title = "Title",
                    Description = "Description",
                    Image = "https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg"
                }
            };
            return result;
        }

        // GET api/<ArticlesController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ArticlesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ArticlesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ArticlesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
