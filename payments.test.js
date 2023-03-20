describe("payments tests(with setup and tear-down)", function(){

    beforeEach(function(){
        billAmtInput.value = '100';
        tipAmtInput.value = '10';

    });

    it("should submit payment information", function(){
       submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment' + paymentId].billAmt).toEqual('100');
        expect(allPayments['payment' + paymentId].tipAmt).toEqual('10');
        expect(allPayments['payment' + paymentId].tipPercent).toEqual(10);
    });

    it("should create a new current payment", function(){
       
       expect(createCurPayment()).toEqual({billAmt: '100',tipAmt:'10',tipPercent: 10});

    });

    it("should add payment to the table", function(){
    
    let curPayment = createCurPayment();
    allPayments['payment1'] = curPayment;

    appendPaymentTable(curPayment);

    let paymentTd = document.querySelectorAll('#paymentTable tbody tr td');

    expect(paymentTd.length).toEqual(3);
    expect(paymentTd[0].innerText).toEqual('$100');
    expect(paymentTd[1].innerText).toEqual('$10');
    expect(paymentTd[2].innerText).toEqual('10%');
    });

    afterEach (function () {
        allPayments = {};
        paymentId;
        billAmtInput.value = '';
        tipAmtInput.value = '';

   });
      

 });