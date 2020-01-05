export class GameLogic{
    constructor(gameLength) {
        this.graph = new Graph();
        this.timer = this.timer.bind(this);
        this.state = {
          cSquares: Array(gameLength*gameLength).fill(null),
          qSquares: Array(gameLength*gameLength).fill(null),
          turnNum: 1,
          IsgameOver: false,
          xScore: 0,
          yScore: 0,
        }
      }

      squareClickHandler(){}
}
