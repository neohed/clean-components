/*
 * https://easings.net/
 */

const {sqrt, pow, sin, cos, PI} = Math;
const C1 = 1.70158;
const C2 = C1 * 1.525;
const C3 = C1 + 1;
const C4 = (2 * PI) / 3;
const C5 = (2 * PI) / 4.5;
const N1 = 7.5625;
const D1 = 2.75;

const easing = {
    easeInSine: x => 1 - cos((x * PI) / 2),
    easeOutSine: x => sin((x * PI) / 2),
    easeInOutSine: x => -(cos(PI * x) - 1) / 2,
    easeInQuad: x => x * x,
    easeOutQuad: x => 1 - (1 - x) * (1 - x),
    easeInOutQuad: x => x < .5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2,
    easeInCubic: x => x * x * x,
    easeOutCubic: x => 1 - pow(1 - x, 3),
    easeInOutCubic: x => x < .5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2,
    easeInQuart: x => x * x * x * x,
    easeOutQuart: x => 1 - pow(1 - x, 4),
    easeInOutQuart: x => x < .5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2,
    easeInQuint: x => x * x * x * x * x,
    easeOutQuint: x => 1 - pow(1 - x, 5),
    easeInOutQuint: x => x < .5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2,
    easeInExpo: x => x === 0 ? 0 : pow(2, 10 * x - 10),
    easeOutExpo: x => x === 1 ? 1 : 1 - pow(2, -10 * x),
    easeInOutExpo: x => x === 0
        ? 0
        : x === 1
            ? 1
            : x < .5 ? pow(2, 20 * x - 10) / 2
                : (2 - pow(2, -20 * x + 10)) / 2,
    easeInCirc: x => 1 - sqrt(1 - pow(x, 2)),
    easeOutCirc: x => sqrt(1 - pow(x - 1, 2)),
    easeInOutCirc: x => x < .5
        ? (1 - sqrt(1 - pow(2 * x, 2))) / 2
        : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2,
    easeInBack: x => C3 * x * x * x - C1 * x * x,
    easeOutBack: x => 1 + C3 * pow(x - 1, 3) + C1 * pow(x - 1, 2),
    easeInOutBack: x => x < .5
        ? (pow(2 * x, 2) * ((C2 + 1) * 2 * x - C2)) / 2
        : (pow(2 * x - 2, 2) * ((C2 + 1) * (x * 2 - 2) + C2) + 2) / 2,
    easeInElastic: x => x === 0
        ? 0
        : x === 1
            ? 1
            : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * C4),
    easeOutElastic: x => x === 0
        ? 0
        : x === 1
            ? 1
            : pow(2, -10 * x) * sin((x * 10 - .75) * C4) + 1,
    easeInOutElastic: x => x === 0
        ? 0
        : x === 1
            ? 1
            : x < .5
                ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * C5)) / 2
                : (pow(2, -20 * x + 10) * sin((20 * x - 11.125) * C5)) / 2 + 1,
    easeInBounce: x => 1 - this.easeOutBounce(1 - x),
    easeOutBounce: x => {
        if (x < 1 / D1) {
            return N1 * x * x;
        } else if (x < 2 / D1) {
            return N1 * (x -= 1.5 / D1) * x + .75;
        } else if (x < 2.5 / D1) {
            return N1 * (x -= 2.25 / D1) * x + .9375;
        } else {
            return N1 * (x -= 2.625 / D1) * x + .984375;
        }
    },
    easeInOutBounce: x => x < .5
        ? (1 - this.easeOutBounce(1 - 2 * x)) / 2
        : (1 + this.easeOutBounce(2 * x - 1)) / 2
}

export {
    easing
}
