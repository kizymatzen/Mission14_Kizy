using Microsoft.EntityFrameworkCore;

namespace Joel_Movie.Models
{
    public class MovieCollectionDbContext : DbContext
    {
        public MovieCollectionDbContext(DbContextOptions<MovieCollectionDbContext> options) : base(options)
        {
        }

        public DbSet<Movie> Movies { get; set; }
    }
}
