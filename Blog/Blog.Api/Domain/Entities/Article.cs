using System;
using System.ComponentModel.DataAnnotations;

namespace Blog.Api.Domain.Entities
{
    public class Article
    {
        public Guid Id { get; set; }

        [MaxLength(1000)]
        public string Title { get; set; }

        public string Description { get; set; }

        public string Image { get; set; }
    }
}