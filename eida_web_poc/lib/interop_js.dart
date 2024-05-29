import 'dart:async';
import 'dart:developer';
import 'dart:js' as js;
import 'dart:html';
import 'package:js/js.dart';
import 'dart:js_util' as js_util;

class InteropJS {
  void initialize() {
    js.context.callMethod('eval', [
      '''

      var script = document.createElement('script');
      var script = document.createElement('script');
      script.src = 'assets/toolkit_sample.js';
      
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
        Initialize();
                registerDevice();
        DisplayPublicData();

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

@JS('processImage') // Declare an external JS function
external dynamic _processImage(String image);
Future<String> processImage(String image) async {
  return await js_util.promiseToFuture(_processImage(image));
}

Future<String> scanRegula(String image) async {
  try {
    print(' is ');
    var script = ScriptElement();
    print(' is  defined');

    script.src = 'assets/regulainterop.js';
    print('defined');

    // Create a Completer
    var completer = Completer<String>();

    script.onLoad.listen((event) async {
      print('Script loaded');

      // Wait for processImage to be ready
      while (!js.context.hasProperty('isProcessImageReady') ||
          !js.context['isProcessImageReady']) {
        await Future.delayed(Duration(milliseconds: 100));
      }

      if (js.context.hasProperty('processImage')) {
        // Check if processImage is defined
        print('processImage is  defined');

        String result = await processImage(image);
        // Complete the completer with the result
        completer.complete(result);
      } else {
        print('processImage is not defined');
        // Complete the completer with an error
        completer.completeError('processImage is not defined');
      }
    });

    document.body?.append(script);

    // Return the future from the completer
    return completer.future;
  } catch (e) {
    log(e.toString());
    return "incorrect image, upload another";
  }
}
