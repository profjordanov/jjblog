using System;
using System.Threading;
using System.Threading.Tasks;
using jjBlog.Api.Core.Commands;
using jjBlog.Api.Domain.Entities;
using MediatR;

namespace jjBlog.Api.Business.ArticlesContext.CommandHandlers
{
    public class MapArticleInputToEntityHandler : IRequestHandler<MapArticleInputToEntity, Article>
    {
        public Task<Article> Handle(MapArticleInputToEntity request, CancellationToken cancellationToken) =>
            Task.FromResult(new Article(Guid.NewGuid(), request.Input.Title, request.Input.Content));
    }
}