using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Joel_Movie.Models;

namespace Joel_Movie.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MovieController : ControllerBase
    {
        private readonly MovieCollectionDbContext _context;

        public MovieController(MovieCollectionDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Movie>> GetAllMovies()
        {
            // Filter the data to only include movies that have been edited
            var editedMovies = _context.Movies.Where(movie => movie.Edited == "Yes");

            // Order the filtered data alphabetically by movie title
            var sortedMovies = editedMovies.OrderBy(movie => movie.Title);

            // Return the sorted and filtered data as a list
            return Ok(sortedMovies.ToList());
        }
    }
}
