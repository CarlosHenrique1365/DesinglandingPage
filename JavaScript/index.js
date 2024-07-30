document.addEventListener('DOMContentLoaded',(event)=>{
    const service1 = document.getElementById('service1');
    const service2 = document.getElementById('service2');
    const service3 = document.getElementById('service3');

    const services = [service1,service2,service3];

    services.forEach(evt =>{
        evt.addEventListener('mouseover', function(){
            evt.classList.add('shadow');
        });
        evt.addEventListener('mouseout', function(){
            evt.classList.remove('shadow');
        });
    });
});



