const left = document.getElementById('left');
const right = document.getElementById('right');

let first = document.getElementById('first').children[0];
let second = document.getElementById('second').children[0];
let third = document.getElementById('third').children[0];

let imageCount = document.getElementById('image-count');


const images = document.querySelector('img/img-1.jpg');
const nums = [1,2,3,4,5,6,7,8];

const numLength = nums.length;

let current = nums[0];
updateCount(current);

first.src = `img/img-${current}.jpg`;
second.src = `img/img-${current + 1}.jpg`;
third.src = `img/img-${current + 2}.jpg`;

right.addEventListener('click', () => {
    current++;
    
    first.src = `img/img-${current}.jpg`;
    second.src = `img/img-${current + 1}.jpg`;
    third.src = `img/img-${current + 2}.jpg`;

    if(current > nums.length - 2){
        third.src = `img/img-${numLength - numLength + 1}.jpg`;
        // third.src = `img/img-${7}.jpg`;
       
    }  
    if (current > numLength - 1){
        second.src = `img/img-${nums[0]}.jpg`;
        third.src = `img/img-${numLength - numLength + 2}.jpg`;
       
    }

    if(current > numLength){
        current = 1;
        console.log(numLength);
        first.src = `img/img-${current}.jpg`;
        second.src = `img/img-${current + 1}.jpg`;
        third.src = `img/img-${current + 2}.jpg`;
    }

    updateCount(current);
})

left.addEventListener('click', () => {
    current--;
    first.src = `img/img-${current}.jpg`;
    second.src = `img/img-${current + 1}.jpg`;
    third.src = `img/img-${current + 2}.jpg`;

    if(current === 0){
         current = numLength;
         first.src = `img/img-${numLength}.jpg`;
         second.src = `img/img-${nums[0]}.jpg`;
         third.src = `img/img-${nums[1]}.jpg`;
    }

    if(current === numLength - 1){
        first.src = `img/img-${numLength - 1}.jpg`;
        second.src = `img/img-${numLength}.jpg`;
        third.src = `img/img-${nums[0]}.jpg`;
   }

   if(current === numLength - 2){
        first.src = `img/img-${numLength - 2}.jpg`;
        second.src = `img/img-${numLength -1}.jpg`;
        third.src = `img/img-${numLength}.jpg`;
}
    
    updateCount(current);
})

function updateCount(count){
    imageCount.innerHTML = ` ${count}/${numLength}`;
    console.log(current);
}