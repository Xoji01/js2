let str = 'aaa@bbb@ccc'
 
console.log(
    str.replace (/@/gi, "!"))

let al = 'HELLOWORLD'
console.log(
 'H' +    al.slice(al.search('ELLO'),al.search('ELLO') +4). toLowerCase() 
 + " " +
    al.slice(al.search('WORLD'),al.search('WORLD')+5).toLowerCase() 
)

let he = 'Hello, it is HTML'
console.log(
    he.slice(he.search('Hello'), he.search('Hello') +5)
    + he.slice(he.search(' it is'), he.search(' it is') +6) + ' not JS'
)

let ale = "alex"
console.log(
    ale.charAt(0).toUpperCase() +
    ale.slice(1)
)
let num = Math.random()
console.log(
    Math.round(num)
)

let = txt = "Lex Luter has a big suit"
console.log(
txt.slice(txt.search('a'), txt.search('a')+ 1).toUpperCase()
+ txt.slice(txt.search('Lex'), txt.search('Lex')+ 3).toLowerCase(
    
)
)