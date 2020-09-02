let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
  }]

  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }

  const logTodos = () => {
    console.log(arrayOfTodos)
  }

  const populateTodos = () => {
    for ( let i = 0; i < arrayOfTodos.length; i++) {
        console.log(arrayOfTodos[i].title)
        let ol = document.getElementById("todo-list")
        let li = document.createElement("li")
        let text = arrayOfTodos[i].title
        let title = document.createTextNode(text)
        li.appendChild(title)
        ol.appendChild(li)
    }
  }