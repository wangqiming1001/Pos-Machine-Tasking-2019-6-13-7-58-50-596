const {countProduts,fetchProduct,generateReceiptItem,countTotalPrice,assemble} = require('../main');


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
    console.log("receiptText",receiptText);
    expect(receiptText).toEqual(
    "Receipts\n--------------------\nPepsi-Cola   2   5\nCoca Cola    1   3\n--------------------\nPrice:13"
    );
});