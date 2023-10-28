// <======pulling links from webpage======>
let keyword="tutorial";
let linksCollectionArray=Array.from(document.links);
// console.log(links);

let linksArray=[];
// let linksStr='';
linksCollectionArray.forEach(element => {
    let link=element.href;
    if (link.includes(keyword)) {
        linksArray.push(link);
        // linksStr+=link+'\n';
    }
});
console.log(linksArray)
// document.getElementById("content4").innerHTML=`<button><a href="${linksArray[0]}">Link</a></button>`

// <======pulling images from webpage======>
let imgCollectionArray=Array.from(document.images);
let imgArray=[];

imgCollectionArray.forEach(element => {
    imgArray.push(element.src);
});
console.log(imgArray);


// <======pulling Script from webpage======>
let scriptCollectionArray=Array.from(document.scripts);
let scriptArray=[];
scriptCollectionArray.forEach(element => {
    scriptArray.push(element.src);
});
console.log(scriptArray);


