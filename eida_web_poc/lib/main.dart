import 'package:eida_web_poc/interop_js.dart';
import 'package:eida_web_poc/socket.dart';
import 'package:flutter/material.dart';

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
  final socketService = EIDASocket();

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
            Text(
              text,
              style: const TextStyle(fontSize: 18),
            ),
            ElevatedButton(
              onPressed: () {
                setState(() {
                  text = 'Start Stream Button Pressed';
                  socketService.connectToHosts([
                    '127.0.0.1:9004',
                    '127.0.0.1:9005',
                    '127.0.0.1:9020',
                    'toolkitagent.emiratesid.ae:9004',
                    'toolkitagent.emiratesid.ae:9005',
                    'toolkitagent.emiratesid.ae:9020'
                  ]);
                });
              },
              child: const Text('Start Stream'),
            ),
            ElevatedButton(
              onPressed: () {
                setState(() {
                  text = 'Start Stream Button Pressed';
                  socketService.send(
                      '{"cmd":1,"config_params":"agent_tls_enabled: false\nagent_host_name: toolkitagent.emiratesid.ae\nvg_connection_timeout = 60 \nlog_level = INFO \nlog_performance_time = true \nread_publicdata_offline = true \n"}');
                });
              },
              child: const Text('Establish'),
            ),
            ElevatedButton(
              onPressed: () {
                setState(() {
                  text = 'Start Stream Button Pressed';
                  socketService.send(
                      '{"cmd":6,"service_context":"","card_context":"","read_photography":true,"read_non_modifiable_data":true,"read_modifiable_data":true,"request_id":"","signature_image":true,"address":true}');
                });
              },
              child: const Text('Read public data'),
            ),
            const SizedBox(height: 16),
            StreamBuilder<String>(
              stream: socketService.stream,
              builder: (context, snapshot) {
                if (snapshot.hasError) {
                  return Text('Error: ${snapshot.error}');
                } else if (snapshot.connectionState ==
                    ConnectionState.waiting) {
                  return const Text('Awaiting data...');
                } else {
                  return Text('Data: ${snapshot.data}');
                }
              },
            ),
          ],
        ),
      ),
    );
  }
}
