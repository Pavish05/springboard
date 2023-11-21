const colors=['teal','cyan','purple'];

    function foreach(arr,callback){
    for(let i in arr)
    {
        callback(arr[i],i,arr);
    }
}

foreach(colors,function(color,i){
    console.log(color.toUpperCase(),'at index of:',i);
});


const link=Array.from(document.querySelectorAll('a'));
const urls=link.map(function(a){
    return a.href;
});

const allCheckboxes=document.querySelectorAll('input[type="checkbox"]');
const checked=Array.from(allCheckboxes).filter(function(box){
    return box.checked;
});

const completedItems=checked.map(function(checkbox){
    return checkbox.parentElement.innerText;
})

function extractAllCheckboxes(){
    const allCheckBoxes=document.querySelectorAll('input[type="checkbox"]');
return Array.from(allCheckBoxes)
.filter(function(box){
    return box.checked;
})
.map(function(checkbox){
    return checkbox.parentElement.innerText;
});

}
