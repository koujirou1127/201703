//index.htmlから必ず呼び出される最初の処理 load()
function load(){
    var restext = document.getElementById("restext");
    var savebtn = document.getElementById("save");
    var deletebtn = document.getElementById("delete");
    var loginbtn = document.getElementById("login");
    datachk()
//
    if (!window.localStorage) {
        restext.innerHTML = "web Storageに対応しておりません。";
        return;
    }

//load()から呼ばれるID、MAILがlocalstorageに入っているかどうかを判断して表示するHTMLを決定している
    function datachk() {
    //データを取得する
        var d = JSON.parse(localStorage.getItem("setdata"));
        if (d == null || d == ""){
//localstorageが空の場合にユーザ追加用のHTMLを呼び出す
            location.href='account_add.html';
            return;
        }else{
//localstorageに値が入っている場合はユーザ情報更新用のHTMLを呼び出す
            location.href='account_update.html';
        }
    };
};

// ユーザ情報を追加する"account_add.html"から呼び出される処理
function load2(){
    var restext = document.getElementById("restext");
    var savebtn = document.getElementById("save");
    var loginbtn = document.getElementById("login");
//保存する処理
    savebtn.addEventListener("click", function() {
    //
        var t = document.getElementById("mail").value;
        var n = document.getElementById("pass").value;
//入力データのNullチェック
        if ((t == null || t == "") || (n == null || n == "")) {
            restext.innerHTML = "データを入力してください";
            return;
        }

        var datalist = {
            mail: t,
            pass: n
        }

    //
    //データを保存する
        localStorage.setItem("setdata", JSON.stringify(datalist));
    //
        restext.innerHTML = "データを保存しました";

    //保存データを表示する
    //    display();
    }, true);

//アプリ画面（home.html）遷移する処理
    loginbtn.addEventListener("click", function() {
        var t = document.getElementById("mail").value;
        var n = document.getElementById("pass").value;
//入力データのNullチェック
        if ((t == null || t == "") || (n == null || n == "")) {
            restext.innerHTML = "ユーザ情報を登録してください";
            return;
        }
        location.href='home.html'; 
    });
}
// ユーザ情報を更新する"account_update.html"から呼び出される処理
function load3(){
    var restext3 = document.getElementById("restext");
    var updatebtn3 = document.getElementById("update");
    var deletebtn3 = document.getElementById("delete");
    var loginbtn3 = document.getElementById("login");
    display3()
//保存する処理
    updatebtn3.addEventListener("click", function() {
        localStorage.clear();
        var t = document.getElementById("mail").value;
        var n = document.getElementById("pass").value;
    
        if ((t == null || t == "") || (n == null || n == "")) {
            restext3.innerHTML = "データを入力してください";
            return;
        }

        var datalist = {
            mail: t,
            pass: n
        }

    //
    //データを保存する
        localStorage.setItem("setdata", JSON.stringify(datalist));
    //
        restext3.innerHTML = "データを更新しました";

    }, true);

//load3()から呼ばれるID、MAILがlocalstorageに入っているかどうかを判断して表示するHTMLを決定している
    function display3() {
    //データを取得する
    var d = JSON.parse(localStorage.getItem("setdata"));
    if (d == null || d == ""){
//localstorageが空の場合にユーザ追加用のHTMLを呼び出す
        location.href='account_add.html';
        return;
    }else{
//localstorageに値が入っている場合はユーザ情報更新用のHTMLを呼び出す

        var d = JSON.parse(localStorage.getItem("setdata"));
        document.getElementById("mail").value = d.mail;
        document.getElementById("pass").value = d.pass;
    }
};

//削除する処理
//削除処理後に再loadし、ユーザ情報追加画面を表示
deletebtn3.addEventListener("click", function() {
    window.localStorage.clear();
    var res = document.getElementById("res");
    for (var i = 0; i < res.childNodes.length; i++) {
        res.removeChild(res.childNodes.item(i));
    }
    //
    //restext3.innerHTML = "保存データを削除しました。";
    load();
}, true)

//アプリ画面（home.html）遷移する処理
loginbtn3.addEventListener("click", function() {
        var t = document.getElementById("mail").value;
        var n = document.getElementById("pass").value;
//入力データのNullチェック
        if ((t == null || t == "") || (n == null || n == "")) {
            restext3.innerHTML = "ユーザ情報を登録してください";
            return;
        }
        location.href='home.html'; 
});
}