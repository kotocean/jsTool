/*根据arr的path动态设置object的值
使用示例：setValue(b,0,[2,'address',0,'home'], '新的home地址')
其中：b=[1,2,{'address':[{'home':'领秀慧谷C区','number':'00231'},{'company':'泰康','number':'00782'}],'phone':'15698764532'}, 3]
*/
function setValue(a, start, arr, value){
    if(arr.length-1>start){
        setValue(a[arr[start]], start+1, arr, value)
    }else{
        a[arr[start]] = value
    }
}
/*根据arr的path动态获取path中的object的值
使用示例：getValue(b,0,[2,'address',0,'home'])
以上等同于：b[2]["address"][0]["home"]
*/
function getValue(a,start,arr){
    if(arr.length-1>start){
        return getValue(a[arr[start]],start+1,arr)
    }else{
        return a[arr[start]]
    }
}
