var alertHandlerClass = require('./alertHandler.js');
var alertHandler = new alertHandlerClass(1500, "Pas de dialogue d'alerte");

describe('[Test] Invite another person into a project', function() {
  let baseURL = "http://localhost:8080/#/";
  let projectName = 'projectOfFoos';
	let path = projectOfFoos;

  let usernameField = element(by.id('username_inv'));
	let inviteButton = element(by.id('invite'));

  let stringDONE = "Invitation sent.";
  let stringPleaseFill = "Please, fill all fields.";
  let stringUserNotFound = "Username not found.";
  let stringNameAlreadyUsed = "This username is already used. Please, choose an other one.";

  let usernameWhoInvite = 'fooWhoInvite';
  let usernameInvited = 'fooInvited';
  let pwd = '123456789';

  beforeAll(() => {
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
  });

  beforeEach(() => {
    browser.get(baseURL+path);
  });

  it('on a good way', function(){
    usernameField.sendKeys(usernameInvited);
    inviteButton.click();
    alertHandler.expect(stringDONE);
  });

  it('with nothing', function(){
    usernameField.sendKeys('');
    inviteButton.click();
    expect(browser.getCurrentUrl()).toBe(baseURL+path);
  });

  it('with an unfindable username', function(){
    usernameField.sendKeys('nvoqejrpngbjdfopqnbg');
    inviteButton.click();
    alertHandler.expect(stringUserNotFound);
  });

});
