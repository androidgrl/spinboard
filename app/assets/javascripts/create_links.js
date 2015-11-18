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
  var compiled = _.template("<div id='<%= id %>' class=link data-title='<%= title %>' data-url='<%= url %>' data-read='<%= read %>'><li>Title: <%= title %> </li><li>URL: <%= url %></li><li>Read: <%= read %></li></div></br>");
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
        console.log(data);
        $('#links').prepend(makeLink(data));
        $('#title').val('');
        $('#url').val('');
      });
}

$('document').ready(function(){
  $('#save').on('click', postData);
});
