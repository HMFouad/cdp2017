var alertHandlerClass = require('./alertHandler.js');
var alertHandler = new alertHandlerClass(1500, "Pas de dialogue d'alerte");

describe('[Test] Create a project', function() {
  let baseURL = "http://localhost:8080/#/";
	let path = "createProject";

  let projectNameField;
	let projectDescrField;
	let createButton;

  let descr = 'Description d\'un projet foo';

  let stringDONE = "Project created.";
  let stringPleaseFill = "Please, fill the name field.";

  function fillFields(name, des){
    projectNameField.sendKeys(name);
    projectDescrField.sendKeys(descr);
  }

  beforeAll(() => {
    browser.get(baseURL+path);
    projectNameField = element(by.id('projectName'));
  	projectDescrField = element(by.id('projectDescription'));
  	createButton = element(by.id('create'));
  });

  beforeEach(() => {
    browser.get(baseURL+path);
  });

  it('on a good way', function(){
    fillFields('fooa', descr);
    createButton.click();
    alertHandler.expect(stringDONE);
  });

  it('with nothing', function(){
    fillFields('', '');
    createButton.click();
    alertHandler.expect(stringPleaseFill);
  });

  it('without name', function(){
    fillFields('', descr);
    createButton.click();
    alertHandler.expect(stringPleaseFill);
  });

  it('without description', function(){
    fillFields('foob', '');
    createButton.click();
    alertHandler.expect(stringDONE);
  });

  it('twice with same name', function(){
    let name = 'fooc';
    //1st
    fillFields(name, descr);
    createButton.click();
    alertHandler.expect(stringDONE);
    //2nd
    fillFields(name, descr);
    createButton.click();
    alertHandler.expect(stringDONE);
  });

});
