var Direction;
(function(Direction) {
  Direction[(Direction['Up'] = 1)] = 'Up';
  Direction[(Direction['Down'] = 2)] = 'Down';
  Direction[(Direction['Left'] = 3)] = 'Left';
  Direction[(Direction['Right'] = 4)] = 'Right';
})(Direction || (Direction = {}));

var Color;
(function(Color) {
  Color[(Color['RED'] = 0)] = 'RED';
  Color[(Color['GREEN'] = 1)] = 'GREEN';
  Color[(Color['BLUE'] = 2)] = 'BLUE';
})(Color || (Color = {}));

var DirectionString;
(function(DirectionString) {
  DirectionString['Up'] = 'UP';
  DirectionString['Down'] = 'DOWN';
  DirectionString['Left'] = 'LEFT';
  DirectionString['Right'] = 'RIGHT';
})(DirectionString || (DirectionString = {}));
