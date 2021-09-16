// Basic Mapping Tools
console.warn("\n\n--{==============================}--\n  Basic Mapping Tools Initialized!\n--{==============================}--");



class note {
    constructor(x, y, col, dir, time) {
        this._time = time;
        this._lineIndex = x;
        this._lineLayer = y;
        this._type = col;
        this._cutDirection = dir;
    }

    export() {
        return {
            "_time": this._time,
            "_lineIndex": this._lineIndex,
            "_lineLayer": this._lineLayer,
            "_type": this._type,
            "_cutDirection": this._cutDirection
        }
    }
}

const bm = {note}

module.exports = bm;