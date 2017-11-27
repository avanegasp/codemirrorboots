$(document).ready(function() {
  $('#summernote').summernote({
    lang: 'Arial Black', // default: 'en-US'
    height: 200,                 // set editor height
    minHeight: null,             // set minimum height of editor
    maxHeight: null,             // set maximum height of editor
    focus: true,
    theme: 'dracula'
  });

  var markupStr = $('.summernote').eq(1).summernote('code');
});
