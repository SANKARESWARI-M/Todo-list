function Additem() {
    const display = document.getElementById("list");
    const taskInput = document.getElementById("task");
    const task = taskInput.value;
    const error = document.getElementById("error");

    console.log(task);

    if (task) {
       
        const list = document.createElement("li");
        list.textContent = task;
        const del=document.createElement("button");
        del.textContent="Delete";

        del.addEventListener("click" ,() =>{
            list.remove();
            del.remove();
            update.remove();
        })

        const update=document.createElement("button");
        update.textContent="Update";

        update.addEventListener("click",()=>{
            const input=document.createElement("input");
            input.type="text";
            input.value=list.textContent;

            const save=document.createElement("button");
            save.textContent="save";
            save.addEventListener("click",()=>{
                list.textContent=input.value;
                list.appendChild(update);
                list.appendChild(del);
            })
            list.appendChild(input);
            list.appendChild(save);
        });

        display.appendChild(list);
        display.appendChild(del);
        display.appendChild(update);

        taskInput.value = "";
        error.innerHTML="";
        taskInput.style.border="";
    } else {
        error.innerHTML="please enter the task";
        taskInput.style.border="2px solid red";
        error.style.color="red";
    }
}
