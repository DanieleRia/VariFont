function myScript(thisObj){
  function myScrypt_buildUI(thisObj){
    var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Whatever", undefined, {resizeable:true});

    var res = "group{orientation:'column', \
      PlayrName: EditText{characters: 15},\
      Button: Button{text: 'Button'},\
    }"

  myPanel.grp = myPanel.add(res);
  myPanel.layout.layout(true);
  myPanel.layout.resize();
  //-------------------------------------------------------


  //-------------------------------------------------------
  return myPanel;
}
var myScriptPal = myScrypt_buildUI(thisObj);

if((myScriptPal != null) && (myScriptPal instanceof Window)){
  myScriptPal.center();
  myScriptPal.show();
}

}

myScript(this);
