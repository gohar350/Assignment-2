module.exports={

    "Test 1":(browser)=>{
        browser.url('http://localhost:3000/auth/login?redirect=%2F');
        browser.setValue('input[type=email','gohar350butt@gmail.com');
        browser.setValue('input[type=password','Butt9604');
        browser.click('button[type=submit]');
        browser.click('#root > div > header > div > div.css-11x9xqg.e4w71dr2 > div.css-1rsu45y.e4w71dr0 > div > div > button');
        browser.pause(2000);
        browser.click('body > span > span > div > div > div > ol > li:nth-child(6) > div > div > span');
        browser.pause(10000);
    }

};