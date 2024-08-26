function toTitleCase(str) {
    let strInArr = str.split(" ")
    let resInArr = strInArr.map((item) => item[0].toUpperCase() + item.slice(1,item.length).toLowerCase())
    return resInArr.join(" ")
}

toTitleCase("OPEN") 