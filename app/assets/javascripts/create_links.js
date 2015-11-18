function formData(){
    return {
        link: {
            title: $('#title').val(),
            url: $('#url').val()
        }
    };
}

function makeLink(data){
    var compiled = _.template("<div id='<%= id %>' class=link data-title='<%= title %>' data-body='<%= body %>' data-quality='<%= quality %>'><li>Title: <%= title %> </li><li>Body: <%= body %> </li><li id='quality-<%= id %>'>Quality: <%= quality %></li> <%= deleteButton(id) %> <%= editButton(id) %> <%= upButton(id) %> <%= downButton(id) %></div>");
    var newIdea = compiled({'title': data.title,
                            'body': data.url,
                            'quality': data.quality,
                            'id': data.id
                        });
    return newIdea;
}

function postData(){
    $.post('/links',
            formData(),
            function(data){
              console.log(data);
                //$('#links').prepend(makeLink(data));
                //$('#title').val('');
                //$('#url').val('');
            });
}

$('document').ready(function(){
    $('#save').on('click', postData);
});
