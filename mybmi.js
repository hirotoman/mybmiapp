// alert("Hello World!")


//フォームに入力した情報を計算
function onButtonClick() {
    console.log('clicked');

    //体重のフォームに入力した値を取得
    var weightInput = document.getElementById("weightInput");
    console.log(weightInput.value);


    //身長のフォームに入力した値を取得
    var heightInput = document.getElementById("heightInput");
    console.log(heightInput.value);
    var height = heightInput.value
    var weight = weightInput.value

    //身長が空欄の場合エラーを表示
    if  (height == '') {
        alert('身長を入力してください');
        return;
    }


    //BMIのスコアを定義
    var score = weight / (height * height);
    var message = '';
    var className = '';
    console.log(score);

    //BMIのスコアによって結果を出し分ける
    if (score >= 25) {
        message  = "肥満体型";
        className = 'high';
    } else if (score >= 18.5) {
        message  = "標準体型";
        className = 'middle';
    } else {
        message  = "痩せ型";
        className = 'low';
    }

    //スコアを取得して小数点第二位まで表示
    var scoreSpan = document.getElementById('score');
    scoreSpan.innerText = score.toFixed(2);

    //スコアによってメッセージを表示
    var messageSpan = document.getElementById('message');
    messageSpan.innerText = message;

    //結果表示エリア
    var resultDiv = document.getElementById('result');
    resultDiv.classList.remove('high', 'middle', 'low');
    resultDiv.classList.add(className);

    console.log(message);
}

var btn = document.getElementById("btn");
btn.addEventListener('click', onButtonClick)


console.log("hello")