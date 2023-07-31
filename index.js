function saturdayFun(activity = "roller-skate") {
  return "This Saturday, I want to " + activity + "!";
}

function mondayWork(ifEmpty = "go to the office") {
  return "This Monday, I will " + (ifEmpty) + '.';
}

function wrapAdjective(highlight = "*") {
  return function (adjective) {
    return "You are " + highlight + adjective + highlight + "!";
  };
}
