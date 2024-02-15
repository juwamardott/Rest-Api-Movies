function Movies() {
  $("#movie-list").html("");
  $.ajax({
    url: "https://www.omdbapi.com/",
    type: "get",
    dataType: "json",
    data: {
      apikey: "bf016f4a",
      s: $("#search-input").val(),
    },
    success: function (hasil) {
      if (hasil.Response == "True") {
        let movies = hasil.Search;

        $.each(movies, function (i, data) {
          $("#movie-list").append(
            `
          <div class="col-md-4"> 
            <div class="card mb-3">
              <img src="` +
              data.Poster +
              `" class="card-img-top">
              <div class="card-body">
              <h5 class="card-title">` +
              data.Title +
              `</h5>
              <h4>` +
              data.Year +
              `</h4>
              <a href="#" class="btn btn-primary">Go somewhere</a>
             </div>
            </div>
            </div>
            `
          );
        });

        $("#search-input").val("");
      } else {
        $("#movie-list").html(
          `
        <div class="col">
          <h1 class="text-center">` +
            hasil.Error +
            `</h1>
        </div>
        `
        );
      }
    },
  });
}

$("#search-button").on("click", function () {
  Movies();
});

$("#search-input").on("keyup", function (e) {
  if (e.keyCode == 13) {
    Movies();
  }
});
