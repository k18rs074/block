// This is a JavaScript file

// ncmbController.js

var ncmbController = {
  APPLICATION_KEY:appKey,
  CLIENT_KEY:clientKey,

  ncmb:null,
  currentUser:null,
  screenSize:null,

  init:function(screenSize) {
        var self = this;
        self.ncmb = new NCMB(self.APPLICATION_KEY, self.CLIENT_KEY);    // mobile backendの初期化
        self.screenSize = screenSize;
    }

}