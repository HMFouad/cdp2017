describe('[Test] Invite another person into a project', function() {
  let baseURL = "http://localhost:1337/";
	let path = "";

  let usernameField = element(by.id('username_inv'));
	let inviteButton = element(by.id('invite'));

  let usernameWhoInvite = 'fooWhoInvite';
  let usernameInvited = 'fooInvited';
  let pwd = '123456789';

  /// Setup
  // Inscriptions
  element(by.id('username_inscr')).sendKeys(usernameWhoInvite);
	element(by.id('password_inscr')).sendKeys(pwd);
	element(by.id('rPassword_inscr')).sendKeys(pwd);
	element(by.id('signUp')).click();
  element(by.id('username_inscr')).sendKeys(usernameInvited);
	element(by.id('password_inscr')).sendKeys(pwd);
	element(by.id('rPassword_inscr')).sendKeys(pwd);
	element(by.id('signUp')).click();
  // Connexion
  element(by.id('username_co')).sendKeys(usernameWhoInvite);
	element(by.id('password_co')).sendKeys(pwd);
	element(by.id('logIn')).click();
  // Create project
  element(by.id('projectName'));
	element(by.id('projectDescription'));
	element(by.id('create'));

  it('on a good way', function(){
    browser.get(baseURL+path);
    usernameField.sendKeys(name);
    inviteButton.click();
    //TODO check que l'invitation est envoyée
  });

  it('with nothing', function(){
    browser.get(baseURL+path);
    usernameField.sendKeys('');
    inviteButton.click();
    //TODO check que l'invitation n'est pas envoyée
  });

  it('with an unfindable username', function(){
    browser.get(baseURL+path);
    usernameField.sendKeys('nvoqejrpngbjdfopqnbg');
    inviteButton.click();
    //TODO check que l'invitation n'est pas envoyée
  });

});
