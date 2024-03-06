//Toggle class active

const navbarNav = document.querySelector('.navbar-nav');

//ketika menu di klik

document.querySelector('#menu'). onclick = () => {

    navbarNav.classList.toggle('active');
};

// klik diluar sidebar untuk hilangin nav

const menu = document.querySelector('#menu');


document.addEventListener('click',function (e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});



//klik hitung
const itemDetailModal = document.querySelector ( '#item-detail-modal'); 
const kalkulator = document.querySelectorAll('.kalkulator');

kalkulator.forEach((btn) => {
    
    btn.onclick = (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault ();

    };

});


//klik tombol close 
document.querySelector ('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault ();
};

//klik diluar close
const modal = document.querySelector ('#item-detail-modal')
window.onclick = (e) => {
    if (e. target === itemDetailModal ) {
        itemDetailModal.style.display = 'none';
    }
}

//kalkulatornya//
const btn = document.getElementById ('kalkulasi');

btn.addEventListener ('click', function(){


let LILA = document.querySelector ('#LILA').value;
let TILU = document. querySelector ('#TILU').value;
let pria = document. querySelector ('#pria') ;
let wanita = document. querySelector ('#wanita') ;


if (pria == '' || wanita == ''){
    alert('silahkan diisi')
    return;
}

if(pria===1) {
    let kalkulasi = ((2.8* LILA + 1.2* TILU - 1.25* pria -75.1))

    document.querySelector ('#result').innerHTML = kalkulasi ;
    

} 

if (wanita===2) {
    let kalkulasi = ((2.8* LILA + 1.2* TILU - 1.25* wanita -75.1))
   
    document.querySelector ('#result').innerHTML = kalkulasi ;


}




});