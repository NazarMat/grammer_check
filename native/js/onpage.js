function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

$(document).ready(function(){
    var plusSVG = '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-patch-plus-fll" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zM8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z"/></svg>';
    var questionMarkSVG = '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-patch-question-fll" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm1.602-2.027c-.05.386-.218.627-.554.627-.377 0-.585-.317-.585-.745v-.11c0-.727.307-1.208.926-1.641.614-.44.822-.762.822-1.325 0-.638-.42-1.084-1.03-1.084-.55 0-.916.323-1.074.914-.109.364-.292.51-.564.51C6.203 6.12 6 5.873 6 5.48c0-.251.045-.468.139-.69.307-.798 1.079-1.29 2.099-1.29 1.341 0 2.262.902 2.262 2.227 0 .896-.376 1.511-1.05 1.986-.648.445-.806.726-.846 1.26z"/></svg>';
    var minusSVG = '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-patch-minus-fll" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zM6 7.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z"/></svg>';
    var words = shuffle(pairs.map(function(w){
      return {
        'eng': w[0],
        'ukr': w[1]
      }
    }));
    var html = '';
    words.forEach(function(word, i){
      html += "<tr>";
      html += `<th class="align-middle" scope=\"row\">${i+1}</th>`;
      html += `<td><input type="text" class="form-control" placeholder="${word.ukr}" correct="${word.eng}" disabled/></td>`;
      html += `<td class="align-middle"><span>${word.eng}</span></td>`;
      html += "</tr>";
    })
    $('table.table tbody').append(html);

    $('#restart').click(function(){
      location.reload();
    });

    $("#start").click(function(){
      $("tr td span").hide();
      $("tr td input").attr('disabled', false);
      $("#start").attr('disabled', true);
      $("#check").attr('disabled', false);
    });

    $("#check").click(function(){
      $("tr td span").show();
      $('tr').each(function(){
        var input = $(this).find('input');
        input.attr('disabled', true);
        if(input.val() == input.attr('correct')){
          input.addClass('is-valid');
        } else {
          input.addClass('is-invalid');
        }
      })
    });
});
