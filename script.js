const addInput=document.getElementById('#add');
const toDo=[{
  item: "to complete javascript",
  iscompletd: false },
  {
  item: "meditation",
  iscompleted: true
  }]

localStorage.setItem("toDo", JSON.stringify(toDo));
JSON.parse(localStorage.getItem("toDo"));
function addtodo(){
    if(!toDo){
      return null;
    }

}
