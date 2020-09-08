using System.Collections.Generic;
using System.IO;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using jjBlog.Api.Domain.Entities;

namespace jjBlog.Api.Persistence
{
    public class ArticlesRepository
    {
        public async Task<List<Article>> AllAsync(CancellationToken cancellationToken = default)
        {
            var content = await File.ReadAllTextAsync("Articles.json", cancellationToken);
            return JsonSerializer.Deserialize<List<Article>>(content);
        }

        public async Task<Article> RegistrateAsync(Article entity, CancellationToken cancellationToken = default)
        {
            var current = await AllAsync(cancellationToken);
            current.Add(entity);

            var modernize = JsonSerializer.Serialize(current);
            await File.WriteAllTextAsync("Articles.json", modernize, cancellationToken);

            return entity;
        }
    }
}