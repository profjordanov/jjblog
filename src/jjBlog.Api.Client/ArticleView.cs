using System;

namespace jjBlog.Api.Client
{
    public class ArticleView
    {
        public Guid Id { get; set; }

        public string Title { get; set; }

        public string Content { get; set; }
    }
}