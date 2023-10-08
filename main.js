//csvからjsonへ変換
import { csvToJson } from './csv.js';
//fetch('./custom.csv')
//    .then( (res)=>{
//        return res.text();
//    })
//    .then((text)=>{
//        let jsonObj = csvToJson(text, {
//	        header     : 1,
//	        columnName : ['id', 'top', 'center','under','file_name','shop_item_id']
//        });
//        console.log(jsonObj);
//    });

(async ()=>{
    const res = await fetch('./custom.csv');
    const csvData = await res.text();
    const JsonObj = csvToJson(csvData, {
        header     : 1,
        columnName : ['id', 'top', 'center','under','file_name','shop_item_id']
    });    
    console.log(JsonObj);
})();