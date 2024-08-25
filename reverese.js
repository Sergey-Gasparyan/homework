function reverseStr(str) {
    let strInArr = str.split("")
    let resInArr = strInArr.reverse()
    return resInArr.join("")
}
reverseStr("123456")