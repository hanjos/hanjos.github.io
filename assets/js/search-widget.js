$(function () { // load only after the document is ready
  function search() {
    var text = $('#search-input').val();

    if(!/\S/.test(text)) { // no text, show everything
      console.log('showing everything');

      $('.hidden').removeClass('hidden');
      $('#search-count').text($('.list-item').length + ' entries');
    } else { // show only the tags given
      console.log('showing only %o', text);

      var tags = text.toLowerCase().split(/\s+/).map(function (v) { return '.tag-' + v; });

      console.log('filtering by %o', tags);
      $('.hidden').removeClass('hidden');

      var selectors = tags.map(function (v) {
        return 'dl > :not(' + v + ')';
      });

      $(selectors.join(', ')).addClass('hidden');
      $('#search-count').text('Showing ' + $('.list-item:not(.hidden)').length +
          ' (out of ' + $('.list-item').length + ')');
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