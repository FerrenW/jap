function listarProductos(arr){
    let htmlContent = ""
    for (let producto of arr.products){
        htmlContent += `
        <div class="col mt-3"><div class="card h-100 list-group-item list-group-item-action" style="width: 18rem;">
    <img src="${producto.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${producto.name}</h5>
      <h6 class="card-subtitle">${producto.currency} ${producto.cost}</h6>
      <p class="card-text">${producto.description}</p>
      <div class="precio text-end">
      <p class="text-muted ">${producto.soldCount} vendidos</p></div>
    </div>
    </div>
  </div>
  </div>
  `;
    };
    document.getElementById("lista-productos").innerHTML += htmlContent
    



}

document.addEventListener("DOMContentLoaded",() => {
    getJSONData("https://japceibal.github.io/emercado-api/cats_products/101.json").then(function (producto){
        if (producto.status == "ok"){
            productoArray = producto.data;
            listarProductos(productoArray)
        }
    })
 console.log("test")
})