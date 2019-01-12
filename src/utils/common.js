export const sites =  [
    {value: '海陵区', key: '0'},
    {value: '高港区', key: '1'},
    {value: '医药高新区', key: '2'},
    {value: '姜堰区', key: '3'},
    {value: '泰兴市', key: '4'},
    {value: '靖江市', key: '5'},
    {value: '兴化市', key: '6'},
    {value: '市直', key: '7'},
]

export const titles = [
    {title:'' , tip:''}
]
export function getSiteByKey(key) {
    if(key && key >= 0 && key <= 7){
        const site = sites.find(f=>f.key == key)
        return site.value
    }else{
        return null
    }

}

export function isObjEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object
}

export function getOS() {

    const u = navigator.userAgent, app = navigator.appVersion;
    const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
    const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    return [isAndroid , isiOS]
}
export function isIphone() {
    const u = navigator.userAgent
    return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}

export function isIphone6() {
    const iHeight = window.screen.height;
    const iWidth = window.screen.width;
    const isiOS = isIphone();
    if (isiOS && iWidth === 375 && iHeight === 667) {
        return true;
    }else{
        return false;
    }
}
export function iPhoneVersion() {
    var iHeight = window.screen.height;
    var iWidth = window.screen.width;
    if (iWidth === 320 && iHeight === 480) {
        return "4";
    }
    else if (iWidth === 375 && iHeight === 667) {
        return "6";
    }
    else if (iWidth === 414 && iHeight === 736) {
        return "6p";
    }
    else if(screen.height == 667 && screen.width == 375){
        return "7";
    }
    else if (iWidth === 320 && iHeight === 568) {
        return "5";
    }
    else if (iHeight == 812 && iWidth == 375) {
        return "x";
    }

    else if (iHeight <= 480) {
        return "2-3";
    }
    return 'none';
}

