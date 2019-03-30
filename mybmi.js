//alert("Hello World!")


 <script type="text/javascript" language="javascript">


//フォームに入力した情報を計算
    function onButtonClick() {
    	target = document.getElementById("result");
    	target.innerText = document.forms.id_calculation.id_textBox1.value;
    	//target.innerText = document.id_form1.id_textBox1.value;//これでもOK
        	}


//BMIのスコアを定義
    var score = 0;

//BMIのスコアによって結果を出し分ける
    if (score >= 25) {
    document.write(“あなたは肥満体型です。”);
    } else if (score >= 18.5) {
    document.write(“あなたは標準体型です。”);
    } else {
    document.write( “あなたは痩せ型です。”);
    }



  </script>

