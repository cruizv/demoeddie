var TelephoneNumber = function() {
};

var TelephoneNumberError = function(code, message) {
  this.code = code || null;
  this.message = message || '';
};

TelephoneNumber.NO_TELEPHONE_NUMBER = 0;

TelephoneNumber.prototype.get = function(success, fail) {
  exec(success, fail, 'TelephoneNumber', 'get', []);
};

//-------------------------------------------------------------------

if (!window.plugins) {
  window.plugins = {};
}
if (!window.plugins.telephoneNumber) {
  window.plugins.telephoneNumber = new TelephoneNumber();
}

if (module.exports) {
  module.exports = TelephoneNumber;
}
