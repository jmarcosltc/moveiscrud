
// cards
window.onload = async function() {
  
  const moveisList = await fetch('http://localhost:3030/moveis', {
    headers: {
    'Content-Type': 'application/json'
    },
    method: 'get'
  })
    .then(res => res.json()) 
    .then((data) => {
      return data
    }).catch(function(error) {
      console.log(error);
      return 0;
    });
  
    for(let i = 0; i < moveisList.length; i++) {
      document.getElementById("listarMoveis").innerHTML += 
      `
      <div class="card" style="width: 18rem;">
                <img src=${moveisList[i].imagem} class="card-img-top" alt=${moveisList[i].nome}>
                <div class="card-body" id=${moveisList[i].id}>
                  <h5 class="card-title">${moveisList[i].nome}</h5>
                  <p class="card-text"> Preço: ${moveisList[i].preco}</p>
                  <p class="card-text"> Para: ${moveisList[i].ambiente}</p>
                  <button id="botaoDelete" type="button" class="btn btn-primary" onclick=deleteMovel(this)>
                      Deletar
                  </button>
                  <button id="botaoEdit" type="button" class="btn btn-primary" data-toggle="modal" data-target="#editarMovelModal" onclick=editarMovelAbrir(this)>
                      Editar
                  </button>
                </div>
              </div>
       `
    }

}

// sistema de ordenação