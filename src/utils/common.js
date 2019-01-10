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
export function getSiteByKey(key) {
    if(key && key >= 0 && key <= 7){
        const site = sites.find(f=>f.key == key)
        return site.value
    }else{
        return null
    }

}
