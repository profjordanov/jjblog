FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /src
COPY ["jjBlog.Api/jjBlog.Api.csproj", "jjBlog.Api/"]

RUN dotnet restore "jjBlog.Api/jjBlog.Api.csproj"
COPY . .
WORKDIR "/src/jjBlog.Api"
RUN dotnet build "jjBlog.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "jjBlog.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "jjBlog.Api.dll"]