let homepage = require('../pages/homepage');

describe('demo calculator tests', function () {

    it('addition test', function () {

        //With Page Object Model(POM) Approach:
        homepage.get('http://juliemr.github.io/protractor-demo/');

        browser.manage().window().maximize();
        expect(browser.getCurrentUrl()).toBe('http://juliemr.github.io/protractor-demo/');
        browser.sleep(2000);

        homepage.enterfirstNumber('5');
        homepage.entersecondNumber('5');
        homepage.clickGo();
        browser.sleep(3000);
        homepage.verifyResult('10')
        browser.sleep(3000);
    })

    it('substraction test', function () {

        //With Page Object Model(POM) Approach:
        homepage.get('http://juliemr.github.io/protractor-demo/');

        browser.manage().window().maximize();
        expect(browser.getCurrentUrl()).toBe('http://juliemr.github.io/protractor-demo/');
        browser.sleep(2000);

        homepage.enterfirstNumber('5');
        homepage.entersecondNumber('5');
        homepage.clickGo1();
        browser.sleep(2000);
        homepage.verifyResult('10')
        browser.sleep(2000);

    })

})