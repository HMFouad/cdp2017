describe('[Test] Log in', function() {
  let baseURL = "http://localhost:1337/";
	let path = "";

  let usernameField = element(by.id('username_co'));
	let passwordField = element(by.id('password_co'));
	let logInButton = element(by.id('logIn'));

  let username = 'fooCo';
  let pwd = '123456789';
  let wrongPwd = '123456788';

  function fillFields(name, pwd){
    usernameField.sendKeys(name);
    passwordField.sendKeys(pwd);
  }

  // Setup : inscription d'un utlisateur
  browser.get(baseURL+path);
  element(by.id('username_inscr')).sendKeys(username);
	element(by.id('password_inscr')).sendKeys(pwd);
	element(by.id('rPassword_inscr')).sendKeys(pwd);
	element(by.id('signUp')).click();

  it('on a good way', function(){
    browser.get(baseURL+path);
    fillFields(username, pwd);
    logInButton.click();
    //TODO check que la connexion est faite
  });

  it('with nothing', function(){
    browser.get(baseURL+path);
    fillFields('', '');
    logInButton.click();
    //TODO check que la connexion n'est pas faite
  });

  it('without username', function(){
    browser.get(baseURL+path);
    fillFields('', pwd);
    logInButton.click();
    //TODO check que la connexion n'est pas faite
  });

  it('without password', function(){
    browser.get(baseURL+path);
    fillFields(username, '');
    logInButton.click();
    //TODO check que la connexion n'est pas faite
  });

  it('with wrong password', function(){
    browser.get(baseURL+path);
    fillFields(username, wrongPwd);
    logInButton.click();
    //TODO check que la connexion n'est pas faite
  });

});
