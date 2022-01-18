// your code here

const taskForm = document.querySelector("#create-task-form")
const taskUl = document.querySelector("#tasks")

taskForm.addEventListener('submit', grabTaskFromForm)
  
function grabTaskFromForm(e){
  e.preventDefault()

  let inputVal = e.target["new-task-description"].value
   
  createAndAppendLi(inputVal)
  e.target.reset()
}
  function createAndAppendLi(userInput){
  let li = document.createElement('li')
  li.textContent = userInput

  taskUl.append(li)
}

// function buildToDo(todo) {
//   let p = document.createElement('p')

//   let btn2 = document.createElement('button')
//   btn2.addEventListener('click', handleEdit)
//   btn2.textContent = 'edit'
//   btn2.append('')
//   btn2.style.marginLeft = '2px'

//   let btn = document.createElement('button')
//   btn.addEventListener('click', handleDelete)
//   btn.textContent = 'x'
//   p.textContent = `${todo}`
//   p.append('btn', 'btn2')
// }



