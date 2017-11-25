describe('[Test] Create a project', function() {
  let baseURL = "http://localhost:8080/";
	let path = "";

  let projectsList = element(by.id('projectsList'));

  let username = 'fooa';
  let pwd = '123456789';
  let projectName1 = 'projectOfFoos';
  let projectName2 = 'projectForFoos';
  let descr = 'Description d\'un projet foo';

  beforeAll(() => {
    browser.get(baseURL);
    // Inscriptions
    element(by.id('username_inscr')).sendKeys(username);
  	element(by.id('password_inscr')).sendKeys(pwd);
  	element(by.id('rPassword_inscr')).sendKeys(pwd);
  	element(by.id('signUp')).click();
    // Connection
    element(by.id('username_co')).sendKeys(username);
  	element(by.id('password_co')).sendKeys(pwd);
  	element(by.id('logIn')).click();
    // Create projects
    element(by.id('projectName')).sendKeys(projectName1);
  	element(by.id('create')).click();
    element(by.id('projectName')).sendKeys(projectName2);
  	element(by.id('create')).click();
  });

  beforeEach(() => {
    browser.get(baseURL+path);
  });

  it('on a good way', function(){
    //TODO
  });

});
