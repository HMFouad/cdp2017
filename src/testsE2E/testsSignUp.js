describe('[Test] Sign up', function() {
  let baseURL = "http://localhost:8080/";
	let path = "";

  let usernameField = element(by.id('username_inscr'));
	let passwordField = element(by.id('password_inscr'));
	let repeatPasswordField = element(by.id('rPassword_inscr'));
	let signUpButton = element(by.id('signUp'));

  let infoLabel = element(by.id('infoInscrLabel'));
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

  it('on a good way', function(){
    browser.get(baseURL+path);
    fillFields('fooa', pwd, pwd);
    signUpButton.click();
    expect(infoLabel.getText()).toEqual(stringDONE);
  });

  it('with nothing filled', function(){
    browser.get(baseURL+path);
    signUpButton.click();
    expect(infoLabel.getText()).toEqual(stringPleaseFill);
  });

  it('without username', function(){
    browser.get(baseURL+path);
    fillFields('foob', pwd, pwd);
    signUpButton.click();
    expect(infoLabel.getText()).toEqual(stringPleaseFill);
  });

  it('without password', function(){
    browser.get(baseURL+path);
    fillFields('fooc', '', '');
    signUpButton.click();
    expect(infoLabel.getText()).toEqual(stringPleaseFill);
  });

  it('without repeat password', function(){
    browser.get(baseURL+path);
    fillFields('food', pwd, '');
    signUpButton.click();
    expect(infoLabel.getText()).toEqual(stringPwdNotMatching);
  });

  it('twice with same username', function(){
    let name = 'fooe';
    browser.get(baseURL+path);
    //1st
    fillFields(name, pwd, pwd);
    signUpButton.click();
    expect(infoLabel.getText()).toEqual(stringDONE);
    //2nd
    fillFields(name, pwd, pwd);
    signUpButton.click();
    expect(infoLabel.getText()).toEqual(stringNameAlreadyUsed);
  });
});
