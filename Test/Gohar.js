module.exports={

   "Test 1":(browser)=>{

        /* Given I have user logged into metabase
	When I click on New
 	And I select Question
	And I select <data>	
And I select <filter>
And I select <summarize> 
And press visualize 
	Then system will search in the metabase
	And show the result  */
 
        browser.url('http://localhost:3000/auth/login?redirect=%2F');
        browser.setValue('input[type=email','gohar350butt@gmail.com');
        browser.setValue('input[type=password','Butt9604');
        browser.click('button[type=submit]');
        //Question
        browser.click('#root > div > header > div > div.css-11x9xqg.e4w71dr2 > div.css-16y0tgk.e8mjkge0 > span:nth-child(1) > button')
        browser.click('body > span.PopoverContainer.PopoverContainer--open.popover.tether-element.tether-element-attached-top.tether-target-attached-bottom.tether-element-attached-right.tether-target-attached-right.tether-enabled > span > div > div > div > ol > li:nth-child(1) > a > div > span')
        browser.click('#DatabaseSchemaPicker > div > div:nth-child(1) > div > span')
        browser.click('#DataPopover > div > div > div:nth-child(2) > div > span > div > h4')

        browser.click('#root > div > div > main > div > div > div.css-mypnpf.eb9z3dt6 > div > div > button');
        browser.pause(2000);

        browser.click('#root > div > header > div > div.css-11x9xqg.e4w71dr2 > div.css-1rsu45y.e4w71dr0 > div > div > button');
        browser.pause(2000);
        browser.click('body > span > span > div > div > div > ol > li:nth-child(6) > div > div > span');
        browser.pause(10000);
   },

     "Test 2":(browser)=>{

        /*Given I have user present at search result page
	When I click visualization
	And I select <option>
	Then I am forwarded to chart page
	When I select <x-axis> 
And I select <y-axis> 
	Then system will show my result in <option> format */

 
        browser.url('http://localhost:3000/auth/login?redirect=%2F');
        browser.setValue('input[type=email','gohar350butt@gmail.com');
        browser.setValue('input[type=password','Butt9604');
        browser.click('button[type=submit]');
        //Question
        browser.click('#root > div > header > div > div.css-11x9xqg.e4w71dr2 > div.css-16y0tgk.e8mjkge0 > span:nth-child(1) > button')
        browser.click('body > span.PopoverContainer.PopoverContainer--open.popover.tether-element.tether-element-attached-top.tether-target-attached-bottom.tether-element-attached-right.tether-target-attached-right.tether-enabled > span > div > div > div > ol > li:nth-child(1) > a > div > span')
        browser.click('#DatabaseSchemaPicker > div > div:nth-child(1) > div > span')
        browser.click('#DataPopover > div > div > div:nth-child(2) > div > span > div > h4')
        //on Visual page
        browser.click('#root > div > div > main > div > div > div.css-mypnpf.eb9z3dt6 > div > div > button');
        browser.pause(2000);
        
        //Bar Graph
        browser.click('#root > div > div > main > div > div > div.css-mypnpf.eb9z3dt6 > main > div.flex-no-shrink.text-medium.border-top.e1015zze0.css-1t2lqp6.e11094na0 > div > div.css-3udtc7.e1sb1lcw2 > button.Button.ehoej4n0.Button--medium.css-1q1ckx.emiw9oj2 > div > div ');
        browser.click('#root > div > div > main > div > div > div.css-mypnpf.eb9z3dt6 > aside.css-1rpciof.e1e6x9or1 > div > div > div > div:nth-child(2) > div:nth-child(2) ');

        //x-axis userid
        browser.click('#root > div > div > main > div > div > div.css-mypnpf.eb9z3dt6 > aside.css-1rpciof.e1e6x9or1 > div > div > div > div.flex.flex-column > div.full-height.relative.scroll-y.scroll-show.pt3.pb4 > div:nth-child(1) > div > div.flex.align-center > a > button');
        browser.click('body > span.PopoverContainer.PopoverContainer--open.popover.tether-element.tether-abutted.tether-abutted-left.tether-element-attached-top.tether-element-attached-left.tether-target-attached-bottom.tether-target-attached-left.tether-enabled > span > div > div > div > div:nth-child(3) > div > span');

        //y-axis total
        browser.click('#root > div > div > main > div > div > div.css-mypnpf.eb9z3dt6 > aside.css-1rpciof.e1e6x9or1 > div > div > div > div.flex.flex-column > div.full-height.relative.scroll-y.scroll-show.pt3.pb4 > div:nth-child(2) > div > div.flex.align-center > a');
        browser.click('body > span > span > div > div > div > div:nth-child(4) > div > span');

        //Done
        browser.click('#root > div > div > main > div > div > div.css-mypnpf.eb9z3dt6 > aside.css-1rpciof.e1e6x9or1 > div > div > button > div > div');
        browser.pause(2000);


        browser.click('#root > div > header > div > div.css-11x9xqg.e4w71dr2 > div.css-1rsu45y.e4w71dr0 > div > div > button');
        browser.pause(2000);
        browser.click('body > span > span > div > div > div > ol > li:nth-child(6) > div > div > span');
        browser.pause(10000);
    },    

    "Test 3":(browser)=>{


        /*
        Given I have user present at search result page
	When I click save
	And I write the <name>
	And I write description <description>
	And I select the <folder>
	Then I am asked to save this to dashboard
	When I select <option> 
	Then system will <response> my search

         */
 
  
         browser.url('http://localhost:3000/auth/login?redirect=%2F');
         browser.setValue('input[type=email','gohar350butt@gmail.com');
         browser.setValue('input[type=password','Butt9604');
         browser.click('button[type=submit]');
         //Question
         browser.click('#root > div > header > div > div.css-11x9xqg.e4w71dr2 > div.css-16y0tgk.e8mjkge0 > span:nth-child(1) > button')
         browser.click('body > span.PopoverContainer.PopoverContainer--open.popover.tether-element.tether-element-attached-top.tether-target-attached-bottom.tether-element-attached-right.tether-target-attached-right.tether-enabled > span > div > div > div > ol > li:nth-child(1) > a > div > span')
         browser.click('#DatabaseSchemaPicker > div > div:nth-child(1) > div > span')
         browser.click('#DataPopover > div > div > div:nth-child(2) > div > span > div > h4')
         //on Visual page
         browser.click('#root > div > div > main > div > div > div.css-mypnpf.eb9z3dt6 > div > div > button');
         browser.pause(2000);
         
         //Save Search
         browser.click('#root > div > div > main > div > div > div.css-2mi1c6.eb9z3dt3 > div > div.css-1mjo75b.e17ixpr11 > span');
         browser.setValue('input[name=name','Gohar Search');
         browser.pause(2000);
         browser.click('#SaveQuestionModal > div.ModalBody.px4 > div > form > div.css-1rw7jxi.etf22zm0 > button.Button.Button.eyw0xx60.Button--primary.css-1sur1e6.emiw9oj2');
         browser.click('#QuestionSavedModal > div.ModalBody.px4 > div > div > button.Button.Button--primary');
         browser.click('#AddToDashSelectDashModal > div.ModalBody.px4 > div > div > div > div.css-umwchj.e1u5yeuo0 > div:nth-child(2) > div');
         browser.click('#AddToDashSelectDashModal > svg');
         browser.pause('2000');
 
         browser.click('#root > div > header > div > div.css-11x9xqg.e4w71dr2 > div.css-1rsu45y.e4w71dr0 > div > div > button');
         browser.pause(2000);
         browser.click('body > span > span > div > div > div > ol > li:nth-child(6) > div > div > span');
         browser.pause(10000);
     }

}