$(function () { // load only after the document is ready
  // helper functions
  function search() {
    var text = $('#search-input').val().trim();

    if(!/\S/.test(text)) { // no text, show everything
      console.log('showing everything');

      $('.hidden').removeClass('hidden');
      $('#search-count').text($('.list-item').length + ' entries');
    } else { // show only the tags given
      console.log('showing only %o', text);

      var tags = text.toLowerCase().split(/\s+/).map(function (v) { return '.tag-' + v; });

      // unhiding everything
      $('.hidden').removeClass('hidden');

      // selecting who to hide now
      var itemsToHide = tags.map(function (v) {
        return 'dl > :not(' + v + ')';
      });

      $(itemsToHide.join(', ')).addClass('hidden');
      $('#search-count').text('Showing ' + $('.list-item:not(.hidden)').length +
          ' (out of ' + $('.list-item').length + ')');
    }
  }

  function getUrlHash() {
    if(! window.location.hash) {
      return '';
    }

    return window.location.hash.substring(1); // removing the leading '#'
  }

  // connecting the functions to the HTML elements
  $('#search-input').keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){ // <enter> key
      search($('#search-input').val());
    }
    event.stopPropagation();
  });
  $('#search-button').click(search);
  $('#clear-button').click(function () { $('#search-input').val(''); search(); });

  // if an 'a.tag' is clicked, force a search
  $('a.tag').click(function (event) {
    var href = $(this).attr('href');

    if(! href || ! href.startsWith('#')) {
      console.error('Expected an a.tag to point to "#something", not "%s"', href);
    }

    $('#search-input').val(href.substring(1));
    search();
  });

  // if the q parameter is given, fill #search-input and trigger a search
  var hash = getUrlHash();
  if(hash) {
    $('#search-input').val(hash);
    search();
  }
});