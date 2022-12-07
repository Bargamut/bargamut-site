module.exports.multiply = function(x: number, y: number): number { return x * y; }
module.exports.add = function(x: number, y: number): number { return x + y; }

module.exports.multiplyAsync = function(x: number, y: number, callback: (value: number) => void): void {
  setTimeout(function() {
    callback(x * y);
  }, 1000);
}