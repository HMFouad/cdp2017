describe('[Test] Create a project', function() {
  let baseURL = "http://localhost:8080/";
	let path = "";

  let projectNameField = element(by.id('projectName'));
	let projectDescrField = element(by.id('projectDescription'));
	let createButton = element(by.id('create'));

  let infoLabel = element(by.id('infoCreateProLabel'));
  let stringDONE = "Project created.";
  let stringPleaseFill = "Please, fill the name field.";
  let stringWrongPwd = "Wrong password with this username";

  let descr = 'Description d\'un projet foo';

  function fillFields(name, des){
    projectNameField.sendKeys(name);
    projectDescrField.sendKeys(desc);
  }

  it('on a good way', function(){
    browser.get(baseURL+path);
    fillFields('fooa', descr);
    createButton.click();
    expect(infoLabel.getText()).toEqual(stringDONE);
  });

  it('with nothing', function(){
    browser.get(baseURL+path);
    fillFields('', '');
    createButton.click();
    expect(infoLabel.getText()).toEqual(stringPleaseFill);
  });

  it('without name', function(){
    browser.get(baseURL+path);
    fillFields('', descr);
    createButton.click();
    expect(infoLabel.getText()).toEqual(stringPleaseFill);
  });

  it('without description', function(){
    browser.get(baseURL+path);
    fillFields('foob', '');
    createButton.click();
    expect(infoLabel.getText()).toEqual(stringDONE);
  });

  it('twice with same name', function(){
    let name = 'fooc';
    browser.get(baseURL+path);
    //1st
    fillFields(name, descr);
    signUpButton.click();
    expect(infoLabel.getText()).toEqual(stringDONE);
    //2nd
    fillFields(name, descr);
    signUpButton.click();
    expect(infoLabel.getText()).toEqual(stringDONE);
  });

});
