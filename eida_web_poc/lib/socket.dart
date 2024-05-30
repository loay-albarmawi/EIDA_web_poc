import 'package:web_socket_channel/io.dart';

class EIDASocket {
  static final EIDASocket _instance = EIDASocket._internal();
  factory EIDASocket() => _instance;
  EIDASocket._internal();

  IOWebSocketChannel? _channel;

  void connect(String url) {
    _channel = IOWebSocketChannel.connect(url);
  }

  void send(String message) {
    _channel?.sink.add(message);
  }

  void close() {
    _channel?.sink.close();
  }

  Stream<String>? get stream => _channel?.stream.cast<String>();
  void listen(void Function(dynamic) onData) {
    _channel?.stream.listen(onData);
  }

  void connectToHosts(List<String> hosts) {
    bool connected = false;

    for (String host in hosts) {
      try {
        connect(host);
        connected = true;
        break;
      } catch (e) {
        print('Failed to connect to $host');
      }
    }

    if (!connected) {
      print('Failed to connect to any host');
    }
  }
}

Map<dynamic, Object> publicDataRequest = {
  "cmd": 6,
  "service_context": '',
  "card_context": '',
  "read_photography": true,
  "read_non_modifiable_data": true,
  "read_modifiable_data": true,
  "request_id": '',
  "signature_image": true,
  "address": true
};

//['127.0.0.1:9004', '127.0.0.1:9005', '127.0.0.1:9020','toolkitagent.emiratesid.ae:9004', 'toolkitagent.emiratesid.ae:9005', 'toolkitagent.emiratesid.ae:9020'];