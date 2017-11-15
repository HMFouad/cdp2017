describe('Tests for signing in', function() {
  let baseURL = "file:///home/gg099/Projects/cdp2017/Front/";
	let path = "Index.html";

  let usernameField = element(by.id('username_inscr'));
	let passwordField = element(by.id('password_inscr'));
	let repeatPasswordField = element(by.id('rPassword_inscr'));
	let signUpButton = element(by.id('signUp'));

  let pwd  = '123456789'

  function fillFields(name, pwd, repeatPwd){
    usernameField.sendKeys(name);
    passwordField.sendKeys(pwd);
    repeatPasswordField.sendKeys(repeatPwd);
  }

  it('Good way', function(){
    browser.get(baseURL+path);
    fillFields('fooa', pwd, pwd);
    signUpButton.click();
    //TODO check que l'inscription est faite
  });

  it('Nothing filled', function(){
    browser.get(baseURL+path);
    signUpButton.click();
    //TODO check que l'inscription n'est pas faite
  });

  it('No username', function(){
    browser.get(baseURL+path);
    fillFields('foob', pwd, pwd);
    signUpButton.click();
    //TODO check que l'inscription n'est pas faite
  });

  it('No password', function(){
    browser.get(baseURL+path);
    fillFields('fooc', '', pwd);
    signUpButton.click();
    //TODO check que l'inscription n'est pas faite
  });

  it('No repeat password', function(){
    browser.get(baseURL+path);
    fillFields('food', pwd, '');
    signUpButton.click();
    //TODO check que l'inscription n'est pas faite
  });

  it('Twice with same username', function(){
    let name = 'fooe';
    browser.get(baseURL+path);
    fillFields(name, pwd, pwd);
    signUpButton.click();
    fillFields(name, pwd, pwd);
    signUpButton.click();
    //TODO check que la 1ere est faite, mais pas la 2e
  });
});
