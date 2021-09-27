//Dependencies
const fs = require("fs");

//Song Chart Packager
console.warn("\n\n--{==============================}--\n       Chart Tools Initialized!\n--{==============================}--");


class chart {
    constructor() {
        this._customData = {};
        this._notes = [];
        this._obstacles = [];
        this._events = [];
    }

    addNote(exp) {
        this._notes[this._notes.length] = exp.export();
    }

    addWall(exp) {
        this._obstacles[this._obstacles.length] = exp;
    }
    
    addBomb(exp) {
        this._notes[this._notes.length] = exp.export();
    }

    addEvent(exp) {
        this._events[this._events.length] = exp.export();
    }

    save(path) {
        let output = {};

        output._version = "2.2.0";
        output._events = this._events;
        output._notes = this._notes;
        output._obstacles = this._obstacles;

        fs.writeFileSync(path, JSON.stringify(output));
    }

    from(path) {
        let file = fs.readFileSync(path);
        file = JSON.parse(file);

        let out = new chart();
        out._events = file._events;
        out._notes = file._notes;
        out._obstacles = file._obstacles;

        return out;
    }
}

module.exports = chart;