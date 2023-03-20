describe("helpers tests", function(){

    beforeEach(function(){
        
        billAmtInput.value = 100;
        tipAmtInput.value = 10;
        
    })
    it("should sum the total of all payments", function(){
    
       
        expect(sumPaymentTotal('tipAmt')).toEqual(0);
        submitPaymentInfo();
    
        expect(sumPaymentTotal('tipAmt')).toEqual(10);

        
    })


    it("should convert bill and tip amount to a percentage", function(){
        
        expect(calculateTipPercent('100', 10)).toEqual(10)
    })


    it("should add new value to table", function(){
        let newTr = document.createElement('tr');

        appendTd(newTr, 'test');
    
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
    })


})



