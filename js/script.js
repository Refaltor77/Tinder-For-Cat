document.getElementById('loader-content').style.display = "none";
document.getElementById('match').style.display = "none";



document.getElementById('submit-form').addEventListener('click', function(event){
  event.preventDefault();
  document.getElementById('login').style.display = "none";
  document.getElementById('loader-content').style.display = 'block';

  fetch("https://api.thecatapi.com/v1/images/search")
  .then(response => response.json())
  .then(response => {
  
    setTimeout(function(){
      console.log(response)
       document.getElementById('loader-content').display = "none";document.getElementById('match').style.display = "block";
       document.getElementById('loader-content').style.display = 'none';
    }, 1000)
    let name = 'Laura'
    let url = response[0].url;
    let img = document.createElement("div");
    img.classList.add("imgProfil");
    img.style.backgroundImage = `url('${url}')`;


    name = document.createElement('h2');
    name.innerHTML = 'Chatte cochonne';

    document.getElementById('card').append(img);
    document.getElementById('card').append(name);
  })
});

document.getElementById("like").addEventListener('click', function(event){
  fetch("https://api.thecatapi.com/v1/images/search")
  .then(response => response.json())
  .then(response => {

    document.getElementById('loader-content').style.display = "block";
    document.getElementById('match').style.display = "none";

    setTimeout(function() {
      document.getElementById('card').innerHTML = '';
      let url = response[0].url;
      let img = document.createElement("div");
      img.classList.add("imgProfil");
      img.style.backgroundImage = `url('${url}')`;

      let name = document.createElement('h2');
      name.innerHTML = 'Chatte cochonne';

      document.getElementById('card').append(img);
      document.getElementById('card').append(name);
      document.getElementById('loader-content').style.display = "none";
      document.getElementById('match').style.display = "block";
    }, 1000);

    
  })
});

document.getElementById("run").addEventListener('click', function(event){
  fetch("https://api.thecatapi.com/v1/images/search")
  .then(response => response.json())
  .then(response => {

    document.getElementById('loader-content').style.display = "block";
    document.getElementById('match').style.display = "none";

    setTimeout(function() {
      document.getElementById('card').innerHTML = '';
      let url = response[0].url;
      let img = document.createElement("div");
      img.classList.add("imgProfil");
      img.style.backgroundImage = `url('${url}')`;

      let name = document.createElement('h2');
      name.innerHTML = 'Chatte cochonne';

      document.getElementById('card').append(img);
      document.getElementById('card').append(name);
      document.getElementById('loader-content').style.display = "none";
      document.getElementById('match').style.display = "block";
    }, 1000);

    
  })
});