const fs = require("fs");

//Custom Imports
const bm = require("./modules/basic_mapping");
const chart = require("./modules/song_tools");

//Test Area

let myChart = new chart().from("./sample/ExpertPlusStandard.dat");

let testNote = new bm.note(0, 0, 0, 0, 0);

myChart.addNote(testNote);

myChart.save("cum.dat");