export default function replayF() {
    
        let displayHtml = '';
    
        displayHtml = '<div id="startScreen">';
        displayHtml += '<h1>WORD GUESSING GAME</h1>';
        displayHtml += '<div id="about">';
        displayHtml += '<h2>About</h2>';
        displayHtml += '<text>';
        displayHtml += 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
        displayHtml += 'Soluta hic deleniti ratione quos nihil dolorum iusto voluptatum maiores minima atqueet'; 
        displayHtml += 'facere suscipit eligendi aliquam nobis sit, quasi consectetur magnam reiciendis animi ';
        displayHtml += 'quis tempore vel amet consequuntur. Vel quas odio laboriosam, veritatis, inventore ';
        displayHtml += 'quod repellendus corporis, consequuntur earum nihil labore?';
        displayHtml += '</text>';
        displayHtml += '</div>';
        displayHtml += '<div id="name">';
        displayHtml += '<div id = "player" contenteditable="true" data-text = "Player Name"></div>';
        displayHtml += '<p id = "error"></p>';
        displayHtml += '</div>';
        displayHtml += '<div>';
        displayHtml += '<button id = "start">START GAME</button>';
        displayHtml += '<div id = "progress">';
        displayHtml += '</div>';
        displayHtml += '</div>';
        displayHtml += '</div>';
        container.innerHTML = displayHtml;
    
}
