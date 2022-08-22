function nextPage(){
  const activeSlick = document.querySelectorAll('img.slick.active');
  const allSlick = document.querySelectorAll('img.slick');

  console.log(activeSlick[0].nextElementSibling)

  allSlick.forEach(el => {
    el.classList.remove('active')
  })

  newActiveSlick.classList.add('active')

 }
 
 function prevPage(){
  const activeSlick = document.querySelectorAll('img.slick.active');
  const allSlick = document.querySelectorAll('img.slick');

  console.log(activeSlick[0].previousElementSibling)

  allSlick.forEach(el => {
    el.classList.remove('active')
  })

  console.log(activeSlick[0].previousElementSibling)

  activeSlick[0].previousElementSibling.classList.add('active')

 }

 function activeImg(id){
  const activeSlick = document.querySelectorAll('img.slick.active');
  const allSlick = document.querySelectorAll('img.slick');
  const imgId = document.getElementById(id)

  allSlick.forEach(el => {
    el.classList.remove('active')
  })

  imgId.classList.add('active')

 }