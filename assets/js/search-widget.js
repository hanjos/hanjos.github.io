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

      console.log('filtering by %o', tags);
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

  function getUrlParameters() {
    var pageUrl = window.location.search.substring(1),
        parameterList = pageUrl.split('&'),
        variables = {};

    for (var i = 0; i < parameterList.length; i++) {
      var parameter = parameterList[i].split('=');

      variables[parameter[0]] = parameter[1];
    }

    return variables;
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

  // if the q parameter is given, fill #search-input and trigger a search
  var parameters = getUrlParameters();
  if(parameters.q) {
    var text = $('#search-input').val(parameters.q);
    search();
  }
});