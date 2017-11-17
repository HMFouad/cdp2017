describe('[Test] Invite another person into a project', function() {
  let baseURL = "http://localhost:8080/";
	let path = "";

  let usernameField = element(by.id('username_inv'));
	let inviteButton = element(by.id('invite'));

  let infoLabel = element(by.id('infoInvitLabel'));
  let stringDONE = "Invitation sent.";
  let stringPleaseFill = "Please, fill all fields.";
  let stringUserNotFound = "Username not found.";
  let stringNameAlreadyUsed = "This username is already used. Please, choose an other one.";

  let usernameWhoInvite = 'fooWhoInvite';
  let usernameInvited = 'fooInvited';
  let pwd = '123456789';
  let projectName = 'projectOfFoos';

  /// Setup
  browser.get(baseURL);
  // Inscriptions
  element(by.id('username_inscr')).sendKeys(usernameWhoInvite);
	element(by.id('password_inscr')).sendKeys(pwd);
	element(by.id('rPassword_inscr')).sendKeys(pwd);
	element(by.id('signUp')).click();
  element(by.id('username_inscr')).sendKeys(usernameInvited);
	element(by.id('password_inscr')).sendKeys(pwd);
	element(by.id('rPassword_inscr')).sendKeys(pwd);
	element(by.id('signUp')).click();
  // Connection
  element(by.id('username_co')).sendKeys(usernameWhoInvite);
	element(by.id('password_co')).sendKeys(pwd);
	element(by.id('logIn')).click();
  // Create project
  element(by.id('projectName')).sendKeys(projectName);
	element(by.id('create')).click();

  it('on a good way', function(){
    browser.get(baseURL+path);
    usernameField.sendKeys(name);
    inviteButton.click();
    expect(infoLabel.getText()).toEqual(stringDONE);
  });

  it('with nothing', function(){
    browser.get(baseURL+path);
    usernameField.sendKeys('');
    inviteButton.click();
    expect(infoLabel.getText()).toEqual(stringPleaseFill);
  });

  it('with an unfindable username', function(){
    browser.get(baseURL+path);
    usernameField.sendKeys('nvoqejrpngbjdfopqnbg');
    inviteButton.click();
    expect(infoLabel.getText()).toEqual(stringUserNotFound);
  });

});
