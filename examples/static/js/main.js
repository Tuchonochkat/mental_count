let dictOfTasks = {
    '12 + 8': task0,
    'rand +- rand': task1,
    '1234 - 135': task2,
    '1234 + 456 - 234 - 56': task3,
};

function changetask(cell1, cell2, typeOfTask, numberOfDigits) {
    cell1.innerHTML = dictOfTasks[typeOfTask](numberOfDigits)[0];
    cell2.innerHTML = ' = ' + dictOfTasks[typeOfTask](numberOfDigits)[1];
}

// function changetask(cell1,cell2,typeOfTask,numberOfDigits) {
//     alert(cell1);
// }

function runScript(e) {
    if (e.keyCode == 13) {
        showResult();
        return false;
    }
}

function showResult() {
    let numberOfTasks = parseInt(document.getElementsByName("numberOfTasks")[0].value);
    let typeOfTask = document.getElementsByName("typeOfTask")[0].value;
    checkBox = document.getElementsByName("showAnswers")[0]; 
    let block_of_tasks = document.createElement('table');
    block_of_tasks.id = 'blockOfTasks';
    let tasks = creating_block(numberOfTasks, typeOfTask);
    for (let i = 0; i < numberOfTasks; i++){
        let row = block_of_tasks.insertRow(i);
        let cell1 = row.insertCell(0);
        cell1.innerHTML = tasks[i][0];
        cell1.id = 'cell1' + i;
        let cell2 = row.insertCell(1);
        cell2.innerHTML = ' = ' + tasks[i][1];
        cell2.id = 'cell2' + i;
        if (checkBox.checked == false) cell2.style.display = "none";
        let cell3 = row.insertCell(2);
        let changeTaskButton = document.createElement('button');
        changeTaskButton.innerHTML = 'Заменить';
        changeTaskButton.id = 'changebutton' + i;
        cell3.insertAdjacentElement('afterbegin', changeTaskButton);
    }
    let oldblock = document.getElementById("blockOfTasks");
    oldblock.replaceWith(block_of_tasks);
    for (let i = 0; i < numberOfTasks; i++){
        let Button = document.getElementById('changebutton' + i);
        Button.addEventListener('click', function(){
            changetask(
                document.getElementById('cell1' + i),
                document.getElementById('cell2' + i),
                document.getElementsByName("typeOfTask")[0].value,
                document.getElementsByName("numberOfDigits")[0].value,
            )
        }); 
    }
}

function showAnswers() {
    let checkBox = document.getElementsByName("showAnswers")[0]; 
    let numberOfTasks = parseInt(document.getElementsByName("numberOfTasks")[0].value);
    if (checkBox.checked == true){
        for (let i = 0; i < numberOfTasks; i++) {
            document.getElementById('cell2'+i).style.display = "";
        }
    } else {
        for (let i = 0; i < numberOfTasks; i++) {
            document.getElementById('cell2'+i).style.display = "none";
        }
    }
}

function creating_block(numberOfTasks, typeOfTask) {
    let block = [];
    for (let i= 0; i < numberOfTasks; i++) {
        block.push(dictOfTasks[typeOfTask](parseInt(document.getElementsByName("numberOfDigits")[0].value)));
    }
    return block;
}



function task0(numberOfDigits = 3) {
    // 12+8 or 134-34
    let x = Math.random();
    if (x < 0.5) {
        var ans = Math.floor(Math.random() * 9 + 1) * 10**(numberOfDigits-1);
        var sign = ' - ';
        var term2 = Math.floor(Math.random() * (10**numberOfDigits - ans));
        var term1 = term2 + ans;
    } else {
        var term1 = Math.floor(Math.random() * (10**(numberOfDigits-1)));
        var sign = ' + ';0
        var ans = (Math.floor(Math.random() * 9) + 1)*(10**(numberOfDigits-1))
        var term2 = ans - term1;     
    }
    let expression = term1.toString() + sign + term2.toString();
    let task = [expression, ans];
    return task;
}


function task1(numberOfDigits = 3) { 
    //rand +- rand
    let term1 = Math.floor(Math.random() * (10**numberOfDigits));
    let term2 = Math.floor(Math.random() * (10**numberOfDigits));
    let x = Math.random();
    if (x < 0.5) {
        var sign = ' - ';
        var ans = Math.max(term1, term2) - Math.min(term1, term2);
    } else {
        var sign = ' + ';
        var ans = Math.max(term1, term2) + Math.min(term1, term2);     
    }
    let expression = Math.max(term1, term2).toString() + sign + Math.min(term1, term2).toString();
    let task = [expression, ans];
    return task;
}

function task2(numberOfDigits = 3) { 
    //1234-135
    let term1 = Math.floor(Math.random() * (10**numberOfDigits));
    let ans = Math.floor(Math.random() * Number(term1.toString()[0]));
    let sign = ' - ';
    ans = ans * (10**(term1.toString().length - 1)) + 10**(term1.toString().length - 1) - 1;
    term2 = term1 - ans;
    let expression = term1.toString() + sign + term2.toString();
    let task = [expression, ans];
    return task;
}

function task3(numberOfDigits = 3) {
    //1234 + 456 - 234 - 56
    let pair1 = task0(numberOfDigits);
    let pair2 = task0(numberOfDigits);
    let expression = 
        pair1[0].substring(0, pair1[0].indexOf(' ')) +
        ' + ' +
        pair2[0].substring(0, pair2[0].indexOf(' ')) + 
        pair1[0].substring(pair1[0].indexOf(' ')) +
        pair2[0].substring(pair2[0].indexOf(' '));
    let ans = pair1[1] + pair2[1];
    let task = [expression, ans];
    return task;
}