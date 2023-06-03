var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var House = /** @class */ (function () {
    function House() {
        this.rooms = [];
    }
    House.prototype.build = function () {
    };
    House.prototype.destroy = function () {
    };
    return House;
}());
var Room = /** @class */ (function () {
    function Room(props) {
        this._width = null;
        this._depth = null;
        this._height = null;
        this.doors = [];
        this.windows = [];
        this.locatedObjects = [];
        this._width = props === null || props === void 0 ? void 0 : props.width;
        this._height = props === null || props === void 0 ? void 0 : props.height;
        this._depth = props === null || props === void 0 ? void 0 : props.depth;
    }
    Object.defineProperty(Room.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Room.prototype, "depth", {
        get: function () {
            return this._depth;
        },
        set: function (value) {
            this._depth = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Room.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            this._height = value;
        },
        enumerable: false,
        configurable: true
    });
    Room.prototype.getSquare = function () {
        return this._depth * this._width;
    };
    Room.prototype.letInObject = function (object) {
        this.locatedObjects.push(object);
    };
    return Room;
}());
var Position3D = /** @class */ (function () {
    function Position3D(props) {
        this.x = props.x;
        this.y = props.y;
        this.z = props.z;
    }
    return Position3D;
}());
var Stuff = /** @class */ (function () {
    function Stuff(props) {
        this.position = props.position;
    }
    return Stuff;
}());
var Kitchen = /** @class */ (function (_super) {
    __extends(Kitchen, _super);
    function Kitchen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Kitchen;
}(Room));
var BathRoom = /** @class */ (function (_super) {
    __extends(BathRoom, _super);
    function BathRoom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BathRoom;
}(Room));
var Hallway = /** @class */ (function (_super) {
    __extends(Hallway, _super);
    function Hallway() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Hallway;
}(Room));
var Hall = /** @class */ (function (_super) {
    __extends(Hall, _super);
    function Hall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Hall;
}(Room));
var LivingRoom = /** @class */ (function (_super) {
    __extends(LivingRoom, _super);
    function LivingRoom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LivingRoom;
}(Room));
var TwoRoomsHouse = /** @class */ (function (_super) {
    __extends(TwoRoomsHouse, _super);
    function TwoRoomsHouse(props) {
        var _this = _super.call(this) || this;
        _this.init(props);
        return _this;
    }
    TwoRoomsHouse.prototype.init = function (props) {
        this.rooms.push(new Kitchen({})); // THIS IS ASSOCIATION specifically COMPOSITION (explain like has)
        this.rooms.push(new BathRoom({})); // THIS IS ASSOCIATION specifically COMPOSITION (explain like has)
        this.rooms.push(new Hallway({})); // THIS IS ASSOCIATION specifically COMPOSITION (explain like has)
        this.rooms.push(new Hall({})); // THIS IS ASSOCIATION specifically COMPOSITION (explain like has)
        this.rooms.push(new LivingRoom({})); // THIS IS ASSOCIATION specifically COMPOSITION (explain like has)
        this.rooms.push(new LivingRoom({})); // THIS IS ASSOCIATION specifically COMPOSITION (explain like has)
    };
    return TwoRoomsHouse;
}(House));
var chair = new Stuff({ position: new Position3D({ x: 0, y: 0, z: 0 }) }); // THIS IS ASSOCIATION specifically AGGREGATION
var twoRoomsHouse = new TwoRoomsHouse({});
twoRoomsHouse.rooms[0].letInObject(chair); // THIS IS ASSOCIATION specifically AGGREGATION
console.dir(twoRoomsHouse);
