const titles = [];
var clickCount = 0;  // クリックした回数を保持する変数

let a ="";
let b ="";
let c ="";
let d ="";
let e ="";
let f ="";
let g ="";
let h ="";
let i ="";
let j ="";
let k ="";
let l ="";
let m ="";
let n ="";
let o ="";
let p ="";
let q ="";
let r ="";
let ss ="";
let tt ="";

//commandキーで送信
$("#content").keydown(function (event) {
    console.log(event);
    if(event.keyCode == 91){
        clickCount++;  // クリック回数をインクリメント
    let click = clickCount;
     //themeに表示されているものを削除
    $("#theme").empty();
    //beforeに表示されているものを削除
    $("#before").empty();
    
    //inputのvalueを取得
    const s = $("#input").val();
     //contentのvalueを取得
     const t = document.getElementById("content");
     var text = t.value;
     var html = text.replace(/\n/g, "<br>");
     //クリックしたら要素を空に戻す
    $("#input").val('');
    $("#content").val("");
     //表示させる
     $("#theme").html(s);
     var displayElement = document.querySelector("#before");
     displayElement.innerHTML = html;
 
     //localstorageに保存する
     //回数別に区別したい…
     localStorage.setItem("input"+click,s);
     localStorage.setItem("content"+click,text);

     //localstorageに保存した内容を取得したい
     localStorage.getItem("input"+click); //Clickは1からスタート
     localStorage.getItem("content"+click);
 
    a = localStorage.getItem("input1"); //Clickは1からスタート
    b = localStorage.getItem("content1");
    c = localStorage.getItem("input2"); 
    d = localStorage.getItem("content2");
    e = localStorage.getItem("input3"); 
    f = localStorage.getItem("content3");
    g = localStorage.getItem("input4"); 
    h = localStorage.getItem("content4");
    i = localStorage.getItem("input5"); 
    j = localStorage.getItem("content5");
    k = localStorage.getItem("input6"); 
    l = localStorage.getItem("content6");
    m = localStorage.getItem("input7"); 
    n = localStorage.getItem("content7");
    o = localStorage.getItem("input8"); 
    p = localStorage.getItem("content8");
    q = localStorage.getItem("input9"); 
    r = localStorage.getItem("content9");
    ss = localStorage.getItem("input10"); 
    tt = localStorage.getItem("content10");
    console.log(a);
    console.log(b);
    
    
//過去ログに表示する
$("#a").html(a);
$("#b").html(b);
$("#c").html(c);
$("#d").html(d); 
$("#e").html(e); 
$("#f").html(f);  
$("#g").html(g); 
$("#h").html(h); 
$("#i").html(i); 
$("#j").html(j); 
$("#k").html(k); 
$("#l").html(l); 
$("#m").html(m); 
$("#n").html(n);
$("#o").html(o);
$("#p").html(p);
$("#q").html(q);
$("#r").html(r); 
$("#s").html(ss); 
$("#t").html(tt);
    
    }
  });



$("#send").on("click",function(){
    clickCount++;  // クリック回数をインクリメント
    let click = clickCount;
     //themeに表示されているものを削除
    $("#theme").empty();
    //beforeに表示されているものを削除
    $("#before").empty();
    
    //inputのvalueを取得
    const s = $("#input").val();
     //contentのvalueを取得
     const t = document.getElementById("content");
     var text = t.value;
     var html = text.replace(/\n/g, "<br>");
     //クリックしたら要素を空に戻す
    $("#input").val('');
    $("#content").val("");
     //表示させる
     $("#theme").html(s);
     var displayElement = document.querySelector("#before");
     displayElement.innerHTML = html;
 
     //localstorageに保存する
     //回数別に区別したい…
     localStorage.setItem("input"+click,s);
     localStorage.setItem("content"+click,text);

     //localstorageに保存した内容を取得したい
     localStorage.getItem("input"+click); //Clickは1からスタート
     localStorage.getItem("content"+click);
 
    a = localStorage.getItem("input1"); //Clickは1からスタート
    b = localStorage.getItem("content1");
    c = localStorage.getItem("input2"); 
    d = localStorage.getItem("content2");
    e = localStorage.getItem("input3"); 
    f = localStorage.getItem("content3");
    g = localStorage.getItem("input4"); 
    h = localStorage.getItem("content4");
    i = localStorage.getItem("input5"); 
    j = localStorage.getItem("content5");
    k = localStorage.getItem("input6"); 
    l = localStorage.getItem("content6");
    m = localStorage.getItem("input7"); 
    n = localStorage.getItem("content7");
    o = localStorage.getItem("input8"); 
    p = localStorage.getItem("content8");
    q = localStorage.getItem("input9"); 
    r = localStorage.getItem("content9");
    ss = localStorage.getItem("input10"); 
    tt = localStorage.getItem("content10");
    console.log(a);
    console.log(b);
    
    
//過去ログに表示する
$("#a").html(a);
$("#b").html(b);
$("#c").html(c);
$("#d").html(d); 
$("#e").html(e); 
$("#f").html(f);  
$("#g").html(g); 
$("#h").html(h); 
$("#i").html(i); 
$("#j").html(j); 
$("#k").html(k); 
$("#l").html(l); 
$("#m").html(m); 
$("#n").html(n);
$("#o").html(o);
$("#p").html(p);
$("#q").html(q);
$("#r").html(r); 
$("#s").html(ss); 
$("#t").html(tt);

});


//結果をツイートできるようにしたい
$("#tweet").on("click",function(){
    const theme = $("#input").val();
    const action = $("#content").val();
    const tweet ="https://twitter.com/intent/tweet?text="+encodeURIComponent(`メモ書きをしたよ!! \nテーマ：${theme} \nアクションプラン ：${action}`)+'&hashtags=今日のメモ書き';
    window.open(tweet);
})


//以下、タイマー部分は写経
//001----------javascriptの開始--------------------------------------------------
    window.onload = function(){
//002----------スタートボタンをクリックして発火--------------------------------------
        var start = document.getElementById("start");
        start.addEventListener("click",count_start, false);
//003----------ストップボタンをクリックして発火--------------------------------------
        var stop = document.getElementById("stop");
        stop.addEventListener("click",count_stop,false);
//004----------リセットボタンをクリックして発火--------------------------------------

        var reset =document.getElementById("reset");
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
            $("#input").html("アクションプラン");//アクションプランを考えられるように誘導
        }
        if(count ===1){
            end.play(); //終了のアナウンス
            var display = document.getElementById('default');
            display.style.color = "red";
            display.innerHTML = "終了です。"
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


        $("#clear").on("click",function(){
            localStorage.removeItem("input1");
            localStorage.removeItem("input2");
            localStorage.removeItem("input3");
            localStorage.removeItem("input4");
            localStorage.removeItem("input5");
            localStorage.removeItem("input6");
            localStorage.removeItem("input7");
            localStorage.removeItem("input8");
            localStorage.removeItem("input9");
            localStorage.removeItem("input10");
            
            localStorage.removeItem("content1");
            localStorage.removeItem("content2");
            localStorage.removeItem("content3");
            localStorage.removeItem("content4");
            localStorage.removeItem("content5");
            localStorage.removeItem("content6");
            localStorage.removeItem("content7");
            localStorage.removeItem("content8");
            localStorage.removeItem("content9");
            localStorage.removeItem("content10");

            alert("削除しました");
            $("#input").val("");
            $("#content").val("");
        });