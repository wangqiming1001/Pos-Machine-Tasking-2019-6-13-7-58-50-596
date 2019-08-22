const db = [
        {"id": "0001", "name" : "Coca Cola", "price": 3},
        {"id": "0002", "name" : "Diet Coke", "price": 4},
        {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
        {"id": "0004", "name" : "Mountain Dew", "price": 6},
        {"id": "0005", "name" : "Dr Pepper", "price": 7},
        {"id": "0006", "name" : "Sprite", "price": 8},
        {"id": "0007", "name" : "Diet Pepsi", "price": 9},
        {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
        {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
        {"id": "0010", "name" : "Fanta", "price": 12}
    ];

function countProduts(codes) {
    let array = [];
    let map = new Map();
    for(let i in codes){
        var code = codes[i]; 
        if(map.get(codes[i]) == undefined){        
            map.set(code,1);
        }else{
            map.set(code,map.get(code)+1);
        }
    }
    map.forEach((count,code)=>{
        array.push({code:code,count:count});
    });
    return array;
}

function fetchProduct(code){
    let array = [];
        for(let j in db){
            if(code == db[j].id){
                array.push(db[j]);
            }
        }   
    return array;
}

function generateReceiptItem(codes){
    let array = countProduts(codes);
    var productsInfo = [];
    array.forEach(function(item){
        var goodsInfo = fetchProduct(item.code);
        for(let k in goodsInfo){
            productsInfo.push({
                name:goodsInfo[k].name,
                price:goodsInfo[k].price,
                count:item.count
            });
        }
    });
    return productsInfo;
}

function countTotalPrice(receoptItem){
    var total = 0;
    receoptItem.forEach(function(item){
        total = total + item.price*item.count;
    });
    return total;
}

function assemble(assembleInput){
   let array =  generateReceiptItem(assembleInput);
   let totalMoney = countTotalPrice(array);
   console.log(totalMoney);
   let upper="Receipts\n--------------------\n";
   let middle="";
   let lower="--------------------\nPrice:"+totalMoney;
   array.forEach(item => {
        middle+=item.name+"\t"+item.price+"\t"+item.count+"\n";
   });
   let printReceipts = upper + middle + lower;
   return printReceipts;
  
}

function generateReceipts(productCodes){
    let receipts = assemble(productCodes);
    return receipts;
}

module.exports = {countProduts,fetchProduct,generateReceiptItem,countTotalPrice,assemble,generateReceipts};