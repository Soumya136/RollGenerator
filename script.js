let generate1 = document.getElementById('btn1');
generate1.addEventListener('click', () => {
    const roll = ["008", "060", "110", "151", "160", "199", "211"]
    // let min = document.getElementById('min').value;
    // let max = document.getElementById('max').value;
    let random_num= Math.floor(Math.random() * roll.length);
    let output1 = roll[random_num];
    document.getElementById('output1').innerHTML = output1;
    
    
})    
let generate2 = document.getElementById('btn2');
generate2.addEventListener('click', () => {
    let min=0;
    let max=240;
    // let min = document.getElementById('min').value;
    // let max = document.getElementById('max').value;
    let random_num= Math.floor(Math.random()*(max-min) + +min);
    document.getElementById('output2').innerHTML = ` ${random_num}`;
    
})    