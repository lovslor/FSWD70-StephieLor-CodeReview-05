var items = $('#film'), likeInfo = $('likeInfo'), likes;

function countUpLike(id, film) {
  $('.like a').on('click', function() {
    e.preventDefault();
    console.log(this.id);
    console.log(film[id].title);
  });
}

function listMovies() {
  for (let i = 0; i < film.length; i++) {
    var media = 
      `<div class="col-lg-5 col-md-12 col-sm-12 mb-4 bg-dark p-4" id="` + film[i].id + `">
        <img src="` + film[i].img + `" class="align-self-start" alt="` + film[i].title + `">
           <div class="media-body">
          <h5 class="mt-0">` + film[i].title + `</h5>
          <p>` + film[i].description + `</p>
          <h4 class="like"><a href="#">Like</a></h4>
          <div class="likeInfo text-center align-self-center">` + film[i].likes + `</div>
        </div>
      </div>
      `;
    items.append(media);
  }

}
 
