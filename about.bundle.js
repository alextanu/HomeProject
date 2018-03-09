/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log("Hello from About asdasda");
console.log("======================== ignore above");
console.log("======================== The game is below in the about.js file");

// ------------------------------------------------------ constructor
function PlayerConstructor(name, health, strength, defence, speed, luck) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.defence = defence;
    this.speed = speed;
    this.luck = luck;
}

PlayerConstructor.prototype = {
    rapidStrike: function rapidStrike(rapidStrikeChance) {
        var chance = 10; // change chance
        if (rapidStrikeChance <= chance) {
            return true;
        } else return false;
    },
    magicShield: function magicShield(magicShieldChance) {
        var chance = 20; // change chance
        if (magicShieldChance <= chance) {
            return true;
        } else return false;
    }
};

var Orderus = new PlayerConstructor("Orderus", randomize(70, 100), randomize(70, 80), randomize(45, 55), randomize(40, 50), randomize(10, 30));

var wildBeast = new PlayerConstructor("Wild Beast", randomize(60, 90), randomize(60, 90), randomize(40, 60), randomize(40, 60), randomize(25, 40));

// ------------------------------------------------------ Additional functions

function randomize(minPercent, maxPercent) {
    return minPercent + Math.round((maxPercent - minPercent) * Math.random());
}

function showPlayerStatus(player) {
    console.log("------------------- " + player.name);
    console.log("Health = " + player.health);
    console.log("Strength = " + player.strength);
    console.log("Defence = " + player.defence);
    console.log("Speed = " + player.speed);
    console.log("Luck = " + player.luck);
}

function whoAttacksFirst(hero, beast) {
    if (hero.speed > beast.speed) {
        return true;
    } else if (hero.speed < beast.speed) {
        return false;
    } else {
        if (hero.luck > beast.luck) {
            return true;
        } else {
            return false;
        }
    }
}

function calculateHeroDamage(hero, beast) {
    return hero.strength - beast.defence;
}
function calculateBeastDamage(hero, beast) {
    return beast.strength - hero.defence;
}

// ------------------------------------------------------ Execution
console.log("______________________________________________________");
showPlayerStatus(Orderus);
showPlayerStatus(wildBeast);
console.log("______________________________________________________");
//console.log(whoAttacksFirst(Orderus,wildBeast));

var currentRound = 1;
var switchTurn = 0;

if (whoAttacksFirst(Orderus, wildBeast) === true) {
    switchTurn = 0;
    console.log("Orderus attacks first");
} else {
    switchTurn = 1;
    console.log("Wild Beast attacks first");
}

while (currentRound <= 20) {

    var rapidStrikeChance = Math.round(100 * Math.random());
    var magicShieldChance = Math.round(100 * Math.random());
    var luckChance = Math.round(100 * Math.random());

    console.log("R " + currentRound + " begins!");
    //console.log(switchTurn);
    if (switchTurn === 0) {
        if (wildBeast.luck >= luckChance) {
            wildBeast.health = wildBeast.health - calculateHeroDamage(Orderus, wildBeast);
            console.log("Orderus attack = " + calculateHeroDamage(Orderus, wildBeast) + " Wild Beast health = " + wildBeast.health);

            if (Orderus.rapidStrike(rapidStrikeChance) === true) {
                console.log("+++ Orderus has used Rapid Strike");
                wildBeast.health = wildBeast.health - calculateHeroDamage(Orderus, wildBeast);
                console.log("Orderus attack = " + calculateHeroDamage(Orderus, wildBeast) + " Wild Beast health = " + wildBeast.health);
            }
        } else console.log("Orderus Missed");
        switchTurn++;
    } else if (switchTurn === 1) {
        if (Orderus.luck >= luckChance) {
            if (Orderus.magicShield(magicShieldChance) === true) {
                console.log("--- Orderus has used Magic Shield");
                Orderus.health = Orderus.health - calculateBeastDamage(Orderus, wildBeast) / 2;
                console.log("Wild Beast attack = " + calculateBeastDamage(Orderus, wildBeast) / 2 + " Orderus health = " + Orderus.health);
            } else {
                Orderus.health = Orderus.health - calculateBeastDamage(Orderus, wildBeast);
                console.log("Wild Beast attack = " + calculateBeastDamage(Orderus, wildBeast) + " Orderus health = " + Orderus.health);
            }
        } else console.log("Wild Beast Missed");
        switchTurn--;
    }

    if (Orderus.health <= 0 || wildBeast.health <= 0) {
        if (Orderus.health <= 0) {
            console.log("Wild Beast has won!");
        }
        if (wildBeast.health <= 0) {
            console.log("Orderus has won!");
        }
        break;
    }

    if (currentRound === 20 && Orderus.health > 0 && wildBeast.health > 0) {
        if (Orderus.health > wildBeast.health) {
            console.log("Orderus has won on Round 20 by Health points " + Orderus.health);
        }
        if (Orderus.health < wildBeast.health) {
            console.log("Wild Beast has won on Round 20 by Health points " + wildBeast.health);
        }
        if (Orderus.health === wildBeast.health) {
            console.log("It's a tie Orderus" + Orderus.health + " health to Wild Beast" + wildBeast.health + "Health");
        }
    }

    console.log("R " + currentRound + " has ended!");
    currentRound++;
}
console.log("______________________________________________________");
showPlayerStatus(Orderus);
showPlayerStatus(wildBeast);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjk2OTY0OWMzODNhNTcwNjgzMjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Fib3V0LmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJQbGF5ZXJDb25zdHJ1Y3RvciIsIm5hbWUiLCJoZWFsdGgiLCJzdHJlbmd0aCIsImRlZmVuY2UiLCJzcGVlZCIsImx1Y2siLCJwcm90b3R5cGUiLCJyYXBpZFN0cmlrZSIsInJhcGlkU3RyaWtlQ2hhbmNlIiwiY2hhbmNlIiwibWFnaWNTaGllbGQiLCJtYWdpY1NoaWVsZENoYW5jZSIsIk9yZGVydXMiLCJyYW5kb21pemUiLCJ3aWxkQmVhc3QiLCJtaW5QZXJjZW50IiwibWF4UGVyY2VudCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsInNob3dQbGF5ZXJTdGF0dXMiLCJwbGF5ZXIiLCJ3aG9BdHRhY2tzRmlyc3QiLCJoZXJvIiwiYmVhc3QiLCJjYWxjdWxhdGVIZXJvRGFtYWdlIiwiY2FsY3VsYXRlQmVhc3REYW1hZ2UiLCJjdXJyZW50Um91bmQiLCJzd2l0Y2hUdXJuIiwibHVja0NoYW5jZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUM3REE7O0FBQ0FBLFFBQVFDLEdBQVIsQ0FBWSwwQkFBWjtBQUNBRCxR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O0FBQ0Q5QixRQUFRQyxHQUFSLENBQVksd0RBQVo7QUFDQXNCLGlCQUFpQlIsT0FBakI7QUFDQVEsaUJBQWlCTixTQUFqQixFIiwiZmlsZSI6ImFib3V0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDI5Njk2NDljMzgzYTU3MDY4MzI4IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmNvbnNvbGUubG9nKFwiSGVsbG8gZnJvbSBBYm91dCBhc2Rhc2RhXCIpO1xyXG5jb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PT09PT09PT09PSBpZ25vcmUgYWJvdmVcIik7XHJcbmNvbnNvbGUubG9nKFwiPT09PT09PT09PT09PT09PT09PT09PT09IFRoZSBnYW1lIGlzIGJlbG93IGluIHRoZSBhYm91dC5qcyBmaWxlXCIpO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNvbnN0cnVjdG9yXHJcbmZ1bmN0aW9uIFBsYXllckNvbnN0cnVjdG9yKG5hbWUsaGVhbHRoLHN0cmVuZ3RoLGRlZmVuY2Usc3BlZWQsbHVjayl7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5oZWFsdGggPSBoZWFsdGg7XHJcbiAgICB0aGlzLnN0cmVuZ3RoID0gc3RyZW5ndGg7XHJcbiAgICB0aGlzLmRlZmVuY2UgPSBkZWZlbmNlO1xyXG4gICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgdGhpcy5sdWNrID0gbHVja1xyXG5cclxufVxyXG5cclxuUGxheWVyQ29uc3RydWN0b3IucHJvdG90eXBlID0ge1xyXG4gICAgcmFwaWRTdHJpa2U6IGZ1bmN0aW9uKHJhcGlkU3RyaWtlQ2hhbmNlKXtcclxuICAgICAgICBsZXQgY2hhbmNlID0gMTA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGFuZ2UgY2hhbmNlXHJcbiAgICAgICAgaWYgKHJhcGlkU3RyaWtlQ2hhbmNlIDw9IGNoYW5jZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuICAgIG1hZ2ljU2hpZWxkOiBmdW5jdGlvbihtYWdpY1NoaWVsZENoYW5jZSl7XHJcbiAgICAgICAgbGV0IGNoYW5jZSA9IDIwOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hhbmdlIGNoYW5jZVxyXG4gICAgICAgIGlmIChtYWdpY1NoaWVsZENoYW5jZSA8PSBjaGFuY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufTtcclxuXHJcbmxldCBPcmRlcnVzID0gbmV3IFBsYXllckNvbnN0cnVjdG9yKFxyXG4gICAgXCJPcmRlcnVzXCIsXHJcbiAgICByYW5kb21pemUoNzAsMTAwKSxcclxuICAgIHJhbmRvbWl6ZSg3MCw4MCksXHJcbiAgICByYW5kb21pemUoNDUsNTUpLFxyXG4gICAgcmFuZG9taXplKDQwLDUwKSxcclxuICAgIHJhbmRvbWl6ZSgxMCwzMClcclxuKTtcclxuXHJcbmxldCB3aWxkQmVhc3QgPSBuZXcgUGxheWVyQ29uc3RydWN0b3IoXCJXaWxkIEJlYXN0XCIsXHJcbiAgICByYW5kb21pemUoNjAsOTApLFxyXG4gICAgcmFuZG9taXplKDYwLDkwKSxcclxuICAgIHJhbmRvbWl6ZSg0MCw2MCksXHJcbiAgICByYW5kb21pemUoNDAsNjApLFxyXG4gICAgcmFuZG9taXplKDI1LDQwKVxyXG4pO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEFkZGl0aW9uYWwgZnVuY3Rpb25zXHJcblxyXG5mdW5jdGlvbiByYW5kb21pemUobWluUGVyY2VudCxtYXhQZXJjZW50KXtcclxuICAgIHJldHVybiBtaW5QZXJjZW50ICsgTWF0aC5yb3VuZCgobWF4UGVyY2VudC1taW5QZXJjZW50KSAqIE1hdGgucmFuZG9tKCkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dQbGF5ZXJTdGF0dXMocGxheWVyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0gXCIrcGxheWVyLm5hbWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJIZWFsdGggPSBcIiArIHBsYXllci5oZWFsdGgpO1xyXG4gICAgY29uc29sZS5sb2coXCJTdHJlbmd0aCA9IFwiICsgcGxheWVyLnN0cmVuZ3RoKTtcclxuICAgIGNvbnNvbGUubG9nKFwiRGVmZW5jZSA9IFwiICsgcGxheWVyLmRlZmVuY2UpO1xyXG4gICAgY29uc29sZS5sb2coXCJTcGVlZCA9IFwiICsgcGxheWVyLnNwZWVkKTtcclxuICAgIGNvbnNvbGUubG9nKFwiTHVjayA9IFwiICsgcGxheWVyLmx1Y2spXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdob0F0dGFja3NGaXJzdChoZXJvLGJlYXN0KSB7XHJcbiAgICBpZiAoaGVyby5zcGVlZCA+IGJlYXN0LnNwZWVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKGhlcm8uc3BlZWQgPCBiZWFzdC5zcGVlZCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGhlcm8ubHVjayA+IGJlYXN0Lmx1Y2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRlSGVyb0RhbWFnZShoZXJvLGJlYXN0KXtcclxuICAgIHJldHVybiBoZXJvLnN0cmVuZ3RoIC0gYmVhc3QuZGVmZW5jZVxyXG59XHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZUJlYXN0RGFtYWdlKGhlcm8sYmVhc3Qpe1xyXG4gICAgcmV0dXJuIGJlYXN0LnN0cmVuZ3RoIC0gaGVyby5kZWZlbmNlXHJcbn1cclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRXhlY3V0aW9uXHJcbmNvbnNvbGUubG9nKFwiX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXCIpO1xyXG5zaG93UGxheWVyU3RhdHVzKE9yZGVydXMpO1xyXG5zaG93UGxheWVyU3RhdHVzKHdpbGRCZWFzdCk7XHJcbmNvbnNvbGUubG9nKFwiX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXCIpO1xyXG4vL2NvbnNvbGUubG9nKHdob0F0dGFja3NGaXJzdChPcmRlcnVzLHdpbGRCZWFzdCkpO1xyXG5cclxubGV0IGN1cnJlbnRSb3VuZCA9IDE7XHJcbmxldCBzd2l0Y2hUdXJuID0gMDtcclxuXHJcblxyXG5pZiAod2hvQXR0YWNrc0ZpcnN0KE9yZGVydXMsd2lsZEJlYXN0KSA9PT0gdHJ1ZSkge1xyXG4gICAgc3dpdGNoVHVybiA9IDA7XHJcbiAgICBjb25zb2xlLmxvZyhcIk9yZGVydXMgYXR0YWNrcyBmaXJzdFwiKTtcclxufSBlbHNlIHtcclxuICAgIHN3aXRjaFR1cm4gPSAxO1xyXG4gICAgY29uc29sZS5sb2coXCJXaWxkIEJlYXN0IGF0dGFja3MgZmlyc3RcIik7XHJcbn1cclxuXHJcbndoaWxlIChjdXJyZW50Um91bmQgPD0gMjApICAge1xyXG5cclxuXHJcbiAgICBsZXQgcmFwaWRTdHJpa2VDaGFuY2UgPSAgTWF0aC5yb3VuZCgxMDAgKiBNYXRoLnJhbmRvbSgpKTtcclxuICAgIGxldCBtYWdpY1NoaWVsZENoYW5jZSA9ICBNYXRoLnJvdW5kKDEwMCAqIE1hdGgucmFuZG9tKCkpO1xyXG4gICAgbGV0IGx1Y2tDaGFuY2UgPSAgTWF0aC5yb3VuZCgxMDAgKiBNYXRoLnJhbmRvbSgpKTtcclxuXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJSIFwiICsgY3VycmVudFJvdW5kICsgXCIgYmVnaW5zIVwiKTtcclxuICAgIC8vY29uc29sZS5sb2coc3dpdGNoVHVybik7XHJcbiAgICBpZiAoc3dpdGNoVHVybiA9PT0gMCkge1xyXG4gICAgICAgIGlmICh3aWxkQmVhc3QubHVjayA+PSBsdWNrQ2hhbmNlKSB7XHJcbiAgICAgICAgICAgIHdpbGRCZWFzdC5oZWFsdGggPSB3aWxkQmVhc3QuaGVhbHRoIC0gY2FsY3VsYXRlSGVyb0RhbWFnZShPcmRlcnVzLCB3aWxkQmVhc3QpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9yZGVydXMgYXR0YWNrID0gXCIgKyBjYWxjdWxhdGVIZXJvRGFtYWdlKE9yZGVydXMsIHdpbGRCZWFzdClcclxuICAgICAgICAgICAgICAgICsgXCIgV2lsZCBCZWFzdCBoZWFsdGggPSBcIiArIHdpbGRCZWFzdC5oZWFsdGgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKE9yZGVydXMucmFwaWRTdHJpa2UocmFwaWRTdHJpa2VDaGFuY2UpID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIisrKyBPcmRlcnVzIGhhcyB1c2VkIFJhcGlkIFN0cmlrZVwiKTtcclxuICAgICAgICAgICAgICAgIHdpbGRCZWFzdC5oZWFsdGggPSB3aWxkQmVhc3QuaGVhbHRoIC0gY2FsY3VsYXRlSGVyb0RhbWFnZShPcmRlcnVzLCB3aWxkQmVhc3QpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJPcmRlcnVzIGF0dGFjayA9IFwiICsgY2FsY3VsYXRlSGVyb0RhbWFnZShPcmRlcnVzLCB3aWxkQmVhc3QpXHJcbiAgICAgICAgICAgICAgICAgICAgKyBcIiBXaWxkIEJlYXN0IGhlYWx0aCA9IFwiICsgd2lsZEJlYXN0LmhlYWx0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgY29uc29sZS5sb2coXCJPcmRlcnVzIE1pc3NlZFwiKTtcclxuICAgICAgICBzd2l0Y2hUdXJuKys7XHJcblxyXG4gICAgfSBlbHNlIGlmIChzd2l0Y2hUdXJuID09PSAxKSAge1xyXG4gICAgICAgIGlmIChPcmRlcnVzLmx1Y2sgPj0gbHVja0NoYW5jZSkge1xyXG4gICAgICAgICAgICBpZiAoT3JkZXJ1cy5tYWdpY1NoaWVsZChtYWdpY1NoaWVsZENoYW5jZSkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tIE9yZGVydXMgaGFzIHVzZWQgTWFnaWMgU2hpZWxkXCIpO1xyXG4gICAgICAgICAgICAgICAgT3JkZXJ1cy5oZWFsdGggPSBPcmRlcnVzLmhlYWx0aCAtIGNhbGN1bGF0ZUJlYXN0RGFtYWdlKE9yZGVydXMsIHdpbGRCZWFzdCkgLyAyO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJXaWxkIEJlYXN0IGF0dGFjayA9IFwiICsgKGNhbGN1bGF0ZUJlYXN0RGFtYWdlKE9yZGVydXMsIHdpbGRCZWFzdCkgLyAyKVxyXG4gICAgICAgICAgICAgICAgICAgICsgXCIgT3JkZXJ1cyBoZWFsdGggPSBcIiArIE9yZGVydXMuaGVhbHRoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIE9yZGVydXMuaGVhbHRoID0gT3JkZXJ1cy5oZWFsdGggLSBjYWxjdWxhdGVCZWFzdERhbWFnZShPcmRlcnVzLCB3aWxkQmVhc3QpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJXaWxkIEJlYXN0IGF0dGFjayA9IFwiICsgY2FsY3VsYXRlQmVhc3REYW1hZ2UoT3JkZXJ1cywgd2lsZEJlYXN0KVxyXG4gICAgICAgICAgICAgICAgICAgICsgXCIgT3JkZXJ1cyBoZWFsdGggPSBcIiArIE9yZGVydXMuaGVhbHRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBjb25zb2xlLmxvZyhcIldpbGQgQmVhc3QgTWlzc2VkXCIpO1xyXG4gICAgICAgIHN3aXRjaFR1cm4tLTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKE9yZGVydXMuaGVhbHRoIDw9IDAgfHwgd2lsZEJlYXN0LmhlYWx0aCA8PSAwKSB7XHJcbiAgICAgICAgaWYgKE9yZGVydXMuaGVhbHRoIDw9IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJXaWxkIEJlYXN0IGhhcyB3b24hXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAod2lsZEJlYXN0LmhlYWx0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiT3JkZXJ1cyBoYXMgd29uIVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKChjdXJyZW50Um91bmQgPT09IDIwKSAmJiAoT3JkZXJ1cy5oZWFsdGggPiAwKSAmJiAod2lsZEJlYXN0LmhlYWx0aCA+IDApKSB7XHJcbiAgICAgICAgaWYgKE9yZGVydXMuaGVhbHRoID4gd2lsZEJlYXN0LmhlYWx0aCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9yZGVydXMgaGFzIHdvbiBvbiBSb3VuZCAyMCBieSBIZWFsdGggcG9pbnRzIFwiICsgT3JkZXJ1cy5oZWFsdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoT3JkZXJ1cy5oZWFsdGggPCB3aWxkQmVhc3QuaGVhbHRoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2lsZCBCZWFzdCBoYXMgd29uIG9uIFJvdW5kIDIwIGJ5IEhlYWx0aCBwb2ludHMgXCIgKyB3aWxkQmVhc3QuaGVhbHRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKE9yZGVydXMuaGVhbHRoID09PSB3aWxkQmVhc3QuaGVhbHRoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSXQncyBhIHRpZSBPcmRlcnVzXCIgKyBPcmRlcnVzLmhlYWx0aCArIFwiIGhlYWx0aCB0byBXaWxkIEJlYXN0XCIgKyB3aWxkQmVhc3QuaGVhbHRoICsgXCJIZWFsdGhcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJSIFwiICsgY3VycmVudFJvdW5kICsgXCIgaGFzIGVuZGVkIVwiKTtcclxuICAgIGN1cnJlbnRSb3VuZCsrO1xyXG59XHJcbmNvbnNvbGUubG9nKFwiX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXCIpO1xyXG5zaG93UGxheWVyU3RhdHVzKE9yZGVydXMpO1xyXG5zaG93UGxheWVyU3RhdHVzKHdpbGRCZWFzdCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2Fib3V0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==