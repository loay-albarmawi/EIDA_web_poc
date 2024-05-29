import 'dart:convert';
import 'dart:developer';
import 'dart:html' as html;

import 'package:eida_web_poc/interop_js.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  String text = "";
  String imageBase64 = "";

  void onImageUpload(html.Event event) {
    final file = (event.target as html.FileUploadInputElement).files!.first;
    final reader = html.FileReader();

    reader.readAsDataUrl(file);
    reader.onLoadEnd.listen((event) {
      setState(() {
        imageBase64 = reader.result as String;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            ElevatedButton(
              onPressed: () {
                setState(() {
                  text = 'Initialize Button Pressed';
                  InteropJS().initialize();
                });
              },
              child: const Text('Initialize'),
            ),
            const SizedBox(height: 16),
            ElevatedButton(
              onPressed: () {
                setState(() {
                  text = 'Register Device Button Pressed';
                  InteropJS().registerDevice("1234567890");
                });
              },
              child: const Text('Register Device'),
            ),
            const SizedBox(height: 16),
            ElevatedButton(
              onPressed: () {
                setState(() {
                  InteropJS().scanID();

                  text = 'Scan ID Button Pressed';
                });
              },
              child: const Text('Scan ID'),
            ),
            const SizedBox(height: 16),
            ElevatedButton(
              onPressed: () {
                final uploadInput = html.FileUploadInputElement();
                uploadInput.accept = 'image/*';
                uploadInput.click();

                uploadInput.onChange.listen(onImageUpload);
              },
              child: const Text('Upload Image'),
            ),
            Visibility(
              visible: imageBase64.isNotEmpty,
              child: ElevatedButton(
                onPressed: () async {
                  String s = await scanRegula(imageBase64);
                  setState(() {
                    List<dynamic> fieldList =
                        jsonDecode(s)['text']['fieldList'];
                    Map<String, dynamic> keyPairValues = {};
                    for (var json in fieldList) {
                      String fieldName = json['fieldName'];
                      dynamic value = json['value'];
                      keyPairValues[fieldName] = value;
                    }
                    text = keyPairValues.toString();
                  });
                },
                child: const Text('Scan regula'),
              ),
            ),
            const SizedBox(height: 16),
            Text(
              text,
              style: const TextStyle(fontSize: 18),
            ),
          ],
        ),
      ),
    );
  }
}
