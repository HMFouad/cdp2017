var alertHandlerClass = require('./alertHandler.js');
var alertHandler = new alertHandlerClass(1500, "Pas de dialogue d'alerte");

describe('[Test] Log in', function() {
  let baseURL = "http://localhost:8080/#/";
	let path = "";

  let usernameField = element(by.id('username_co'));
	let passwordField = element(by.id('password_co'));
	let logInButton = element(by.id('logIn'));

  let usernameCoLabel = element(by.id('usernameCoLabel'));
  let stringPleaseFill = "Please, fill all fields.";
  let stringWrongPwd = "Wrong username/password";

  let username = 'fooCo';
  let pwd = '123456789';
  let wrongPwd = '123456788';

  function fillFields(name, pwd){
    usernameField.sendKeys(name);
    passwordField.sendKeys(pwd);
  }

  beforeAll(() => {
    // Inscription d'un utlisateur
    browser.get(baseURL+path);
    element(by.id('username_inscr')).sendKeys(username);
  	element(by.id('password_inscr')).sendKeys(pwd);
  	element(by.id('rPassword_inscr')).sendKeys(pwd);
  	element(by.id('signUp')).click();
  });

  beforeEach(() => {
    browser.get(baseURL+path);
  });

  it('on a good way', function(){
    fillFields(username, pwd);
    logInButton.click();
    expect(usernameCoLabel.getText()).toEqual(username);
  });

  it('with nothing', function(){
    fillFields('', '');
    logInButton.click();
    alertHandler.expect(stringPleaseFill);
  });

  it('without username', function(){
    fillFields('', pwd);
    logInButton.click();
    alertHandler.expect(stringPleaseFill);
  });

  it('without password', function(){
    fillFields(username, '');
    logInButton.click();
    alertHandler.expect(stringPleaseFill);
  });

  it('with wrong password', function(){
    fillFields(username, wrongPwd);
    logInButton.click();
    alertHandler.expect(stringWrongPwd);
  });

});
