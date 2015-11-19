function formData(){
  return {
    link: {
      title: $('#title').val(),
      url: $('#url').val()
    }
  };
}

function getBitly(func,data) {
  $.getJSON("http://api.bitly.com/v3/shorten?login=o_1orkeh2ld7&apiKey=R_21a0df76ca6f43e4a3080c4bd3395409&longUrl=" + data.url, function (success) {
    data.shortLink = success.data.url;
    func(data);
  });
}

function makeLink(data){
  var compiled;
  if (data.read) {
    compiled = _.template("<div id='<%= id %>' class=link data-title='<%= title %>' data-url='<%= url %>' data-read='<%= read %>'><li>Title: <%= title %> </li><li>URL: <a href='<%= shortLink %>'><%= shortLink %></a></li><li><button class='unmark' id='mark-<%= id %>'><strike>Mark as Unread</strike></button></li><li><a href='/links/<%= id %>/edit' id='edit-<%= id %>'>Edit</a></div></br>");
  } else {
    compiled = _.template("<div id='<%= id %>' class=link data-title='<%= title %>' data-url='<%= url %>' data-read='<%= read %>'><li>Title: <%= title %> </li><li>URL: <a href='<%= shortLink %>'><%= shortLink %></a></li><li><button class='mark' id='mark-<%= id %>'>Mark as Read</button></li><li><a href='/links/<%= id %>/edit' id='edit-<%= id %>'>Edit</a></div></br>");
  }
  var newIdea = compiled({'title': data.title,
    'url': data.url,
    'read': data.read,
    'id': data.id,
    'shortLink': data.shortLink
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
          getBitly(prependLink,data);
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

function prependLink(link) {
  $('#links').prepend(makeLink(link));
}

$('document').ready(function(){
  $('#save').on('click', postData);
  $('#links').delegate('.mark', 'click', markLink);
  $('#links').delegate('.unmark', 'click', unmarkLink);
});
