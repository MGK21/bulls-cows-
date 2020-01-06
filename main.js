window.onload = () => {
    var myNum = '1234';


    function isAnyNumberRepeat(num) {
        num = parseInt(num) + "";
        for (let i = 0; i < num.length; i++)
            if (num.match(new RegExp(num[i], "g")).length > 1) return true;
        return false;
    }

    function getGuessNumber() {
        var guessNum = document.getElementById("input").value;
        if (guessNum.length !== myNum.length || isNaN(parseInt(guessNum)) || isAnyNumberRepeat(guessNum)) {
            alert("Bad number!");
            return;
        }

        var bull = 0,
            cow = 0;
        for (let i = 0; i < myNum.length; i++) {
            if (guessNum[i] === myNum[i]) {
                bull++;
                cow--;
            }

            if (guessNum.includes(myNum[i])) {
                cow++;
            }
        }
        document.getElementById("result").innerHTML += "<p>" + "bull: " + bull + " cow: " + cow;
    }

    document.getElementById("butt").onclick = getGuessNumber;

}