// Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use only whole words available in the magazine. He cannot use substrings or concatenation to create the words he needs.

// Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

// For example, the note is "Attack at dawn". The magazine contains only "attack at dawn". The magazine has all the right words, but there's a case mismatch. The answer is .

// Function Description

// Complete the checkMagazine function in the editor below. It must print  if the note can be formed using the magazine, or .

// checkMagazine has the following parameters:


function checkMagazine(magazine, note) {

    const map = {};
    `${magazine}`.trim().split(' ').forEach((word) => {
        if (!map[word]) {
            map[word] = 0;
        }

        map[word]++;
    });

    let matched = true;
    `${note}`.trim().split(' ').forEach((word) => {
        if (!map[word]) {
            matched = false;
        }else {
            map[word]--;
        }
    });

    console.log(matched ? 'Yes' : 'No');
}

console.log(checkMagazine('give me one grand today night', 'give one grand today'));