module.exports = function (timeOutAlertTime, timeOutAlertMsg) {
  this.timeOutAlertTime = timeOutAlertTime;
  this.timeOutAlertMsg = timeOutAlertMsg;
  this.expect = function (msgExpected) {
    const alertDialog = browser.switchTo().alert();
    browser.wait(protractor.ExpectedConditions.alertIsPresent(), this.timeOutAlertTime, this.timeOutAlertMsg);
    expect(alertDialog.getText()).toEqual(msgExpected);
    alertDialog.accept();
  };
}
