function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6dDjNA7u0rt":
        Script1();
        break;
      case "5u4p6FCRM1A":
        Script2();
        break;
      case "61ayEULWEHI":
        Script3();
        break;
      case "5qrBXciujfr":
        Script4();
        break;
      case "64JFqQtPD8R":
        Script5();
        break;
      case "6jPZDAhJG9N":
        Script6();
        break;
      case "5dLMitjWzOV":
        Script7();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_courses@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  var player = GetPlayer();
var email="nsdd_courses@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script5()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script6()
{
  $("#tab-customlink").show();
}

function Script7()
{
  window.print();
}

