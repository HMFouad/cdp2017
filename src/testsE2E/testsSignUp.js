var alertHandlerClass = require('./alertHandler.js');
var alertHandler = new alertHandlerClass(1500, "Pas de dialogue d'alerte");

describe('[Test] Sign up', function() {
  let baseURL = "http://localhost:8080/";
	let path = "";

  let usernameField = element(by.id('username_inscr'));
	let passwordField = element(by.id('password_inscr'));
	let repeatPasswordField = element(by.id('rPassword_inscr'));
	let signUpButton = element(by.id('signUp'));

  let stringDONE = "Your new account is available. You can log in.";
  let stringPleaseFill = "Please, fill all fields.";
  let stringPwdNotMatching = "Passwords don't match.";
  let stringNameAlreadyUsed = "This username is already used. Please, choose an other one.";

  let pwd  = '123456789';

  function fillFields(name, pwd, repeatPwd){
    usernameField.sendKeys(name);
    passwordField.sendKeys(pwd);
    repeatPasswordField.sendKeys(repeatPwd);
  }

  beforeEach(() => {
    browser.get(baseURL+path);
  });

  it('on a good way', function(){
    fillFields('fooa', pwd, pwd);
    signUpButton.click();
    alertHandler.expect(stringDONE);
  });

  it('with nothing filled', function(){
    signUpButton.click();
    alertHandler.expect(stringPleaseFill);
  });

  it('without username', function(){
    fillFields('foob', pwd, pwd);
    signUpButton.click();
    alertHandler.expect(stringPleaseFill);
  });

  it('without password', function(){
    fillFields('fooc', '', '');
    signUpButton.click();
    alertHandler.expect(stringPleaseFill);
  });

  it('without repeat password', function(){
    fillFields('food', pwd, '');
    signUpButton.click();
    alertHandler.expect(stringPwdNotMatching);
  });

  it('twice with same username', function(){
    let name = 'fooe';
    //1st
    fillFields(name, pwd, pwd);
    signUpButton.click();
    alertHandler.expect(stringDONE);
    //2nd
    fillFields(name, pwd, pwd);
    signUpButton.click();
    alertHandler.expect(stringNameAlreadyUsed);
  });
});
