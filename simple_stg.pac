// Simple_PAC
function FindProxyForURL(url, host){
	if (shExpMatch(host, "*.rakuten.co.jp")){
		//return "PROXY 133.237.8.127:9502";
		return "PROXY 10.9.255.35:9502";
	} else {
		//rakuten.co.jp以外は直接接続する
		return "DIRECT";
	}
}