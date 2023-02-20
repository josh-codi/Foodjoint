export function setCart (data) {
    console.log(data)
    let oldData = []
    
    let newData = oldData.push()
    console.log(newData)
    localStorage.setItem('cart', JSON.stringify(newData))
}

export function getCart () {
    return [...JSON.parse(localStorage.getItem('cart'))];
}