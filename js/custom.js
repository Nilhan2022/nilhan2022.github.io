document.querySelectorAll('.nav-link').forEach
(link=>{
    if(link.href=== window.location.href){
    //  link.setAttribute('class','nav-item nav-link active')
        link.classList.add('active');
        }
    else {
    // {e.preventDefault();
        link.classList.remove('active')
        }

})


