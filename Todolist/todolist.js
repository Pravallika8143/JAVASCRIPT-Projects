function addTask() {
  let taskText = document.getElementById("taskInput").value.trim();
  if (!taskText) return;

  let li = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "form-check-input";
  checkbox.onclick = function() {
    li.classList.toggle("checked");
  };

  let span = document.createElement("span");
  span.textContent = taskText;

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "×";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function() {
    li.remove();
  };

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);
  document.getElementById("taskInput").value = "";
}
