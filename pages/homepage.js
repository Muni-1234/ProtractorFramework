let homepage = function () {

    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let gobutton = element(by.css('[ng-click="doAddition()"]'));

    this.get = function (url) {
        browser.get(url);
    }

    this.enterfirstNumber = function (firstNo) {
        firstNumber_input.sendKeys(firstNo);
    }

    this.entersecondNumber = function (secondNo) {
        secondNumber_input.sendKeys(secondNo);
    }

    this.clickGo = function () {
        gobutton.click();
    }

    this.verifyResult = function (result) {
        let output = element(by.cssContainingText('.ng-binding', result));
        //let output = element(by.xpath("//h2[contains(text(),"+result+")]"));
        expect(output.getText()).toEqual(result);
    }

};

module.exports = new homepage();