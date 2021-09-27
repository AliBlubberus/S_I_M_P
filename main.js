const fs = require("fs");

//Custom Imports
const mapping = require("./modules/mapping");
const chart = require("./modules/song_tools");

//Test Area

let myChart = new chart();

myChart.addNote(new mapping.note(0, 9, 1, mapping.noteDirection["up-right"], 0));

myChart.addEvent(new mapping.lightingEvent(1, mapping.lightType["blue-fade"], mapping.lightGroup["track-ring"]));

myChart.save("./sample/ExpertPlusStandard.dat");