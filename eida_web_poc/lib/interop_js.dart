import 'dart:js' as js;

class InteropJS {
  void initialize() {
    js.context.callMethod('eval', [
      '''



      var script = document.createElement('script');
      script.src = 'assets/eidatoolkit.js';
    
       
      document.body.appendChild(script);
     
      script.onload = function() {
        console.log('Script loaded');
        Initialize();
        setTimeout(() => {
    console.log('Function called after 2000 milliseconds');
           DisplayPublicData();

}, 2000);

      };
      document.body.appendChild(script);
    '''
    ]);
  }

  void registerDevice(String deviceId) {
    js.context.callMethod('eval', [
      '''

      var script = document.createElement('script');
      var script = document.createElement('script');
      script.src = 'assets/toolkit_sample.js';
      script.onload = function() {
        console.log('Script loaded');
        Initialize();
      };
      document.body.appendChild(script);

      var script2 = document.createElement('script');
      script2.src = 'assets/eidatoolkit.js';
      script2.onload = function() {
        console.log('Another script loaded');
        // Additional code to execute after the script is loaded
      };
      document.body.appendChild(script2);
      script.src = 'assets/toolkit_sample.js';
      script.onload = function() {
        console.log('Script loaded');
        registerDevice();
      };
      document.body.appendChild(script);
    '''
    ]);
  }

  String scanID() {
    return js.context.callMethod('eval', [
      '''

      var script = document.createElement('script');
      var script = document.createElement('script');
      script.src = 'assets/toolkit_sample.js';
      script.onload = function() {
        console.log('Script loaded');
        Initialize();
      };
      document.body.appendChild(script);

      var script2 = document.createElement('script');
      script2.src = 'assets/eidatoolkit.js';
      script2.onload = function() {
        console.log('Another script loaded');
        // Additional code to execute after the script is loaded
      };
      document.body.appendChild(script2);
      script.src = 'assets/toolkit_sample.js';
      script.onload = function() {
        console.log('Script loaded');
        DisplayPublicData();
      };
      document.body.appendChild(script);
    '''
    ]);
  }
}
