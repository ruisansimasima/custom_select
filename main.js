//csvからjsonへ変換
import { csvToJson } from './csv.js';


(async ()=>{
    const res = await fetch('./custom.csv');
    const csvData = await res.text();
    const JsonObj = csvToJson(csvData, {
        header     : 1,
        columnName : ['id', 'top', 'center','under','file_name','shop_item_id']//csvの1行目カテゴリー
    });    

    let toplength = [];
    JsonObj.forEach((value)=>{
        toplength.push(value.top);
    });
    let setTop = Array.from(new Set(toplength));//重複を除いたtop
    let select01Zone = document.getElementsByClassName('select01_zone');
    for(let i=0; i<setTop.length; i++){
        let input = document.createElement('input');
        input.setAttribute("type","radio");
        input.setAttribute("name","top");
        input.setAttribute("data-top-parts",setTop[i]);
        input.setAttribute("id",setTop[i]);
        input.setAttribute("class","radio_button");
        select01Zone[0].appendChild(input);

        let label = document.createElement('label');
        label.setAttribute("for",setTop[i]);
        label.innerText = setTop[i];
        select01Zone[0].appendChild(label);
    }

    let centerlength = [];
    JsonObj.forEach((value)=>{
        centerlength.push(value.center);
    });
    let setCenter = Array.from(new Set(centerlength));//重複を除いたcenter
    let select02Zone = document.getElementsByClassName('select02_zone');
    for(let i=0; i<setCenter.length; i++){
        let input = document.createElement('input');
        input.setAttribute("type","radio");
        input.setAttribute("name","center");
        input.setAttribute("data-center-parts",setCenter[i]);
        input.setAttribute("id",setCenter[i]);
        input.setAttribute("class","radio_button");
        select02Zone[0].appendChild(input);

        let label = document.createElement('label');
        label.setAttribute("for",setCenter[i]);
        label.innerText = setCenter[i];
        select02Zone[0].appendChild(label);
    }

    let underlength = [];
    JsonObj.forEach((value)=>{
        underlength.push(value.under);
    });
    let setUnder = Array.from(new Set(underlength));//重複を除いたunder
    let select03Zone = document.getElementsByClassName('select03_zone');
    for(let i=0; i<setUnder.length; i++){
        let input = document.createElement('input');
        input.setAttribute("type","radio");
        input.setAttribute("name","under");
        input.setAttribute("data-under-parts",setUnder[i]);
        input.setAttribute("id",setUnder[i]);
        input.setAttribute("class","radio_button");
        select03Zone[0].appendChild(input);

        let label = document.createElement('label');
        label.setAttribute("for",setUnder[i]);
        label.innerText = setUnder[i];
        select03Zone[0].appendChild(label);
    }

    changeImage(toplength,centerlength,underlength,JsonObj);
})();

//メイン画像変更処理
function changeImage(toplength,centerlength,underlength,JsonObj){
    console.log(toplength);
    console.log(centerlength);
    console.log(underlength);
    console.log(JsonObj);

}


window.addEventListener('load',()=>{
    //読み込み時のボタンの初期値
    let selectZone = document.querySelectorAll(".select_zone");
    for(let i=0;i<selectZone.length;i++){
        let inputRadio = selectZone[i].querySelectorAll(".radio_button");
        inputRadio[0].checked = true;
    }
},false);
