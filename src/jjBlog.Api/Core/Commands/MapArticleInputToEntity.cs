using jjBlog.Api.Client;
using jjBlog.Api.Domain.Entities;
using MediatR;

namespace jjBlog.Api.Core.Commands
{
    public class MapArticleInputToEntity : IRequest<Article>
    {
        public MapArticleInputToEntity(ArticleInput input)
        {
            Input = input;
        }

        public ArticleInput Input { get; }
    }
}