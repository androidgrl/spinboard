function formData(){
  console.log("hello");
  return {
    link: {
      title: $('#title').val(),
      url: $('#url').val()
    }
  };
}

function makeLink(data){
  var compiled = _.template("<div id='<%= id %>' class=link data-title='<%= title %>' data-url='<%= url %>' data-read='<%= read %>'><li>Title: <%= title %> </li><li>URL: <%= url %></li><li><button class='mark' id='mark-<%= id %>'>Mark as Read</button></li></div></br>");
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
        console.log(data.error);
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
  console.log(this, 'this');
  var id = this.id.substr(5);
  console.log(id, "id");
  $.ajax({
      url: '/mark/' + id + '.json',
      type: 'GET',
      success: function (data) {
        $('#mark-' + id).html("<strike>Mark as Unread</strike>");
      }
  });
}

$('document').ready(function(){
  $('#save').on('click', postData);
  $('#links').delegate('.mark', 'click', markLink);
});
