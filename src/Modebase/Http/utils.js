import md5 from './md5';
import {
  Platform
} from 'react-native';
import { VERSION } from 'constants/version.js'

function _sign(map) {
    var json = null;
    var keys = Object.keys(map);
    var count = keys.length;
    keys.sort();
    var signstr = "YONGHUI601933";
    for (var i = 0; i < count; i++) {
        var k = keys[i];
        var v = map[k];
        if (k == "json") {
            json = v;
        } else {
            signstr = signstr + k + v;
        }
    }
    if (json) {
        signstr = signstr + json;
    }
    return md5(signstr);
}

export function suffix(map) {
    var platform = Platform.OS == 'android' ? 'android' : 'ios';
    // 暂时不除以1000
    var timestamp = Math.round(new Date().getTime());
    var channel = 'anything';
    // var v = '2.0.0';
    map['platform'] = platform;
    map['timestamp'] = timestamp;
    map['channel'] = channel;
    map['v'] = VERSION;

    var signStr = _sign(map);
    var suffixStr = `&platform=${platform}&timestamp=${timestamp}&channel=${channel}&v=${VERSION}&sign=${signStr}`;
    return suffixStr;
}
