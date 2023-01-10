// receives word from library, check if word is in array then request another, else add up and forward word to scrammbler
export default function wordPicker(wordArr){
    function random(range){
        let val = Math.floor(Math.random() * range) + 1;
        // console.log(val);
        return val;
    }
    let pickedQuest = random(wordArr.length) - 1;
    
    return wordArr[pickedQuest];

}