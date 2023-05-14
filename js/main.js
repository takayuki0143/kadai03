const titles = [];
$("#send").on("click",function(){
    //themeに表示されているものを削除
    $("#theme").empty();
    //beforeに表示されているものを削除
    $("#before").empty();
    
    //inputのvalueを取得
    const s = $("#input").val();
     //contentのvalueを取得
     const t = $("#content").val();
     //クリックしたら空欄に戻す
     $("#input").val('');
     $("#content").val('');
     console.log(s);
     console.log(t);
     //表示させる
     $("#theme").html(s);
     $("#before").html(t);
 
});

//結果をツイートできるようにしたい
$(".tweet").on("click",function(){
    const theme = $("#input").val();
    const action = $("#content").val();
    const tweet ="https://twitter.com/intent/tweet?text="+encodeURIComponent(`メモ書きをしたよ!! \nテーマ：${theme} \nアクションプラン ：${action}`)+'&hashtags=今日のメモ書き';
    window.open(tweet);
})


//以下、タイマー部分は写経
//001----------javascriptの開始--------------------------------------------------
    window.onload= function(){
//002----------スタートボタンをクリックして発火--------------------------------------
        let start = document.getElementById("start");
        start.addEventListener("click",count_start,false);
//003----------ストップボタンをクリックして発火--------------------------------------
        let stop = document.getElementById("stop");
        stop.addEventListener("click",count_stop,false);
//004----------リセットボタンをクリックして発火--------------------------------------

        let reset =document.getElementById("reset");
        reset.addEventListener("click",count_reset,false);
    }
//変数の定義---------------------------------------------------------------------
    var count = 600; //カウントダウンの数字を格納する変数
    var min = 0; //残り時間「分」を格納する変数
    var sec = 0; //残り時間「秒」を格納する変数
    var start_f = false; 
    var interval;
//004----------スタート開始------------------------------------------------------
    function count_start(){
        if(start_f === false){
            interval = setInterval(count_down,1000);
            start_f = true;
        }
    }
//005------------カウントダウンの開始---------------------------------------------
    function count_down(){
        if(count === 540){
            sound_a.play(); //1分経過のアナウンス
        }
        if(count === 480){
            sound_b.play(); //2分経過のアナウンス
        }
        if(count === 420){
            sound_c.play(); //3分経過のアナウンス
        }
        if(count === 360){
            sound_d.play(); //4分経過のアナウンス
        }
        if(count === 300){
            sound_e.play(); //5分経過のアナウンス
        }
        if(count === 240){
            sound_f.play(); //6分経過のアナウンス
        }
        if(count === 180){
            sound_g.play(); //7分経過のアナウンス
        }
        if(count === 120){
            sound_h.play(); //8分経過のアナウンス
        }
        if(count === 60){
            sound_i.play(); //9分経過のアナウンス
        }
        if(count ===1){
            end.play(); //終了のアナウンス
            var display = document.getElementById('default');
            display.style.color = "red";
            display.innerHTML = "時間です！"
            //音源を鳴らせるようにしたい
            
            clearInterval(interval);
        }else{
            count--;
//006----------Math.floor関数を使って小数点になった分を整数に変換する。---------------
            min = Math.floor(count / 60);
//007------------60秒で割ったあまりが秒となる-------------------------------------
            sec = count % 60;
            var count_down = document.getElementById("default");
            count_down.innerHTML = ("0"+min) + ":" + ("0"+sec).slice(-2); 
}
    }
//008-----------ストップボタンの押下---------------------------------------
        function count_stop(){
            clearInterval(interval);
            start_f = false;
        }
//009-----------リセットボタンの押下---------------------------------------
        function count_reset(){
            clearInterval(interval);
            count = 600;
            start_f = false;
            var count_down = document.getElementById("default");
            count_down.style.color = "black";
            count_down.innerHTML= "10:00";
        }

