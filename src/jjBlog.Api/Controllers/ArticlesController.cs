using System.Collections.Generic;
using System.Threading.Tasks;
using jjBlog.Api.Domain.Entities;
using jjBlog.Api.Persistence;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace jjBlog.Api.Controllers
{
    [Route("api/[controller]")]
    public class ArticlesController : ControllerBase
    {
        private readonly ArticlesRepository _articlesRepository;
        public ArticlesController()
        {
            _articlesRepository = new ArticlesRepository();
        }

        [HttpGet]
        public Task<List<Article>> Get() => _articlesRepository.AllAsync();

        [HttpPost]
        public async Task<IActionResult> Registrate([FromBody] Article article)
        {
            var entity = await _articlesRepository.RegistrateAsync(article);
            return Ok();
        }
    }
}
