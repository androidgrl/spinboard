function sortAlphabetically() {
  var links = $('#links').children('.link');
  var sorted = _.sortBy(links, function (link) {
    var $link = $(link);
    return $link.data('title');
  });
  sorted.forEach(function(link){
    $('#links').append($(link));
  });
}
$('document').ready(function(){
  $('#sort').on('click', sortAlphabetically);
});
