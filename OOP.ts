abstract class House {
  rooms = []

  build() {

  }

  destroy() {

  }
}

abstract class Room {
  private _width = null
  set width(value: any) {
    this._width = value;
  }
  get width(): any {
    return this._width;
  }

  private _depth = null
  set depth(value: any) {
    this._depth = value;
  }
  get depth(): any {
    return this._depth;
  }

  private _height = null
  set height(value: any) {
    this._height = value;
  }
  get height(): any {
    return this._height;
  }

  constructor(props: IRoomProps) {
    this._width = props?.width;
    this._height = props?.height;
    this._depth = props?.depth;
  }

  getSquare() {
    return this._depth * this._width;
  }

  letInObject(object) {
    this.locatedObjects.push(object);
  }

  doors = []
  windows = []
  locatedObjects = []
}

interface IRoomProps {
  width?: number
  height?: number
  depth?: number
}

class Position3D {
  x
  y
  z

  constructor(props: IPosition3DProps) {
    this.x = props.x;
    this.y = props.y;
    this.z = props.z;
  }
}

interface IPosition3DProps {
  x: number
  y: number
  z: number
}

class Stuff {
  position: Position3D

  constructor(props : IStuffProps) {
    this.position = props.position
  }
}

interface IStuffProps {
  position: IPosition3DProps
}

class Kitchen extends Room {

}

class BathRoom extends Room {

}

class Hallway extends Room {

}

class Hall extends Room {

}

class LivingRoom extends Room {

}

class TwoRoomsHouse extends House{
  constructor(props) {
    super();
    this.init(props);
  }

  private init(props) {
      this.rooms.push(new Kitchen({})); // THIS IS ASSOCIATION specifically COMPOSITION (explain like has)
      this.rooms.push(new BathRoom({})); // THIS IS ASSOCIATION specifically COMPOSITION (explain like has)
      this.rooms.push(new Hallway({})); // THIS IS ASSOCIATION specifically COMPOSITION (explain like has)
      this.rooms.push(new Hall({})); // THIS IS ASSOCIATION specifically COMPOSITION (explain like has)
      this.rooms.push(new LivingRoom({})); // THIS IS ASSOCIATION specifically COMPOSITION (explain like has)
      this.rooms.push(new LivingRoom({})); // THIS IS ASSOCIATION specifically COMPOSITION (explain like has)
  }
}

const chair = new Stuff({position: new Position3D({x: 0, y: 0, z: 0})});// THIS IS ASSOCIATION specifically AGGREGATION
const twoRoomsHouse = new TwoRoomsHouse({});
twoRoomsHouse.rooms[0].letInObject(chair); // THIS IS ASSOCIATION specifically AGGREGATION

console.dir(twoRoomsHouse);
