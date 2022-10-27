// http requests pelo axios para a API
axios.post('/moveis', {
    data: {
        nome: nome,
        imagem: imagem,
        preco: preco,
        ambiente: ambiente
    }
  })
  .then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
});

axios.put('/moveis', {
    params: {
        id: id
    },
    data: {
        nome: nome,
        imagem: imagem,
        preco: preco,
        ambiente: ambiente
    }
  })
  .then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
});

axios.delete('/moveis', {
    params: {
        id: id
    }
  })
  .then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
});

axios.get('/moveis', {})
  .then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
});


// sistema de ordenação