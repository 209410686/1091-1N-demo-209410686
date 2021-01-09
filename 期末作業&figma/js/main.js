const showMenu = function(toggleId,navId) => {
    const toggle = document.getElementById(toggled);
    const nav = document.getElementById(navId);
    console.log(toggle);
    console.log(nav);
    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show');
            toggle.classList.toggle('bx-x');
        })
    }
};
sohowMenu ('header-toggle','nav-menu');