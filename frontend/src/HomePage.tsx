import React from 'react';
import './HomePage.css'; // Import custom CSS

function HomePage() {
  return (
    <div className="homepage-container">
      <img
        src="./JoelHiltonHeadshot.jpg"
        alt="JoelPicture"
        className="homepage-img"
      />
      <h1 className="homepage-heading">
        Welcome to Joel Hilton's unique website!
      </h1>
      <p>
        It provides a platform for podcast and movie enthusiasts. The website is
        dedicated to celebrating the power of storytelling through engaging
        audio content and an exciting movie collection.
      </p>
      <p>
        In the Podcast page, you can enjoy the engaging content from the
        Baconsale podcast, where the hosts discuss a wide range of topics,
        including pop culture, movies, and music. Immerse yourself in their
        entertaining conversations and discover new insights and perspectives.
      </p>
      <p>
        The movie list showcases Joel Hilton's personal movie collection,
        spanning various genres and years. This curated list of films is a
        testament to the magic of cinema. Browse through the collection, and
        perhaps you'll find some hidden gems or be inspired to re-watch an old
        favorite.
      </p>
      <p>
        Join us on our journey as we explore the fascinating realms of podcasts
        and movies. We believe that there is something for everyone here, so
        dive in and discover your next obsession!
      </p>
    </div>
  );
}

export default HomePage;
