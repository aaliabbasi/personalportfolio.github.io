console.log("script running....")
document.querySelector('.hamburger').addEventListener('click',()=>{
    document.querySelector('.sidebar').classList.toggle('sidebar-go');
        document.querySelector('.ham').style.display = 'none';
    
})
document.querySelector('.cross').addEventListener('click' , () => {
    document.querySelector('.sidebar').classList.toggle('sidebar-go');
    document.querySelector('.ham').style.display = 'inline';
})