const buttonContainer = document.querySelector('.buttons-container');
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

buttonContainer.addEventListener('click',(event)=>{
  console.log(event.target)
  console.log(event.type)
  console.log(event.currentTarget)
  console.log(event.target.tagName)
  if(event.target.tagName != 'BUTTON'){
      return;
  }
  if(!event.target.classList.contains('tab-button')){
      return;
  }
  tabButtons.forEach(button=>{
    if(button.classList.contains('active-button')){
         button.classList.remove('active-button')
    }
  })
  event.target.classList.add('active-button');
  tabContents.forEach(tabContent=>{
      if(tabContent.classList.contains('active-tab-content')){
          tabContent.classList.remove('active-tab-content')
      }
  })
  //console.log(event.target.dataset.id)
  tabContents.forEach(tabContent=>{
      if(tabContent.id == event.target.dataset.id){
          tabContent.classList.add('active-tab-content')
      }
  })
})