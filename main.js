document.addEventListener('DOMContentLoaded', () => {

  var elements = document.querySelectorAll('.menu a')

  for(let element of elements) {

    element.addEventListener('click', function() {

      for(let element of elements) {
        element.classList.remove('selected')
      }

      element.classList.add('selected')
    })

  }


})