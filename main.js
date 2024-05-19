let fastfood = document.querySelector('.fastfood_container')
let salads = document.querySelector('.salads_container')
let rolls = document.querySelector('.rolls_container')
let main = document.querySelector('.main')
let start = document.querySelector('.start')
let start1 = document.querySelector('.start1')
let start2 = document.querySelector('.start2')
let start3 = document.querySelector('.start3')
let start4 = document.querySelector('.start4')
let start5 = document.querySelector('.start5')
let res = document.querySelector('.r')

let plus = document.querySelector('.plus')
let count = document.querySelector('.count')
let plus1 = document.querySelector('.p1')
let count1 = document.querySelector('.c1')
let plus2 = document.querySelector('.p2')
let count2 = document.querySelector('.c2')
let plus3 = document.querySelector('.p3')
let count3 = document.querySelector('.c3')
let plus4 = document.querySelector('.p4')
let count4 = document.querySelector('.c4')
let plus5 = document.querySelector('.p5')
let count5 = document.querySelector('.c5')
let plus6 = document.querySelector('.p6')
let count6 = document.querySelector('.c6')
let plus7 = document.querySelector('.p7')
let count7 = document.querySelector('.c7')
let plus8 = document.querySelector('.p8')
let count8 = document.querySelector('.c8')
let plus9 = document.querySelector('.p9')
let count9 = document.querySelector('.c9')
let plus10 = document.querySelector('.p10')
let count10 = document.querySelector('.c10')
let plus11 = document.querySelector('.p11')
let count11= document.querySelector('.c11')

let minus = document.querySelector('.m')
let minus1 = document.querySelector('.m1')
let minus2 = document.querySelector('.m2')
let minus3 = document.querySelector('.m3')
let minus4 = document.querySelector('.m4')
let minus5 = document.querySelector('.m5')
let minus6 = document.querySelector('.m6')
let minus7 = document.querySelector('.m7')
let minus8 = document.querySelector('.m8')
let minus9 = document.querySelector('.m9')
let minus10 = document.querySelector('.m10')
let minus11= document.querySelector('.m11')

let go_to_main = document.querySelector('.go_to_main')
let basket = document.querySelector('.basket')

let a = {burger: 0, pizza: 0, potato: 0, hotdog:0}
let b = {olivie:0, greek:0, cesar:0, vinaigrette:0}
let c = {florida:0, hosomaki:0, nigiri:0, maki:0}
salads.addEventListener('click', function(){
    main.style.display = 'none'
    start1.style.display = 'flex'
    start3.style.display = 'flex'
    start4.style.display = 'flex'
    start5.style.display = 'none'
})

fastfood.addEventListener('click', function(){
    main.style.display = 'none'
    start.style.display = 'flex'
    start3.style.display = 'flex'
    start4.style.display = 'flex'
    start5.style.display = 'none'
})

rolls.addEventListener('click', function(){
    main.style.display = 'none'
    start2.style.display = 'flex'
    start3.style.display = 'flex'
    start4.style.display = 'flex'
    start5.style.display = 'none'
})

go_to_main.addEventListener('click', function(){
    main.style.display = 'flex'
    start.style.display = 'none'
    start1.style.display = 'none'
    start2.style.display = 'none'
    start3.style.display = 'none'
    start4.style.display = 'none'
    start5.style.display = 'none'
})

basket.addEventListener('click', function(){
    start.style.display = 'none'
    start1.style.display = 'none'
    start2.style.display = 'none'
    start4.style.display = 'none'
    start5.style.display = 'flex'
})

    

plus.addEventListener('click', function(){
    let val = Number(count.innerHTML)
    val+=1
    a.burger+=1
    count.innerHTML = val
})
plus1.addEventListener('click', function(){
    let val1 = Number(count1.innerHTML)
    val1+=1
    a.pizza+=1
    count1.innerHTML = val1
})
plus2.addEventListener('click', function(){
    let val2 = Number(count2.innerHTML)
    val2+=1
    a.potato+=1
    count2.innerHTML = val2
})
plus3.addEventListener('click', function(){
    let val3 = Number(count3.innerHTML)
    val3+=1
    a.hotdog+=1
    count3.innerHTML = val3
})
plus4.addEventListener('click', function(){
    let val4 = Number(count4.innerHTML)
    val4+=1
    b.olivie+=1
    count4.innerHTML = val4
})
plus5.addEventListener('click', function(){
    let val5 = Number(count5.innerHTML)
    val5+=1
    b.greek+=1
    count5.innerHTML = val5
})
plus6.addEventListener('click', function(){
    let val6 = Number(count6.innerHTML)
    val6=1
    b.cesar+=1
    count6.innerHTML = val6
})
plus7.addEventListener('click', function(){
    let val7 = Number(count7.innerHTML)
    val7+=1
    b.vinaigrette+=1
    count7.innerHTML = val7
})
plus8.addEventListener('click', function(){
    let val8 = Number(count8.innerHTML)
    val8+=1
    c.florida+=1
    count8.innerHTML = val8
})
plus9.addEventListener('click', function(){
    let val9 = Number(count9.innerHTML)
    val9+=1
    c.hosomaki+=1
    count9.innerHTML = val9
})
plus10.addEventListener('click', function(){
    let val10 = Number(count10.innerHTML)
    val10+=1
    c.nigiri+=1
    count10.innerHTML = val10
})
plus11.addEventListener('click', function(){
    let val11 = Number(count11.innerHTML)
    val11+=1
    c.maki+=1
    count11.innerHTML = val11
})



minus.addEventListener('click', function(){
    let val = Number(count.innerHTML)
    if (val != 0) {val-=1, a.burger-=1}
    count.innerHTML = val
})
minus1.addEventListener('click', function(){
    let val1 = Number(count1.innerHTML)
    if (val1 != 0) {val1-=1, a.pizza-=1}
    count1.innerHTML = val1
})
minus2.addEventListener('click', function(){
    let val2 = Number(count2.innerHTML)
    if (val2 != 0) {val2-=1, a.potato-=1}
    count2.innerHTML = val2
})
minus3.addEventListener('click', function(){
    let val3 = Number(count3.innerHTML)
    if (val3 != 0) {val3-=1, a.hotdog-=1}
    count3.innerHTML = val3
})
minus4.addEventListener('click', function(){
    let val4 = Number(count4.innerHTML)
    if (val4 != 0) {val4-=1, b.olivie-=1}
    count4.innerHTML = val4
})
minus5.addEventListener('click', function(){
    let val5 = Number(count5.innerHTML)
    if (val5 != 0) {val5-=1, b.greek-=1}
    count5.innerHTML = val5
})
minus6.addEventListener('click', function(){
    let val6 = Number(count6.innerHTML)
    if (val6 != 0) {val6-=1,b.cesar-=1}
    count6.innerHTML = val6
})
minus7.addEventListener('click', function(){
    let val7 = Number(count7.innerHTML)
    if (val7 != 0) {val7-=1,b.vinaigrette-=1}
    count7.innerHTML = val7
})
minus8.addEventListener('click', function(){
    let val8 = Number(count8.innerHTML)
    if (val8 != 0) {val8-=1, c.florida-=1}
    count8.innerHTML = val8
})
minus9.addEventListener('click', function(){
    let val9 = Number(count9.innerHTML)
    if (val9 != 0) {val9-=1, c.hosomaki-=1}
    count9.innerHTML = val9
})
minus10.addEventListener('click', function(){
    let val10 = Number(count10.innerHTML)
    if (val10 != 0) {val10-=1, c.nigiri-=1}
    count10.innerHTML = val10
})
minus11.addEventListener('click', function(){
    let val11 = Number(count11.innerHTML)
    if (val11 != 0) {val11-=1 , c.maki-=1}
    count11.innerHTML = val11
    
})
res.innerHTML = a.burger
