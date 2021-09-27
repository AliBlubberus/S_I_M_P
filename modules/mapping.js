// Basic Mapping Tools
console.warn("\n\n--{==============================}--\n       Mapping Tools Initialized!\n--{==============================}--");

const noteDirection = {
    "up": 0,
    "down": 1,
    "left": 2,
    "right": 3,
    "up-left": 4,
    "up-right": 5,
    "down-left": 6,
    "down-right": 7,
    "any": 8
};

const lightType = {
    "off": 0,
    "blue-on": 1,
    "blue-flash": 2,
    "blue-fade": 3,
    "red-on": 5,
    "red-flash": 6,
    "red-fade": 7
}

const lightGroup = {
    "back-top": 0,
    "track-ring": 1,
    "left-lasers": 2,
    "right-lasers": 3,
    "bottom-back-side": 4
}

class note {
    constructor(x, y, col, dir, time) {
        this._time = time;
        this._lineIndex = x;
        this._lineLayer = y;
        this._type = Math.max(Math.min(col, 1), 0);
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

class wall {
    constructor(x, width, height, time, duration) {
        this._lineIndex = x;
        this._width = width;
        this._type = height;
        this._time = time;
        this._duration = duration;
    }

    export() {
        return {
            "_time": this._time,
            "_lineIndex": this._lineIndex,
            "_type": this._type,
            "_duration": this._duration,
            "_width": this._width
        }
    }
}

class bomb {
    constructor (x, y, time) {
        this._lineIndex = Math.max(Math.min(x, 3), 0);
        this._lineLayer = Math.max(Math.min(y, 2), 0);
        this._time = time;
    }

    export() {
        return {
            "_time": this._time,
            "_lineLayer": this._lineLayer,
            "_lineIndex": this._lineIndex,
            "_type": 2
        }
    }
}


class lightingEvent {
    constructor (time, type, group) {
        this._time = time;
        this._type = group;
        this._value = type;
    }

    export() {
        return {
            "_time": this._time,
            "_type": this._type,
            "_value": this._value
        }
    }
}

const mapping = {noteDirection, lightGroup, lightType, note, wall, bomb, lightingEvent}

module.exports = mapping;