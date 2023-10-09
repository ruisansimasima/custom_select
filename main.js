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
        select01Zone[0].appendChild(input);
    }

    let centerlength = [];
    JsonObj.forEach((value)=>{
        centerlength.push(value.center);
    });
    let setCenter = Array.from(new Set(centerlength));//重複を除いたcenter
    let select02Zone = document.getElementsByClassName('select02_zone');
    console.log(setCenter);
    for(let i=0; i<setCenter.length; i++){
        let input = document.createElement('input');
        input.setAttribute("type","radio");
        input.setAttribute("name","center");
        select02Zone[0].appendChild(input);
    }

    let underlength = [];
    JsonObj.forEach((value)=>{
        underlength.push(value.under);
    });
    let setUnder = Array.from(new Set(underlength));//重複を除いたunder
    let select03Zone = document.getElementsByClassName('select03_zone');
    console.log(setUnder);
    for(let i=0; i<setUnder.length; i++){
        let input = document.createElement('input');
        input.setAttribute("type","radio");
        input.setAttribute("name","under");
        select03Zone[0].appendChild(input);
    }

})();