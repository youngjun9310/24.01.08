window.onload = function getdata(){
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTkwMjQwMDdlYTdkMzkxNzA5MTg2OTI4ZTczZjBiZCIsInN1YiI6IjY1OGU1YmRiNjM1ZTc4N2ExMDA5MTdmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._ZZYlVvXUDCeyvLN4NS64Dm8cyseGHEF-Sja5tJhdHY'
    }
};
fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(data => {    
      for (i=0; i<20; i++){
      let imagesrc = "https://image.tmdb.org/t/p/original/";
      let imagert = data.results[i].backdrop_path;
      let image = imagesrc + imagert;
      let title = data.results[i].title;
      let overview = data.results[i].overview;
      let date = data.results[i].release_date; 
      let average = data.results[i].vote_average;
      let id = data.results[i].id;
      let card =
      //id를 일단 html에 저장시키고, 클릭 시 그 id를 alert 시키고싶음.
      `
      <li onclick ="alert('${id}')">
      <div class="cards">
      <div class="row g-1">
      <div class="col-md-6">
      <img src = "${image}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-5">
      <div class="cardbody">
      <h5 class="cardtitle">${title}</h5>
      <p class="cardtext">${overview}</p>
      <small class="cardmemo">출시날짜 : ${date} 점수 : ${average}/10</small>
      </li>
  </div>
  </div>
  </div>
  </div>`;
  const node = document.createElement(`div`);
  node.innerHTML = card;
  document.getElementById("mkcard").appendChild(node);
    };
  })
  .catch(err => console.error(err));
  }
  //여기까지가 api 정보 삽입//
