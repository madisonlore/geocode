function configureDropDownLists(ddl1, categories, ddl2) {
var questions = categories[ddl1.value]
    ddl2.options.length = 0;
    for (i = 0; i < questions.length; i++) {
      createOption(ddl2, questions[i], questions[i]);
    }

}

function createOption(ddl, text, value) {
  var opt = document.createElement('option');
  opt.value = value;
  opt.text = text;
  ddl.options.add(opt);
}


