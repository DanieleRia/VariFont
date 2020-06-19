var w = new Window("palette","String Icon",undefined);

var g = w.add("group");

var myBtn1 = g.add("button",undefined,"Please Select a File");

var myBtn2 = g.add("button",undefined,"Clear All");

var myText = w.add("editText",undefined,"",{multiline:true});

    myText.preferredSize = [250,300];

myBtn1.onClick = function()

{

    var f = File.openDialog ("please select a icon", undefined,false)

    if(f.exists)

    {

        myText.text = "";

        var re1 = /^\(new String\(/,

              re2 = /\)\)$/;

        f.open("r");

        f.encoding = "BINARY";

        var s = f.read();

        myText.text = s.toSource().replace(re1,"").replace(re2,";");

        f.close();

        }

    }

myBtn2.onClick = function()

{

    myText.text = "";

    }



w.show();
