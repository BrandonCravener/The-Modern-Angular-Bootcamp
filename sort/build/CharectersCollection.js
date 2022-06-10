"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharectersCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharectersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const charecters = this.data.split("");
        const leftHand = charecters[leftIndex];
        charecters[leftIndex] = charecters[rightIndex];
        charecters[rightIndex] = leftHand;
        this.data = charecters.join("");
    }
    get length() {
        return this.data.length;
    }
}
exports.CharectersCollection = CharectersCollection;
