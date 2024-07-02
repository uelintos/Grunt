document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form').addEventListener('submit', function (e) { 
        e.preventDefault();
        let maxNum = document.getElementById('maxNum').value;
        maxNum = parseInt(maxNum);

        let randomNum = Math.random() * maxNum;
        randomNum = Math.floor(randomNum + 1);

        document.getElementById('result').innerText = randomNum;
        document.querySelector('.text-result').style.display = "block";
    })
})  