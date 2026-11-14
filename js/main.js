fetch("https://dummyjson.com/products").then(function(result) {
        return result.json();
    })
    .then(function(g) {
        var a = g.products;
        var basket = "";

        for (var i = 0; i < a.length; i++) {

            var cartona = `  <div class="md:col-4 text-center my-5 ">
                                     <img src="${a[i].images[0]}" class="w-100 style='height:350px'">
                                     <h4> Name: ${a[i].title}</h4>
                                     <h6> Category: ${ a[i].category}</h6>
                                     <h6> Brand: ${ a[i].brand}</h6>
                                     <h6> Stock: ${ a[i].stock}</h6>
                                     <h6> Rating: ${ a[i].rating}</h6>
                                     <h6> Price: ${ a[i].price}</h6>
                                     <h6> Id: ${ a[i].id}</h6>

                                  </div>`;
            basket = basket + cartona;
        }
        document.querySelector(".test").innerHTML = basket;
    });