/* Practice Assignment 7:

Complete this javascript file according to the individual instructions
given in the comments. 

*** DO NOT CHANGE any of the code that you are not instructed to. */

// 1) Define a function named getTheTable that returns the table
// element in the HTML document that has the id "myTable".

function getTheTable()
{
    return document.getElementById('myTable');
}

// 2) Define a function named getAllParagraphs that returns a
// NodeList containing all paragraph nodes inside the "myPage"
// section element of the HTML document.

function getAllParagraphs()
{
    return document.getElementsByTagName('p');
}

// 3) Define a function named makeItalic.
// The function should change the CSS style of
// the paragraph elements with the class "even"
// to have italicized text. The function should
// return a NodeList containing the paragraphs
// that were changed to italics.
/////////////
// Hint: You will need a loop.
// Also reference CSS in JavaScript.

function makeItalic()
{
    let toItalicise = document.getElementsByClassName('even');
    for(let i = 0; i < toItalicise.length; i++){
        toItalicise[i].style.fontStyle = "italic";
    }

    return toItalicise;
}

// 4) Define a function named createBorders that selects
// the table inside the "myPage" section. The function
// should add a CSS border to the table cells that is
// 2 pixels thick and solid black (use #000 for black).
// The function should also return the table element.
////////////
// Hint: You can build a selector from the result
// of another selector.

function createBorders()
{
    let pageTable = document.querySelector('#myPage').querySelector('Table');
    pageTable.style.border = "2px solid #000";

    return pageTable;
}

// 5) Define a function named getTheListItem that accepts two
// number parameters. The first parameter (num1) is the number of
// the unordered list in the document. The second parameter (num2)
// is the number of the list item in the unordered list.
// The function should return the text content of the
// requested list item.
/////////////////////////
// For example: getTheListItem(2,2) should return
// second list item of the second unordered list inside the
// "myPage" section element of the HTML document.
////////////////////////
// Hint: MDN for nth-of-type and nth-child selectors

function getTheListItem(num1, num2)
{
    let result = document.querySelector(`ul:nth-of-type(${num1})`).querySelector(`li:nth-child(${num2})`)
    return result;
}



// 6) Define a function named changeBgColor that changes the
// background color of the "myPage" section. The function
// should accept one parameter named "color" that will be
// the color the function changes the background to.
// The function should return the "myPage" section element.

function changeBgColor(color)
{
    let page = document.querySelector('#myPage');
    page.style.backgroundColor = color;

    return page;
}


console.log(changeBgColor("#f4f4f4"));


