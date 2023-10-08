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
    console.log(setTop);
    for(let i=0 ; i<setTop.length; i++){
        let input = document.createElement('input');
        input.setAttribute("type","radio");
        input.setAttribute("name","top");
        select01Zone[0].appendChild(input);
    }

})();