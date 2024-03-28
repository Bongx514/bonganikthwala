const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Your message was sent successfully!', 'success')
  })
}

// function changeBtnValue(){
//   var btnReadMore = $('#btnReadMore');
//   if (btnReadMore.text().trim() === 'Read more...'){
//     btnReadMore.text('Show less');
//   }
//   else(btnReadMore.text().trim() === 'Show less'){
//     btnReadMore.text('Read more...');
//   }
// }

function changeBtnValue(){
  let btnReadmore = document.querySelector('#btnReadMore');

  if (btnReadmore.innerText.trim() === 'Read more...'){
    btnReadmore.innerText = 'Show less...';
  }
  else if (btnReadmore.innerText.trim() === 'Show less...'){
    btnReadmore.innerText = 'Read more...';
  }
}