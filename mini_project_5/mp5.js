

const timespan = $("#timeSpan");

const bsBtn = $("#bsBtn");

const update = function(){
    const today = moment(new Date());
    timespan.text(today.format("dddd, MMM, Do, YYYY, h:mm:ss a"));
}

setInterval(function(){
    $(document).ready(function(){
        timeSpan=$("#timeSpan");
        update();
    })
}, 1000);


$("#modalCard").on("click", "#bsBtn", function(event){
    console.log("test")
})



var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
    var button = event.relatedTarget
  // Button that triggered the modal
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalTitle.textContent = 'New message to ' + recipient
  modalBodyInput.value = recipient
  console.log(button.getAttribute('data-bs-whatever'))
})

// $('#exampleModal').on('show.bs.modal', "bsBtn" function(event) {
//     var button = event.Target;
//     var recipient = button.data('whatever');
//     console.log("test")
// }
