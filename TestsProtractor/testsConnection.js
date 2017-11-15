describe('Tests for loging in', function() {
  let baseURL = "file:///home/gg099/Projects/cdp2017/Front/";
	let path = "Index.html";

  let usernameField = element(by.id('username_inscr'));
	let passwordField = element(by.id('password_inscr'));
	let logInButton = element(by.id('logIn'));

  function fillFields(name, pwd){
    usernameField.sendKeys(name);
    passwordField.sendKeys(pwd);
  }

  it('Good way', function(){
    //TODO
  });

});
