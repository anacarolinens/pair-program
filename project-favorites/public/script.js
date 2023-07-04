const ul = document.querySelector('ul')
const input = document.querySelector('input')
const form = document.querySelector('form')

/*

// Não se preocupem com esse pedaço de código comentado! Vamos descomentá-lo quando tivermos acabado de construir a API.

// Função que carrega o conteúdo da API.
async function load() {
    // fetch está como await para evitar que entre num esquema de promisse e só devolva o conteúdo após a iteração qua acontece em seguida.
    const res = await fetch('http://localhost:3000/')
        .then(data => data.json())
    // Iterando no vetor com o conteúdo (JSON) que está vindo da API e adicionando-os no frontend.
    res.urls.map(({name, url}) => addElement({name, url}))
}

load()
*/

function addElement({ name, url }) {
    const ul = document.querySelector('ul');
    
    // Cria um novo elemento li
    const li = document.createElement('li');
    
    // Cria um novo elemento link
    const a = document.createElement('a');
    a.textContent = name;
    a.href = url;
    
    // Adiciona o link ao elemento li
    li.appendChild(a);
    
    // Adiciona o elemento li à lista ul
    ul.appendChild(li);
  }
  
  // Exemplo de uso da função
  const link = {
    name: 'Google',
    url: 'https://www.google.com'
  };
  
  addElement(link);
  

function removeElement(element) {
    // criem os códigos
    const ul = document.querySelector('ul');
    const li = element.parentNode;
  
  // Verifica se o elemento é filho da lista
    if (ul.contains(li)) {
        ul.removeChild(li);
}

function editElement(element, newName, newUrl) {
    const a = element.querySelector('a');
    
    if (a) {
      a.textContent = newName;
      a.href = newUrl;
    }
  }
  

form.addEventListener('submit', (event) => {
    
    event.preventDefault();

    let { value } = input

    if (!value)
        return alert('Preencha o campo!')

    const [name, url] = value.split(',')

    if (!url)
        return alert('O texto não está formatado da maneira correta.')

    if (!/^http/.test(url))
        return alert('Digite a url da maneira correta.')

    addElement({ name, url })

    input.value = ''

})