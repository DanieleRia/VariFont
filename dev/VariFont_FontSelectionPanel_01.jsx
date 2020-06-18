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
        menu: DropDownList{},\
      },\
      fontStyleGroup: Group {orientation:'row', alignChildren: ['fill', 'fill'],\
        title: StaticText{text: 'Style'},\
        menu: DropDownList{properties:{items:['Item 01']}},\
      },\
      textInputGroup: Group {orientation:'column', alignChildren: ['fill', 'fill'],\
        title: StaticText{text: 'Text Input'},\
        userInput: EditText{properties:{multiline: true}},\
      },\
      buttonsGroup: Group {orientation:'row', alignChildren: ['fill', 'fill'],\
        cancelButton: Button{text: 'Cancel'},\
        okButton: Button{text: 'OK'},\
      },\
    }"

  myPanel.grp = myPanel.add(res);
  myPanel.layout.layout(true);
  myPanel.layout.resize();
  //-------------------------------------------------------
  var fontFamilyMenu = myPanel.grp.fontMenuGroup.menu;
  var fontStyleMenu = myPanel.grp.fontStyleGroup.menu;

  var OS = (function(){
    function isWindows(){
      return $.os.indexOf("Windows") != -1;
    }
    function isMacOS(){
      return !isWindows();
    }
    function openUrl(url){
      if(isWindows()){
        openUrlWin(url);
      }
      else {
        openUrlMac(url);
      }
    }
    function openUrlMac(url){
      var command = 'open "'+url+'"';
      system.callSystem(command);
    }
    function openUrlWin(url){
      var command = 'start ' + url;
      executeWinCommandlineCommand(command);
    }
    function executeWinCommandlineCommand(command){
      var escapedCommand = escapeForWindowsCmd(command);
      var outerCommand = "cmd /c \""+escapedCommand+"\"";
      system.callSystem(outerCommand);
    }
    function escapeForWindowsCmd (string) {
      // put a ^ before every META character that has a special meaning in CMD
      var metaChars = ['^','(',')','%','!','"','<','>','&','|','\n'];
      var prefix ="^";
      for(var i=0; i< metaChars.length; i++){
        string = replaceAll(string, metaChars[i],prefix+metaChars[i]);
      }
      return string;
    }
    function replaceAll(string, search, replace){
      return string.split(search).join(replace);
    }
    return {
      isWindows : isWindows,
      isMacOS : isMacOS,
      openUrl : openUrl
    };
  })();
  var fullFilePath = "C:\\ProgramData\\VariFont\\fontsFound.txt";

  function showMeObjectProperties(myObject) {
    for (var x in myObject) {
      alert(x );
      alert(myObject[x] );
    }
  }
  function populateFamilyMenu(filePath, menu){
    menu.removeAll();
    var myFile = new File(filePath);
    myFile.open( "r" );
    var readMyFile = myFile.read();
    var lines = readMyFile.split("\n");
    var count = lines.length;
    var allEntries = [];
    for (var i=0; i < count; i++) {
      var curLine = lines[i];
      if (curLine.indexOf ("family: ") != -1) {
        var curLineNewStart = curLine.indexOf ("family: ");
        var curLineEnd = curLine.length;
        curLine = curLine.slice(curLineNewStart, curLineEnd);
        var fontInfo = curLine.split(",");
        var fontName = fontInfo[0].replace("family: ", "").replace("'", "").replace("'", "");
        if (i === 0) {
          allEntries.push(fontName);
          menu.add("item", fontName);
        } else {
          if (allEntries.indexOf(fontName) === -1) {
            allEntries.push(fontName);
            menu.add("item", fontName);
          }
        }
      }
    }
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
    menu.items[0].selected = true;
    myFile.close();
  }
  populateFamilyMenu (fullFilePath, fontFamilyMenu);
  //-------------------------------------------------------

  fontFamilyMenu.onChange = function() {
    var selectedFamily =  fontFamilyMenu.selection.toString();
    populateStyleMenu(fullFilePath, selectedFamily, fontStyleMenu)
  };
  return myPanel;
}
var myScriptPal = myScrypt_buildUI(thisObj);

  if((myScriptPal != null) && (myScriptPal instanceof Window)){
    myScriptPal.center();
    myScriptPal.show();
  }

}

myScript(this);
