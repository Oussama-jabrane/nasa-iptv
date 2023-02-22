import React from "react";

function Catalog() {
  return (
    <div id="catalog" className="catalog">
      <div className="title-description">
        <h1 className="catalog-title">OUR FILMS</h1>
        <p className="catalog-description">
          Here is the list of some films that you can find on our VOD IPTV
          program. The list is so long, so we chose the best films that can
          probably fit your type:
        </p>
      </div>
      <div className="films-list">
        <div className="films-list-1">
          <figure class="hero-grid effect-move">
            <img
              class="hero-grid-image effect-image"
              src="https://fr.web.img6.acsta.net/pictures/22/03/31/13/56/3329070.jpg"
              alt="THE NORTHMAN"
            />
            <figcaption class="hero-grid-content">
              <span class="hero-tag effect-target">ACTION</span>
              <h2 class="hero-grid-title effect-target">THE NORTHMAN</h2>
            </figcaption>
          </figure>
          <figure class="hero-grid effect-move">
            <img
              class="hero-grid-image effect-image"
              src="https://lumiere-a.akamaihd.net/v1/images/pp_disney_blackpanther_wakandaforever_1289_d3419b8f.jpeg"
              alt=""
            />
            <figcaption class="hero-grid-content">
              <span class="hero-tag effect-target">SUPERHERO</span>
              <h2 class="hero-grid-title effect-target">
                Black Panther: Wakanda Forever
              </h2>
            </figcaption>
          </figure>
          <figure class="hero-grid effect-move">
            <img
              class="hero-grid-image effect-image"
              src="https://m.media-amazon.com/images/M/MV5BYzZkOGUwMzMtMTgyNS00YjFlLTg5NzYtZTE3Y2E5YTA5NWIyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg"
              alt=""
            />
            <figcaption class="hero-grid-content">
              <span class="hero-tag effect-target">ACTION</span>
              <h2 class="hero-grid-title effect-target">BLACK ADAM</h2>
            </figcaption>
          </figure>
        </div>
        <div className="films-list-2">
          <figure class="hero-grid effect-move">
            <img
              class="hero-grid-image effect-image"
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSHmw-bKBYMQAHV70PEpOaKMYnkcrp62ZF_lbadpInjTlLq4rib"
              alt=""
            />
            <figcaption class="hero-grid-content">
              <span class="hero-tag effect-target">COMEDY</span>
              <h2 class="hero-grid-title effect-target">Knives Out</h2>
            </figcaption>
          </figure>
          <figure class="hero-grid effect-move">
            <img
              class="hero-grid-image effect-image"
              src="https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
              alt=""
            />
            <figcaption class="hero-grid-content">
              <span class="hero-tag effect-target">CRIME</span>
              <h2 class="hero-grid-title effect-target">JOKER</h2>
            </figcaption>
          </figure>
          <figure class="hero-grid effect-move">
            <img
              class="hero-grid-image effect-image"
              src="https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg"
              alt=""
            />
            <figcaption class="hero-grid-content">
              <span class="hero-tag effect-target">BIOGRAPHY</span>
              <h2 class="hero-grid-title effect-target">
                The Wolf of Wall Street
              </h2>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
