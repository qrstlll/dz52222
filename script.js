// let counter = document.querySelector('.counter')
// let number = 0
// setInterval(function(){
// number++
// counter.innerHTML = number

// }, 0.01)

// let changeText = document.querySelector(".text")
//     let texts = ["діма", "дімас", "дмитро"]
//     let trueIndex = 0
//     setInterval(function(){
//         changeText.textContent = texts[trueIndex]
//         trueIndex = (trueIndex + 1) % texts.length
//      }, 2000)






let mess = 0;

const timeIn = setInterval(() => {
  mess++;
  console.log(`Повідомлення ${mess}`);
  
  if (mess === 5) {
    clearInterval(timeIn);
    console.log("Виконаннязупинено.");
  }
}, 2000);


let circle = document.querySelector(".circle");
setInterval(function(){
    const width = Math.floor(Math.random() * 400) + 1;
    circle.style.width = `${width}px`; 
    circle.style.height = `${width}px`; 
}, 600);


function startTime(){
    const seconds = document.querySelector('.time').value
    const spend = parseInt(seconds, 10)

    setTimeout(function() {
        alert(`${spend} секунд минуло!`);
      }, spend * 1000);


}



