// Your code goes here

let navA = document.querySelectorAll('nav > a')

navA[3].addEventListener('click', event => {alert(`We don't want to talk to you!`)})

let colors = ['lightblue','green','pink','yellow']
navA.forEach((x,i) => {x.addEventListener('mouseover', event => {x.style.background = colors[i]})})
navA.forEach(x => {x.addEventListener('click', event => {event.preventDefault()})})


let midContent1 = document.querySelector('.mc1')
let midContent2 = document.querySelector('.mc2')
midContent1.addEventListener('mouseenter', event => {midContent1.classList.toggle('flexReverse'); midContent2.classList.toggle('flexReverse');})
midContent1.addEventListener('mouseleave', event => {midContent1.classList.toggle('flexReverse'); midContent2.classList.toggle('flexReverse');})
midContent2.addEventListener('mouseenter', event => {midContent2.classList.toggle('flexReverse'); midContent1.classList.toggle('flexReverse')})
midContent2.addEventListener('mouseleave', event => {midContent2.classList.toggle('flexReverse'); midContent1.classList.toggle('flexReverse')})

let title = document.querySelector('h1');
let body = document.querySelector('body');
let header = document.querySelector('header')
title.addEventListener('dblclick', event => {body.style.background = 'pink'; header.style.background = 'cyan' })

let buttons = document.querySelectorAll('.btn')
buttons.forEach((x) => x.addEventListener('contextmenu', event => {x.textContent = 'Left click dummy!'}))
buttons.forEach((x) => x.addEventListener('click', event => {if (x.textContent === 'Left click dummy!') {x.textContent = 'You did it!'}}))
buttons.forEach((x) => x.addEventListener('dblclick', event => {if (x.textContent === 'You did it!') {x.textContent = 'Hey! Stop that!'}}))
buttons.forEach((x) => x.addEventListener('click', event => {if (x.textContent === 'Hey! Stop that!') {alert(`Okay well now this is happening`); body.style.background = 'black'; header.style.background = 'black'; x.textContent = 'Now look what you did'}}))
