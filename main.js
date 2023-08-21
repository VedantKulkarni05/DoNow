window.addEventListener("load", () => {
  const form = document.querySelector("#New-Task-Form");
  const input = document.querySelector("#New-Task-Input");
  const list_element = document.querySelector("#Tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); //it prevent refreshing when submit

    const task = input.value;
    if (!task) {
      alert("Please Enter The Task ");
      return;
    }
    const task_element = document.createElement("div");
    task_element.classList.add("task");

    const task_content_element = document.createElement("div");
    task_content_element.classList.add("Content");

    task_element.appendChild(task_content_element);

    const task_input_element = document.createElement("input");
    task_input_element.classList.add("text");
    task_input_element.type = "text";
    task_input_element.value = task;
    task_input_element.setAttribute("readonly", "readonly");

    task_content_element.appendChild(task_input_element);

    const task_actions_element = document.createElement("div");
    task_actions_element.classList.add("actions");

    const task_edit_element = document.createElement("button");
    task_edit_element.classList.add("Edit");
    task_edit_element.innerHTML = "Edit";

    const task_delete_element = document.createElement("button");
    task_delete_element.classList.add("Delete");
    task_delete_element.innerHTML = "Delete";

    task_actions_element.appendChild(task_edit_element);
    task_actions_element.appendChild(task_delete_element);

    task_element.appendChild(task_actions_element);

    list_element.appendChild(task_element);

    input.value = "";

    // add event listener to the edit and delete buttons
    task_edit_element.addEventListener("click", () => {
      if (task_edit_element.innerText == "Edit") {
        task_input_element.removeAttribute("readonly");
        task_input_element.focus();
        task_edit_element.innerText = "Save";
      } else {
        task_input_element.setAttribute("readonly", "readonly");
        task_edit_element.innerText = "Edit";
      }
    });

    task_delete_element.addEventListener("click", () => {
      list_element.removeChild(task_element);
    });
  });
});
