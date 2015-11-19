function formData(){
  return {
    link: {
      title: $('#title').val(),
      url: $('#url').val()
    }
  };
}

function makeLink(data){
  var compiled = _.template("<div id='<%= id %>' class=link data-title='<%= title %>' data-url='<%= url %>' data-read='<%= read %>'><li>Title: <%= title %> </li><li>URL: <%= url %></li><li><button class='mark' id='mark-<%= id %>'>Mark as Read</button></li><li><a href='/links/<%= id %>/edit' id='edit-<%= id %>'>Edit</a></div></br>");
  var newIdea = compiled({'title': data.title,
    'url': data.url,
    'read': data.read,
    'id': data.id
  });
  return newIdea;
}

function postData(){
  $.post('/links',
      formData(),
      function(data){
        if (data.error) {
          $('#error').append(data.error);
          $('#title').val('');
          $('#url').val('');
        } else {
          $('#links').prepend(makeLink(data));
          $('#title').val('');
          $('#url').val('');
          $('#error')[0].innerHTML = "";
        }
      });
}

function markLink() {
  var id = this.id.substr(5);
  $.ajax({
      url: '/mark/' + id + '.json',
      type: 'GET',
      success: function (data) {
        $("#" + id).attr("data-read",true);
        var $mark = $('#mark-' + id);
        $mark.html("<strike>Mark as Unread</strike>");
        $mark.addClass("unmark");
        $mark.removeClass("mark");
      }
  });
}

function unmarkLink() {
  var id = this.id.substr(5);
  $.ajax({
      url: '/unmark/' + id + '.json',
      type: 'GET',
      success: function (data) {
        $("#" + id).attr("data-read",false);
        var $mark = $('#mark-' + id);
        $mark.html("Mark as Read");
        $mark.addClass("mark");
        $mark.removeClass("unmark");
      }
  });
}

$('document').ready(function(){
  $('#save').on('click', postData);
  $('#links').delegate('.mark', 'click', markLink);
  $('#links').delegate('.unmark', 'click', unmarkLink);
});
