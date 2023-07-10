const ul = document.querySelector('ul')
const input = document.querySelector('input')
const form = document.querySelector('form')


// Função que carrega o conteúdo da API.
async function load() {
    // fetch está como await para evitar que entre num esquema de promisse e só devolva o conteúdo após a iteração qua acontece em seguida.
    const res = await fetch('http://localhost:3000/') //await - faz o codico ficar sincrono, fazendo ele ser exercutado até que ele acabe antes de qualquer outra instrução
        .then(data => data.json())
    // Iterando no vetor com o conteúdo (JSON) que está vindo da API e adicionando-os no frontend.
    res.urls.map(({name, url}) => addElement({name, url})) //indo dentro do urls e fazendo um map para adicionar cada item para dentro da pagina
}

load()




function addElement({ name, url }) {

  // Cria um novo elemento li
  const li = document.createElement('li');

  //cria um elemento button e adiciona e chama a função de remover
  const btn = document.createElement('button');

  btn.innerHTML = 'X';
  btn.addEventListener('click', function() {
      removeElement(btn);
  })

  const a = document.createElement('a');
  a.textContent = name;
  a.href = url;
  
    ul.append(li);
    li.append(a);
    li.append(btn);
 

}

async function addElementAndSendToApi({ name, url }){
  addElement({ name, url })
  try {
    fetch(`http://localhost:3000?name=${name}&url=${url}`)
    }catch (err){
      console.log('Erro!',err)

  }

}

// // Exemplo de uso da função
// const link = {
//   name: 'Google',
//   url: 'https://www.google.com'
// };

// addElement(link);

//função para remover o link
// Função para enviar as alterações para o backend em formato JSON
async function removeElementFromBackend(name, url) {
  try {
    await fetch(`http://localhost:3000/?name=${name}&url=${url}&del=true`, {
      method: 'DELETE'
    })
  } catch (err) {
    console.log('Erro!', err);
  }
}

// Função para remover o link do frontend e enviar as alterações para o backend
async function removeElement(element) {
  const li = element.parentNode;
  const ul = li.parentNode;
  const name = li.querySelector('a').textContent;
  const url = li.querySelector('a').href;

  if (confirm('Deseja realmente excluir esse link?')) {
    await removeElementFromBackend(name, url);
    ul.removeChild(li);
  }
}


 

form.addEventListener('submit', (event) => {
    
    event.preventDefault();

    let { value } = input

    if (!value)
        return alert('Preencha o campo!')//validar o campo

    const [name, url] = value.split(',')

    if (!url)
        return alert('O texto não está formatado da maneira correta.')

    if (!/^http/.test(url))
        return alert('Digite a url da maneira correta.')//formatcao do campo

    addElementAndSendToApi({ name, url })

    input.value = ''

})