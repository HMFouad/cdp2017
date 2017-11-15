describe('Tests for creating a project', function() {
  let baseURL = "file:///home/gg099/Projects/cdp2017/Front/";
	let path = "Index.html";

  let projectNameField = element(by.id('projectName'));
	let projectDescrField = element(by.id('projectDescription'));
	let createButton = element(by.id('create'));

  let descr = 'Description d\'un projet foo'

  function fillFields(name, des){
    projectNameField.sendKeys(name);
    projectDescrField.sendKeys(desc);
  }

  it('Good way', function(){
    browser.get(baseURL+path);
    fillFields('fooa', descr);
    createButton.click();
    //TODO check que le projet est créé
  });

  it('Nothing', function(){
    browser.get(baseURL+path);
    fillFields('', '');
    createButton.click();
    //TODO check que le projet est créé
  });

  it('No name', function(){
    browser.get(baseURL+path);
    fillFields('', descr);
    createButton.click();
    //TODO check que le projet n'est pas créé
  });

  it('No description', function(){
    browser.get(baseURL+path);
    fillFields('foob', '');
    createButton.click();
    //TODO check que le projet n'est pas créé
  });

  it('Twice with same name', function(){
    let name = 'fooc';
    browser.get(baseURL+path);
    fillFields(name, descr);
    signUpButton.click();
    fillFields(name, descr);
    signUpButton.click();
    //TODO check que les 2 projets sont créés
  });

});
