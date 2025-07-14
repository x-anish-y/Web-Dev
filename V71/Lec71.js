document.querySelector(".box").innerHTML
'Hey I am a Box.'
document.querySelector(".container").innerHTML
'\n        <div class="box">Hey I am a Box.</div>\n    '
document.querySelector(".container").innerText
'Hey I am a Box.'

document.querySelector(".container").innerText
'Hey I am a Box.\nHey I am a Box.'
document.querySelector(".container").outerText
'Hey I am a Box.\nHey I am a Box.'
document.querySelector(".container").outerHTML
'<div class="container">\n        <div class="box">Hey I am a Box.</div>\n        <div class="box">Hey I am a Box.</div>\n    </div>'
document.querySelector(".container").tagName  //can only use for elements
'DIV'
document.querySelector(".container").nodeName  //can use for any tag
'DIV'
document.querySelector(".container").textContent
'\n        Hey I am a Box.\n        Hey I am a Box.\n    '
document.querySelector(".container").hidden
false
document.querySelector(".container").hidden = true
true
document.querySelector(".container").innerHTML = "I am Spiderman"
'I am Spiderman'
document.querySelector(".box").hasAttribute("style")
false
document.querySelector(".box").hasAttributes("style")
true
document.querySelector(".box").getAttribute("style")
'display: flex;'
document.querySelector(".box").setAttribute("style", "display: inline")
undefined
document.querySelector(".box").attributes
NamedNodeMap {0: class, 1: style, class: class, style: style, length: 2}
document.querySelector(".box").removeAttribute("style")
undefined
document.querySelector(".box").dataset
DOMStringMap {createdby: 'Anish', conceptby: 'NooBi'}