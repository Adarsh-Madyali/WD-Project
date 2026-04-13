function rateMovie(button, value) {
    let movie = button.parentElement;
    let ratingSpan = movie.querySelector(".rating");
    ratingSpan.textContent = value;
}

// Filter by genre
document.getElementById("genreFilter").addEventListener("change", function() {
    let selected = this.value;
    let movies = document.querySelectorAll(".movie");

    movies.forEach(movie => {
        let genre = movie.getAttribute("data-genre");
        if (selected === "all" || genre === selected) {
            movie.style.display = "block";
        } else {
            movie.style.display = "none";
        }
    });
});
