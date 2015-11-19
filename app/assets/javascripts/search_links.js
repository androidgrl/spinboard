function searchLinks (searchBox, linksContainer) {
    var dis = searchBox.value;
    if (dis.length > 0) {
      linksContainer.children('.link').each(function (index, link) {
            var $link = $(link);
            var title = $link.data('title');
            var url = $link.data('url');
            if (title.indexOf(dis) !== -1 || url.indexOf(dis) !== -1) {
                $link.show();
            } else {
                $link.hide();
            }
        });
    } else {
        linksContainer.children().show();
    }
}

function listenForSearch (searchBox, linksContainer) {
    searchBox.on("keyup", function () {
        searchLinks(searchBox[0], linksContainer);
    });
}

$('document').ready(function(){
    var s = $('#search');
    if (s) {
        listenForSearch(s, $('#links'));
    }
});
