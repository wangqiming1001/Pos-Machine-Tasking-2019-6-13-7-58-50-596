const {countProduts,fetchProduct,generateReceiptItem,countTotalPrice,assemble,generateReceipts} = require('../main');


it ('should count produt', () => {
    //given
    const codes = ['0003','0003','0001'];
    //when
    const countCodes = countProduts(codes);
    //then 
    expect(countCodes[0].count).toBe(2);
});


it ('should fetch product', () => {
    //given
    const code = "0003";
    //when
    const product = fetchProduct(code);
    //then
    expect(product[0]).toEqual(
        { id: '0003', name: 'Pepsi-Cola', price: 5 }
        );
});


it ('should generate receipt item', () => {
    //given
    const codes = ['0003','0003','0001'];
    //when
    const countCodes = generateReceiptItem(codes);
    //then
    console.log("countCodes",countCodes);
    //expect(countCodes[0].count).toBe(2);

});

it ('should count total price', () => {
    //given
    const countTotalPriceInput = [ 
        { name: 'Pepsi-Cola', price: 5, count: 2 },
        { name: 'Coca Cola', price: 3, count: 1 } 
    ];
    //when
    const totalPrice = countTotalPrice(countTotalPriceInput);
    //then
    console.log("totalPrice",totalPrice);

});


it ('should print receipt', () => {
    //given
    const assembleInput = ['0003','0003','0001'];
    
    //when
    var receiptText = assemble(assembleInput);
    //then
    console.log(receiptText);
    expect(receiptText).toEqual(
    "Receipts\n--------------------\nPepsi-Cola\t5\t2\nCoca Cola\t3\t1\n--------------------\nPrice:13"
    );
});

it ('should generate receipts', () => {
    //given
    const productCodes = ['0003','0003','0001'];
    //when
    var receipts = generateReceipts(productCodes);
    //then
    console.log(receipts);
    expect(receipts).toEqual(
    "Receipts\n--------------------\nPepsi-Cola\t5\t2\nCoca Cola\t3\t1\n--------------------\nPrice:13"
    );
});
