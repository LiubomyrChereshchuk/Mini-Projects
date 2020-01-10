const numAndLetter = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 65, 83, 68, 70, 71, 72, 74, 75, 76, 90, 88, 67, 86, 66, 78, 77];

const othersWithOutCaps = [192, 189, 187, 8, 9, 219, 221, 220, 20, 186, 222, 13, 16, 188, 190, 191, 16, 17, 91, 18, 32, 18, 93, 17];


//arr with nums

let nums = document.querySelectorAll('.num');
nums = Array.from(nums);

//arr with letters

let letters = document.querySelectorAll('.letter');
letters = Array.from(letters);

// arr with nums and letters

const numsAndLetters = nums.concat(letters);

//set attribute to nums and letters

for (let i = 0; i < numsAndLetters.length; i++) {
    numsAndLetters[i].setAttribute('data', numAndLetter[i]);
    numsAndLetters[i].classList.add('nums-and-letters');
}


// other keys

let otWhOuCa = document.querySelectorAll('.without-caps');
otWhOuCa = Array.from(otWhOuCa);

for (let i = 0; i < otWhOuCa.length; i++) {
    otWhOuCa[i].setAttribute('data', othersWithOutCaps[i]);
}


// events for all keys

let j = 0;

document.querySelector('input').addEventListener('keydown', (event) => {
    if (numAndLetter.includes(event.keyCode)) {
        document.querySelectorAll('.nums-and-letters').forEach((element) => {
            element.classList.remove('pressed');
        });
        document.querySelector(`.nums-and-letters[data='${event.keyCode}']`).classList.add('pressed');
    }
    else if (othersWithOutCaps.includes(event.keyCode)) {
        if (event.keyCode == 20) {
            j++;
            if (j % 2 == 0) {
                document.querySelector('.capslk').classList.remove('pressed');
            }
            else {
                document.querySelector('.capslk').classList.add('pressed');
            }
        }

        else {
            document.querySelectorAll('.without-caps').forEach((element) => {
                element.classList.remove('pressed');
            });
            document.querySelector(`.without-caps[data='${event.keyCode}']`).classList.add('pressed');
        }
    }
});

//remove class pressed
document.querySelector('input').addEventListener('keyup', (event) => {
    document.querySelectorAll('.nums-and-letters').forEach((element) => {
        element.classList.remove('pressed');
    });
});

document.querySelector('.capslk').classList.remove('without-caps');


document.querySelector('input').addEventListener('keyup', (event) => {
    document.querySelectorAll('.without-caps').forEach((element) => {
        element.classList.remove('pressed');
    });

});
