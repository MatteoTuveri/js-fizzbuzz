//Console Generator

for (let i = 1; i <= 100; i++) {

    const box = document.getElementById('console');
    box.innerHTML += `<div id="box-${i}" class="debug box"> ${i} </div>`;
    const boxOption = document.getElementById(`box-${i}`);

    if(i % 3 === 0 && i % 5 ===0){
        boxOption.classList.add("fizz-buzz");
        boxOption.innerHTML =`FizzBuzz`;
    }
    else if(i % 3 === 0 && i % 5 !==0){
        boxOption.classList.add("fizz");
        boxOption.innerHTML =`Fizz`;
    }
    else if(i % 3 !== 0 && i % 5 ===0){
        boxOption.classList.add("buzz");
        boxOption.innerHTML =`Buzz`;
    }
    else{
        boxOption.classList.add("normal");
    }

}