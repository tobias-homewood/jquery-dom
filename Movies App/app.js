let currentId = 0;

let moviesList = [];

$("#movies-form").on("submit", function (evt) {
  evt.preventDefault();
  let title = $("#form-title").val();
  let rating = $("#form-rating").val();
  if (title.length < 2) {
    alert("Please input a title with greater than 2 characters");
    return;
  }
  if (rating > 10 || rating < 1 || rating == NaN) {
    alert("Please insert a number between 1 and 10");
    return;
  }

  let movieData = { title, rating, currentId };
  const HTMLtoAppend = createMovieDataHTML(movieData);

  currentId++;
  moviesList.push(movieData);

  $("#table-body").append(HTMLtoAppend);
  $("#movies-form").trigger("reset");
});

function createMovieDataHTML(data) {
  return `
      <tr class = table-item>
        <td>${data.title}</td>
        <td>${data.rating}</td>
        <td>
          <button class="delete-button" id=${data.currentId}>
            Delete
          </button>
        </td>
      <tr>
    `;
}

$("#table-body").on("click", ".delete-button", function (evt) {
  $(evt.target).closest("tr").remove();
});
