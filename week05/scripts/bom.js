const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => displayList(chapter));

function displayList(item){
     const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    li.textContent = item;
    deleteButton.textContent = "❌";

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener("click", function() {
      list.removeChild(li);
      deleteChapter(li.textContent);
      console.log(li.textContent)
      input.focus();
    });
}

function setChapterList(){
  localStorage.setItem("bomFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList(){
  return JSON.parse(localStorage.getItem("bomFavBOMList"));
}

function deleteChapter(chapter){
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item)=> item !== chapter);
  setChapterList();
}

button.addEventListener("click", function() {
  const value = input.value.trim();

  if (value !== ""){
    displayList(value);

    chaptersArray.push(value);
    setChapterList();

    input.value = "";
    input.focus();
  }
});

input.focus();