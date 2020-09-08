using System;
using System.ComponentModel.DataAnnotations;

namespace jjBlog.Api.Domain.Entities
{
    public class Article
    {
        public Article(Guid id, string title, string content)
        {
            Id = id;
            Title = title;
            Content = content;
        }

        public Guid Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Content { get; set; }
    }
}