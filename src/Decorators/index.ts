//Create a decorator for adding a sauce to Pizza instances:

function Sauce(sauce: string) {
    return (constructor: Function) => {
        constructor.prototype.sauce = sauce;
    }
}

@Sauce('pesto')
class Pizza {}

const pizza = new Pizza();
console.log(pizza);