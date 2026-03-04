const loadLessons=() => {
fetch("https://openapi.programming-hero.com/api/levels/all") // Promis of respons
.then(res=> res.json())  // Promis of json data
.then((json)=> displayLesson(json.data));
};
const displayLesson = (lessons)=> {

  // 1. get the container empty

  const lebelContainer = document.getElementById("lebel-container");
  lebelContainer.innerHTML="";
  // 2. get into evey lesson
  for(let lesson of lessons){
    console.log(lesson);
    // 3. creat element
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML =` <button class="btn btn-outline btn-primary" >
                         <i class="fa-solid fa-book-open"></i> Learn-${lesson.level_no}
                         </button>
    `
  // 4. append into container.
  lebelContainer.append(btnDiv);
  }
 
};

loadLessons();
