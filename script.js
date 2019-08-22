function tabuada() {
    let num = document.getElementById('number')
    let tab_soma = document.getElementById('seltab_soma')
    let tab_sub = document.getElementById('seltab_sub')
    let tab_mult = document.getElementById('seltab_mult')
    let tab_div = document.getElementById('seltab_div')
    if(num.value.length == 0) {
        window.alert('Por favor, digite um numero!')
    } else {

        let n = Number(num.value)
        let c1 = 1
        let c2 = 1
        let c3 = 1
        let c4 = 1

        tab_soma.innerHTML = ''
        tab_sub.innerHTML = ''
        tab_mult.innerHTML = ''
        tab_div.innerHTML = ''

        while(c1 <= 10) {
            let item_soma = document.createElement('option')
            item_soma.text = `${n} + ${c1} = ${n+c1}`
            item_soma.value = `tab${c1}`
            tab_soma.appendChild(item_soma)
            c1++
        }
        while(c2 <= 10) {
            let item_sub = document.createElement('option')
            item_sub.text = `${n} - ${c2} = ${n-c2}`
            item_sub.value = `tab${c2}`
            tab_sub.appendChild(item_sub)
            c2++
        }
        while(c3 <= 10) {
            let item_mult = document.createElement('option')
            item_mult.text = `${n} x ${c3} = ${n*c3}`
            item_mult.value = `tab${c3}`
            tab_mult.appendChild(item_mult)
            c3++
        }
        while(parseInt(c4) <= 10) {
            let item_div = document.createElement('option')
            item_div.text= `${n} / ${c4} = ${n/c4}`
            item_div.value = `tab${c4}`
            tab_div.appendChild(item_div)
            c4++
        }
    }
}