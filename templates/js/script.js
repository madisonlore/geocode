function configureDropDownLists(ddl1, ddl2) {
  var colours = ['Black', 'White', 'Blue'];
  var shapes = ['Square', 'Circle', 'Triangle'];
  var names = ['John', 'David', 'Sarah'];

  switch (ddl1.value) {
    case 'Study Parameters':
      ddl2.options.length = 0;
      for (i = 0; i < colours.length; i++) {
        createOption(ddl2, colours[i], colours[i]);
      }
      break;
    case 'Shapes':
      ddl2.options.length = 0;
      for (i = 0; i < shapes.length; i++) {
        createOption(ddl2, shapes[i], shapes[i]);
      }
      break;
    case 'Names':
      ddl2.options.length = 0;
      for (i = 0; i < names.length; i++) {
        createOption(ddl2, names[i], names[i]);
      }
      break;
    default:
      ddl2.options.length = 0;
      break;
  }

}

function configureDropDownLists2(ddl1, categories, ddl2) {
  var colours = ['Black', 'White', 'Blue'];
  var shapes = ['Square', 'Circle', 'Triangle'];
  var names = ['John', 'David', 'Sarah'];


  ddl2.options.length = 0;
  var avial_list = categories[dd1.value]
  console.log(avial_list.length)
  for (i=0; i< avial_list.length; i++1){
    createOption(ddl2, avial_list[i], avial_list[i]);
  }
}


function createOption(ddl, text, value) {
  var opt = document.createElement('option');
  opt.value = value;
  opt.text = text;
  ddl.options.add(opt);
}