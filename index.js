console.log("saurav")
var todolist = [{
    "name": "Javscript",
    "done": false
}, {
    "name": "React",
    "done": true,
}, {
    "name": "Angular",
    "done": false
}];

function oncheck() {
    for (let i = 0; i < todolist.length; i++) {
        if (event.target.value === todolist[i].name) {
            // console.log(event.target.value + " checked")
            // console.log(document.getElementById(todolist[i].name).checked);
            todolist[i].done = document.getElementById(todolist[i].name).checked;
        }
    }
    tasklist();
}

function deleter() {
    let eventname = event.target.value;

    // function deletetask(taskname) {
    //     return eventname === taskname;
    // }

    todolist = todolist.filter(function(task) {

        return task.name !== eventname
    });
    console.log("Deleted....")
    tasklist();
}
var editeventname = "";

function editor() {
    editeventname = event.target.value;

    // console.log("eventname in editor => " + editeventname)
    document.getElementById("task").innerHTML = `<input type="text" id="taskinput"></input> <button class="addbtn" onclick="SubmitEditedTask()">OK</button>
    `;

}

function SubmitEditedTask() {
    var a = document.getElementById("taskinput").value;

    for (let i = 0; i < todolist.length; i++) {
        if (editeventname === todolist[i].name) {
            todolist[i].name = a;
        }
    }
    tasklist();
    editeventname = "";
    document.getElementById("task").innerHTML = "";

}


function tasklist() {
    var todolister = "";
    for (i = todolist.length - 1; i >= 0; i--) {
        if (!todolist[i].done) {
            todolister = todolister + `
        <div>
            <span> ` + todolist[i].name + `</span>
            <input type="checkbox" name="done" id="` + todolist[i].name + `" onchange="oncheck()" value="` + todolist[i].name + `" `;
            todolister += `>
            <button name="edited" value="` + todolist[i].name + `" onclick="editor()" style='font-size:15px;'>&#9998;</button>

            <button name="deleted" value="` + todolist[i].name + `"  onclick="deleter()" style='font-size:15px;'>&#10008;</button></div>`;
        }
    }
    for (i = todolist.length - 1; i >= 0; i--) {
        if (todolist[i].done) {
            todolister = todolister + `
        <div>
            <span><del> ` + todolist[i].name + `</del></span>
            <input type="checkbox" name="done" id="` + todolist[i].name + `" onchange="oncheck()" value="` + todolist[i].name + `" `;
            if (todolist[i].done) {
                todolister += "checked";
            }
            todolister += `>
            <button name="edited" value="` + todolist[i].name + `" onclick="editor()" style='font-size:15px;'>&#9998;</button>
            <button name="deleted" value="` + todolist[i].name + `" onclick="deleter()" style='font-size:15px;'>&#10008;<?button></div>`;
        }
    }


    var b = document.getElementById("a");
    b.innerHTML = todolister;
}
tasklist();
// console.log(b)
// console.log(todolist)

function AddTask() {
    document.getElementById("task").innerHTML = `<input type="text" id="taskinput"></input> <button class="addbtn" onclick="SubmitTask()">OK</button>
    `;
}

function SubmitTask() {
    var a = document.getElementById("taskinput").value;
    var newTask = {
        "name": a,
        "done": false
    }
    todolist.push(newTask);
    tasklist();
    document.getElementById("task").innerHTML = "";
}