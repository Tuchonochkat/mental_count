function runScript(e) {
    if (e.keyCode == 13) {
        showResult();
        return false;
    }
}

function showResult() {
    let numberOfTasks = parseInt(document.getElementsByName("numberOfTasks")[0].value);
    let block_of_tasks = document.createElement('table');
    block_of_tasks.id = 'blockOfTasks';
    let tasks = creating_block(numberOfTasks);
    for (let i = 0; i < numberOfTasks; i++){
        let row = block_of_tasks.insertRow(i);
        let cell1 = row.insertCell(0);
        cell1.innerHTML = tasks[i][0];
        let cell2 = row.insertCell(1);
        cell2.innerHTML = ' = ' + tasks[i][1];
    }
    let oldblock = document.getElementById("blockOfTasks");
    oldblock.replaceWith(block_of_tasks);
}

function creating_block(numberOfTasks) {
    let block = [];
    for (let i= 0; i < numberOfTasks; i++) {
        block.push(task1(parseInt(document.getElementsByName("numberOfDigits")[0].value)));
    }
    return block;
}

function task1(numberOfDigits = 4) {
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