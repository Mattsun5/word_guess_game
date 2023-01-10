// traverse word and give index using dictionary or object. 
// index is arranged randomly and compared so its not ordered
// the correct answeris added to the end labelled answer

// object is sent to questions
export default function scrambleHandler(word){
    


    var scrambleWord = [];

    var wordSelected = word;
    // console.log(wordArr[pickedQuest]);
    
    // function check(range, picked, values){
    //     let newVal = random(range) - 1;
    //     // console.log('enter val' + picked);
    //     if (values.includes(newVal) || picked === newVal || newVal == '' || newVal === undefined){
    //         check(range, picked, values);
    //     }
    //     if (newVal){
    //         // console.log(typeof newVal);
    //         return newVal;
    //     }
    //     check(range, picked, values);
    // }

    for (let i = 0; i < wordSelected.length; i++) {
        scrambleWord[i] = wordSelected[i];
    }

    // function scramble(arr) {
        scrambleWord.sort(() => Math.random() - 0.5);
    //   }

    // console.log(wordSelected);
    // scramble(d);
    //   alert(scrambleWord);
    let scrambleString = scrambleWord.join('');
    let scrambledWord = scrambleString.toString();
    if (scrambledWord === wordSelected){
        let send = '';
        for (let i = scrambledWord.length - 1; i >= 0; i--) {
            send += scrambledWord[i];
            // console.log(send);
        }
        // console.log('finally ' + send);
        return send;
    }
    else {
        // console.log(scrambledWord);
        return scrambledWord;
    }
}