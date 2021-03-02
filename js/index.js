document.addEventListener('click',(e)=>{
    alert("Nice, you can click!");
    console.log({
        pageX: e.pageX,
        pageY: e.pageY
    });
});