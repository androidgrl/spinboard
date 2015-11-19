function loadLinks () {
  $.ajax({
    url: '/links',
    type: 'GET',
    success: function (data) {
      data.forEach(function(link){
        getBitly(appendLink,link);
      });
    }
  });
}

function appendLink(link) {
  $('#links').append(makeLink(link));
}

$('document').ready(function(){
  loadLinks();
});
