using Microsoft.AspNetCore.Builder;

namespace Blog.Api.Configuration
{
    internal static class MiddlewareConfiguration
    {
        internal static IApplicationBuilder UseCrossOriginResourceSharing(this IApplicationBuilder app)
        {
            app.UseCors(builder => builder
                .SetIsOriginAllowedToAllowWildcardSubdomains()
                .WithOrigins("http://localhost:3000", "http://*.azurewebsites.net/")
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials());

            return app;
        }
    }
}