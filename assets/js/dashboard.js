// dashboard sidebar

let hamIcon=document.getElementById('hamIcon');
let closeIcon=document.getElementById('close-icon');

hamIcon.addEventListener('click',function () {
  document.querySelector('aside').classList.add('active');
})
closeIcon.addEventListener('click',function () {
    document.querySelector('aside').classList.remove('active');
  })



