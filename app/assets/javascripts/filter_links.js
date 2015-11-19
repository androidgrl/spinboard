function filterRead() {
  var links = $('#links').children('.link');
  links.each(function (index, link) {
    var $link = $(link);
    var read = $link.data('read');
    console.log(read);
    if (read){
      $link.show();
    } else {
      $link.hide();
    }
  });
}

function filterUnread() {
  var links = $('#links').children('.link');
  links.each(function (index, link) {
    var $link = $(link);
    var read = $link.data('read');
    console.log(read);
    if (read === false){
      $link.show();
    } else {
      $link.hide();
    }
  });
}

$('document').ready(function(){
  $('#filter-read').on('click', filterRead);
  $('#filter-unread').on('click', filterUnread);
});
