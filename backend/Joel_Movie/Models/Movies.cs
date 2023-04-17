﻿namespace Joel_Movie.Models
{
    public class Movie
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Director { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string IsEdited { get; set; } // Change the data type to string
    }
}
