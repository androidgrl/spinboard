function editLink () {
  console.log(this, 'editing link');
    var id = this.id.substr(5);
    window.location.href = '/links/' + id + '/edit' + '.json';
}

function updateLink () {
    var id = $('#edit-id').val();
    console.log(id, "this is your id");
    $.ajax({
        url: '/links/' + id,
        type: 'PUT',
        data: editedData(),
        success: function () {
            console.log('edited your link');
        }
    });
      window.location.href = '/';
}

function editedData(){
    return {
        link: {
            title: $('#edit-title').val(),
            url: $('#edit-url').val()
        }
    };
}

$('document').ready(function () {
    $('#links').delegate('.edit', 'click', editLink);
    $('#edit').on('click', updateLink);
});
