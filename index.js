let data = [ "Harry", "Ross", "Bruce",  "Cook", "Carolyn", "Morgan", "Albert", "Walker", "Randy", "Reed", "Larry", "Barnes", "Lois", "Wilson", "Jesse" , "Campbell", "Ernest" , "Rogers", "Theresa" , "Patterson", "Henry" , "Simmons", "Michelle" , "Perry", "Frank" , "Butler", "Shirley"];

function getData(callback) {
  setTimeout(() => {
    callback(data);
  }, 2000);
}

function displayData(data) {
  console.log(data);
}

getData(displayData);

let data = [ "Harry", "Ross", "Bruce",  "Cook", "Carolyn", "Morgan", "Albert", "Walker", "Randy", "Reed", "Larry", "Barnes", "Lois", "Wilson", "Jesse" , "Campbell", "Ernest" , "Rogers", "Theresa" , "Patterson", "Henry" , "Simmons", "Michelle" , "Perry", "Frank" , "Butler", "Shirley"];

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}

getData()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

  <html>
  <body>
    <div id="dataContainer"></div>
    <script>
      fetch("https://dummyjson.com/products")
        .then(response => response.json())
        .then(data => {
          let dataContainer = document.getElementById("dataContainer");
          data.forEach(item => {
            let div = document.createElement("div");
            div.innerHTML = JSON.stringify(item);
            dataContainer.appendChild(div);
          });
        })
        .catch(error => {
          console.error(error);
        });
    </script>
  </body>
</html>
