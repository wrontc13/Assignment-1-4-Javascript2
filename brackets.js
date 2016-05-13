function checkbrackets(string, letter1, letter2) {
    var count1 = 0;
    var count2 = 0;
    var correct = "correct";
    var incorrect = "incorrect";
    for (var i=0, l=string.length; i<string.length; i += 1) {
        if (string[i] === letter1) {
            count1 += 1;
           
           
        }
        if (string[i] === letter2) {
            count2 += 1;
     
        }
        
    }
    if (count1 == count2) {
        return correct;
    }
    else
        return incorrect;
}

var div = document.getElementById('data')
var div2 = document.getElementById('data2')
var div3 = document.getElementById('data3')

div.textContent = checkbrackets("('( ( a + b ) / 5 abd )');", ")", "(")
div2.textContent = checkbrackets("(') ( a + b ) )');", ")", "(")
div3.textContent = checkbrackets("('(b * ( c + d *2 / ( 2 + ( 12 abc / ( 2 + 3 ) ) ) ) ' );", ")", "(")
