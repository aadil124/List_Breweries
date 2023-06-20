document.body.innerHTML = `

<div class="Container-fluid bg-success p-2 text-dark bg-opacity-25">
<div class="heading text-center m-3 text-white">
<h1>Breweries List</h1>
</div>
<div class="row mainContent m-3  p-4 ">
</div>
</div>
`;

const url = "https://api.openbrewerydb.org/v1/breweries";
const getBreweriesData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data[0].name);
  const mainContent = document.querySelector(".mainContent");
  let output = "";
  data.map((item) => {
    output += `
     <div class="col-sm-12 col-md-3 mb-3 mb-sm-3 ">
     <div class="card mb-3 bg-warning text-black h-100">
    <div class="card-body">
        <h5 class="card-title item1">Name: ${item.name}</h5>
        <h5 class="card-title item2">Type: ${item.brewery_type}</h5>
        <h5 class="card-title item3">City: ${item.city}</h5>
        <h5 class="card-title item4">State: ${item.state}</h5>
        <h5 class="card-title item4">Country: ${item.country}</h5>
        <h5 class="card-title item4">Phone: ${item.phone}</h5>
        <a href="${item.website_url}" class="btn btn-outline-danger">Website</a>
      </div>
    </div>  
     </div>
    `;
    mainContent.innerHTML = output;
    console.log(item.name);
  });
};
getBreweriesData();
