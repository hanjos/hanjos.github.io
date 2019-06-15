$(function () { // load only after the document is ready
  console.log('ready!');

  function search() {
    var text = $('#search-input').val();

    if(!/\S/.test(text)) { // no text, show everything
      console.log('showing everything');

      $('.hidden').removeClass('hidden');
      $('#search-count').text($('.bookmark').length + ' bookmarks');
    } else { // show only the tags given
      console.log('showing only %o', text);

      var tags = text.toLowerCase().split(/\s+/).map(function (v) { return '.tag-' + v; });

      console.log('filtering by %o', tags);
      $('.hidden').removeClass('hidden');

      var selectors = tags.map(function (v) {
        return 'dl > :not(' + v + ')';
      });

      $(selectors.join(', ')).addClass('hidden');
      $('#search-count').text('Showing ' + $('.bookmark:not(.hidden)').length +
          ' (out of ' + $('.bookmark').length + ')');
    }
  }

  // search input and button
  $('#search-input').keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      search();
    }
    event.stopPropagation();
  });
  $('#search-button').click(search);
});