function myScript(thisObj){
  function myScrypt_buildUI(thisObj){
    var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Whatever", undefined, {resizeable:true});

    var res = "group{orientation:'column', alignChildren: ['fill', 'fill'], \
      fontFilterGroup: Group {orientation:'row', alignChildren: ['fill', 'fill'],\
        title: StaticText{text: 'Filter'},\
        userInput: EditText{characters: 8},\
      },\
      fontMenuGroup: Group {orientation:'row', alignChildren: ['fill', 'fill'],\
        title: StaticText{text: 'Font'},\
        menu: DropDownList{properties:{items:['Item 01']}},\
      },\
      fontStyleGroup: Group {orientation:'row', alignChildren: ['fill', 'fill'],\
        title: StaticText{text: 'Style'},\
        menu: DropDownList{properties:{items:['Item 01']}},\
      },\
      renderplaceholder: IconButton {alignment: ['fill', 'fill']},\
      textInputGroup: Group {orientation:'column', alignChildren: ['fill', 'fill'],\
        title: StaticText {text: 'Text Input'},\
        userInput: EditText{properties:{multiline: true}},\
      },\
      buttonsGroup: Group {orientation:'row', alignChildren: ['fill', 'fill'],\
        cancel: Button{text: 'Cancel'},\
        ok: Button{text: 'OK'},\
      },\
    }"

    var thumbnailImage =
      "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\u00A4\x00\x00\x00\x14\b\x06\x00\x00\x00\x03\x7F\u00964\x00\x00\x00\tpHYs\x00\x00\x0B\x12\x00\x00\x0B\x12\x01\u00D2\u00DD~\u00FC\x00\x00\x03\u00E6IDATh\u0081\u00ED[\u00EDm\u00DB@\fe\u008A\u00FE\u008F;A\u00B2\u0081\u00BC\u0081\u00DD\t\u00EAN\u00E0t\u0082:\x13T\u009E \u00E9\x04u&\u00882A\u00E5\r\u009C\r\u00D4\r\u00EC\tT\u009C\u00C1+X\u0086G\u00DD\u00A7l\x03y\u00C0\x01\u0081t\u00E2\u00F1x\x14\u00F9H+W}\u00DF\u00DF\x02\u0080\x19\u00BEh\x1D\u00F3\u008C\u008C)\x0E\u0083\x1D\u008EN\u0098;!\u00F3,:6\u0097\u00CF\u00B1\u00F7C\u00F55\u00D8\u00A3.\u00A9\u0098+\u00CF\u00EFp\x1D\x17\u00A4=k\u00A0\u00F2\u00F8\u00BA\u00D2~\u00A6\u00B8\x06\u00BFO\u00AFSp{\u00BB\u00A0\u00EDY\u0093\u00A9\u009D\u0093\u00FB<\u00FA\u00BE\u00AF\u00FB0\x00\x1B\u0093\u00BE\u00EF7\u008A\u0084\x16\u00E7\u00D0\u00E7\u00E6\u00C2\u00BCf`N\u008D\u00D7C\u00F5\u00B5:p\u00BDc\u00C6\x10\u00F6h\u008B[A\u00B6\u00B4g\rs\u00F2\u00AC\x04n\u00D3\u00D6\u00B1\u00DFv`\u009D\u0086\u00AD\u00C5G\bj\u00F2\u00AC\u00CF9\x19\u00DD\x16t\u00BD\x0F\x01\u00DE\u00EF\u0082\u0089\u0098K\u00E5\u00FE\f\u00E7Ho)\u00C5\u0097\u0088\u00C8wn\u00B8F[\u0098\u00B7\x7FQX\u00B7\\\u00F2\u008D\u00DD\x7F\x03\u00C0&\u0093\u00BC\x10\x18\u00DFx\u00A6k\u00A7:d\r\x00\x15\u00BB\u00F6\u008A\u0083\u00C2\u00CCy\u00F4\u0090W\u00FA\x10\u00C7\u00C25\x1Ay\u00E8%L\u00C1*\u00B3\u00BC\u00A5\u00E7\x19\u0095\u00C0\u00D2R\x03\u00C9!\u00B7\x00p\u00A5\f\nn\u00945\u00E1\u0091kv\u00CF\u00C7\u00D9|\u008C\\\x0B\u00BAq|f\u00F7CxP\b\u00EC:\u009F\x00\u00E0\u009E=w\u00ED\u00B1g\u00CD\u00CE.\u00AEnQEf\x14\u00AB\u00F3W\x008\u00B0{\u00DF=dj:\u00D7\u00CAsk2OZ\u00FBx\u00F6)\x11r\u008AF\u00A7xt\u00FC\r8w\u00C81n\x02\u0089\u00FF\u00B9`\u008F{\u00E7\u0099\u00A14\x05I\u0089\u0092\u008D\u00E3<rG^\u00D7\u00DA\u00DCy\u008F\u00D9$\u00C5!\u00F9f^Y\u0095\u00B9\x17\x0E\u00C8'R\u008Da\u0090RhF^\u00EF.\u00F1y\u00C3u_\u00D8\u00B5R\u00D9DZ\u00FB\rR\x1C\u0092\u00F3#\u00A9\u00E5\u00A1\u00B5A(\u00A8\u00E3.\ns\u00AF\u0092\u00E0)\u00DAw\u00FF\u00B1\u00F0\u00A1\x05C\u00E0\u00D4\u0080\u00D7\x04\u00A5 f\u00C2\u008F\u00C2\u00B5\u0089\u00F2\u0096\u00F0>S(\\r[b\bkd\u009F\x1E\u00D9\u00B9\u00E0\x16\u00A3\x15?\u00CC!\x1E\u00E8\u00BA\u00BFS2\u00C5\u0096\u00D1\u00A5\u00BB\u00C4\u00C8\x1C\u00DA\u009F\u00D5\u00F6\u00E4\x13]'x\u00BE<e\x1F\u00E5J\x0EYa\x1B@\u00C2\u009A\b\u00CA\u00C9\u008F\x1A4,5\u00B2F\u0090\u00CF\x05.;\x01\u00A6\u00C2\u00A1\u00C3\u009EE\u00EE\u00A3!\u00AD\u00B6\x12\u00ED\u00B2\u00A9\u00A2{\u00AC\u00CE?pH8\u00D8\u00FA#G\x1F2\x17h\x1Flv\u00E1=\u00C9m\x06~\u00A7\u0081\x17\u008C\u0097\u00DC.;`d=\u00D2\x1B)B\u00FA\"\u0086\x1Fi\u00CF<b\u00DB\u00C1\u00E2R\u008D\u00FC\x14\u00E0\u008C\u00BC5f1DWL\u00F4\u00FA\u0083]\t\u00C0\u00F5r\u00F2U-\u00B2\u00BBt\u008E\u00C1+uFp8\u00E4\u00D6\u0093\x0B\u00EC0]\u0084@\u00DBh\u0087\nZ\x1E\x16*\u00FB\x14\u00B8G[Q]C\u00AA\u00D4\x14Zb^\u00E0\x07\u00FC\u00BB\x12:\x1A\u00BE\bm\u00B3\u00C5\u00EA\u00FC\u0084<\u00F1\x17\u00B9V\u00E1\u00FA\u00FFxi\u00CE\u0094-U\u00C6\u00A1\u00D5\u00F2\u00A9~)\u0088\u0085T|\u00DC\x14N\u00D7\x16\u00BC\u0090\u0089\u00AD\u008Ey&\u00DA\u00C6\u00AB\u00A4\u00A2CZ\u00C6\u00E5\u00FF\u00E7\u00E0)\x0E)\u00B5\x0B\u00A8\x03N\"\u00AA\u00CE\u00B1\u00FBx9\u00D0\u00E1\u00DBO1FA\u00D6\t=\u00C4P\u00CC\u0085\"\u00A5\u00F4\x19p\u00DB\u00CChVI\u00E1\u0090-\x12R\u00FAk\u00CD\u008A,\u00C8#\u00C7\u00C1\u00C3!\u00F7x\u00B8\u00DA\u00C7\x1A\u00E7\u0088\u009A\u00E9l\u00A3\u00E4\u00D0\x07\x0BZz\u00F7\u00F9<l\x13Aml\u008A\u009E;\u00CE\u00A8\u00B4\u00CE-FI\u00FA\"\u00D4Vn\u008AC\x02k?\x00\u0096\u00F56\x05\u00F0\u00E8\u00E8\u009B\u008E7\x17\u00E8\u0090\u009D\u00F0\"\u00D5\x1E\u0087\u00AB\u00B5\u008D\u00D6\x1E\u0091\u00B6\x11\u0082\u00C2\x10\x1E\u0094\u00FB+\u008F\u00E2(Ug@\u00BBP\u0087\u00B4Q\u00B2M\u00E5\u0090+\u00AC\u00F6(*\u00C7\x17@\u00BE\x0E\u00D9\n2/\x01\u00FC \u00C6\u00E2\u00929>\x1B3N\u00FDm\u00C4O\u00D06\u00C2\x19\x1F\u00ED\u0097\u00EA\u0090{\u00F4l\u008D\b\u00BF\u00F0\u00D2\u00DE\x03\u00A7\u00F86/\x15\u00A7\u00E2\u0092)\u00B62\u0081\u00E2'\u00A6\u00F1\u00B1m.rI\u00F3/\f\u00B9\x16\b\u00F9\x17\u0086w\u00BC\u00E3-\x00\u00E0/\u00CD\u0089\x1C\x06\u00F1\x1A\u0092$\x00\x00\x00\x00IEND\u00AEB`\u0082";

  myPanel.grp = myPanel.add(res);
  myPanel.layout.layout(true);
  myPanel.layout.resize();
  //-------------------------------------------------------
  var filterInput = myPanel.grp.fontFilterGroup.userInput;
  var fontFamilyMenu = myPanel.grp.fontMenuGroup.menu;
  var fontStyleMenu = myPanel.grp.fontStyleGroup.menu;
  var thumbnail = myPanel.grp.renderplaceholder;
  var cancelButton = myPanel.grp.buttonsGroup.cancel;
  var okButton = myPanel.grp.buttonsGroup.ok;
    thumbnail.image = thumbnailImage;

  //var fullFilePath = "C:\\ProgramData\\VariFont\\fontsFound.txt";
  var fullFilePath = File.openDialog()

  function showMeObjectProperties(myObject) {
    for (var x in myObject) {
      alert(x );
      alert(myObject[x] );
    }
  }
  function parseFileAndPopulate (numEntries, entries, targetString, myMenu, myFilter) {
    var allEntries = [];
    for (var i=0; i < numEntries; i++) {
      var curLine = entries[i];
      if (curLine.indexOf (targetString) != -1) {
        var curLineNewStart = curLine.indexOf (targetString);
        var curLineEnd = curLine.length;
        curLine = curLine.slice(curLineNewStart, curLineEnd);
        var fontInfo = curLine.split(",");
        var fontName = fontInfo[0].replace(targetString, "").replace("'", "").replace("'", "");
        if (myFilter === undefined) { // if there is not myFilter
          if (i === 0) {
            allEntries.push(fontName);
            myMenu.add("item", fontName);
          } else {
            if (allEntries.indexOf(fontName) === -1) {
              allEntries.push(fontName);
              myMenu.add("item", fontName);
            }
          }
        } else if (myFilter !== undefined && myFilter.length > 0 ){ // if the filter is setup and is not an emplty string
          if (fontName.toLowerCase().indexOf(myFilter.toLowerCase()) === 0) { // if the filter is found at the beginning of cur font name
            if (i === 0){ // if the loop is at the beginning of the file
              allEntries.push(fontName); // put font name in the temp array
              myMenu.add("item", fontName); // add curr font name
            } else { // if the loop is not at the beginning of the file
              if (allEntries.indexOf(fontName) === -1) { // if the curr font name is not the temp array already
                allEntries.push(fontName); // put it in the temp array
                myMenu.add("item", fontName); // add it to the list
              }
            }
          }
        }
      }
    }
    if (allEntries.length === 0) {
      myMenu.add("item", "font not found");
      return;
    }
  }
  function populateFamilyMenu(filePath, menu, myFilter){
    menu.removeAll();
    var myFile = new File(filePath);
    myFile.open( "r" );
    var readMyFile = myFile.read();
    var lines = readMyFile.split("\n");
    var count = lines.length;
    parseFileAndPopulate (count, lines, "family: ", menu, myFilter);
    myFile.close();
    menu.items[0].selected = true;
  }
  function populateStyleMenu(filePath, targetFamily, menu){
    menu.removeAll();
    var myFile = new File(filePath);
    myFile.open( "r" );
    var readMyFile = myFile.read();
    var lines = readMyFile.split("\n");
    var count = lines.length;

    for (var i=0; i < count; i++) {
      var curLine = lines[i];
      if (curLine.indexOf(targetFamily) != -1) {
        var curLineNewStart = curLine.indexOf ("style: ");
        var curLineEnd = curLine.length;
        curLine = curLine.slice(curLineNewStart, curLineEnd);
        var styleInfo = curLine.split(",");
        var styleName = styleInfo[0].replace("style: ", "").replace("'", "").replace("'", "");
        menu.add("item",styleName);
      }
    }
    //menu.items[0].selected = true;
    myFile.close();
  }
  populateFamilyMenu (fullFilePath, fontFamilyMenu, undefined);
  //populateStyleMenu(fullFilePath, fontFamilyMenu.selection.toString(), fontStyleMenu);

  //-------------------------------------------------------

  fontFamilyMenu.onChange = function() {
    if (this.selection) {
      var selectedFamily =  fontFamilyMenu.selection.toString();
    }
    populateStyleMenu(fullFilePath, selectedFamily, fontStyleMenu);
  };

  filterInput.onChanging = function() {
    if (this.text.length > 0) {
      fontFamilyMenu.removeAll();
      var input = this.text;
      populateFamilyMenu (fullFilePath, fontFamilyMenu, input);
    } else {
      populateFamilyMenu (fullFilePath, fontFamilyMenu, undefined);
    }
    //fontFamilyMenu.removeAll();
  }

  cancelButton.onClick = function() {
    alert ("cancel button");
  }
  okButton.onClick = function() {
    alert ("ok button");
  }
  return myPanel;
}
var myScriptPal = myScrypt_buildUI(thisObj);

  if((myScriptPal != null) && (myScriptPal instanceof Window)){
    myScriptPal.center();
    myScriptPal.show();
  }

}

myScript(this);
