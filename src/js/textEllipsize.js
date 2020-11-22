function ellipsizeTextBox(id) {
    var el = document.getElementById(id);
    var wordArray = el.innerHTML.split(' ');
    while(el.scrollHeight > el.offsetHeight) {
        wordArray.pop();
        wordArray.pop();
        wordArray.pop();
        el.innerHTML = wordArray.join(' ') + '...';
     }
}
ellipsizeTextBox('myelem');