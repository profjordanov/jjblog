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
            return Startup.Articles;
        }

        // GET api/<ArticlesController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ArticlesController>
        [HttpPost]
        public IActionResult Post([FromBody] Article article)
        {
            if (article.Id == default)
            {
                article.Id = Guid.NewGuid();
            }

            Startup.Articles.Add(article);

            return Ok(article);
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
