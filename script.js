
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

let button_text = document.getElementById("in_progress_button");
console.log(button_text.innerHTML);
var time = 500;
test();

async function test(){
    while (true){
        await delay(time)
        button_text.innerHTML = "Work in progress      ";
        await delay(time)
        button_text.innerHTML = "Work in progress .    ";
        await delay(time)
        button_text.innerHTML = "Work in progress . .  ";
        await delay(time)
        button_text.innerHTML = "Work in progress . . .";
    }
}
