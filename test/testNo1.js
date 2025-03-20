const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require('assert');
// const should = require('chai').should();
//  reiketu su sita biblioteka dirbti arba sus ekancia chai, bet neveikia ir niekas negali pasakyti kodel :)
// import { expect } from 'chai';

describe('should add new todo tests', function() {
    
    after(async function() {
        await driver.quit();
    });
    
    it('should add a new to do', async function() {
        driver = await new Builder().forBrowser('chrome').build(); //atsidaro narsykle
        await driver.get('https://todolist.james.am/');
        await driver.wait(until.elementLocated(By.className('new-todo')),2000); //reikia palaukti kol psl uzsikraus
        const newTodoInput = await driver.findElement(By.css('.new-todo'));
        newTodoInput.sendKeys('Buy groceries', Key.RETURN); //iveda teksta ir spaudzia enter
        await driver.sleep(1000);
        const addedTodoItem = await driver.findElement(By.xpath("//label[text()='Buy groceries']")).getText(); //Buy groceries
        assert.strictEqual(addedTodoItem, 'Buy groceries', 'To do items not equals')
        console.log(addedTodoItem);
    });
});
