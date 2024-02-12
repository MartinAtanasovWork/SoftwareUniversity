function solution(){

    class Balloon{
        color;
        gasWeight;
        
        constructor(color,gasWeight){
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon{
        _ribbon;

        constructor(color,gasWeight,ribbonColor,ribbonLength){
            super(color,gasWeight);
            this._ribbon = {"color":ribbonColor,"length":ribbonLength};
        }

        get ribbon(){
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon{
        text;

        constructor(color,gasWeight,ribbonColor,ribbonLength,text){
            super(color,gasWeight,ribbonColor,ribbonLength);
            this.text = text;
        }

        get text(){
            return this.text;
        }
    }

    return {
        Balloon,PartyBalloon,BirthdayBalloon
    }
}
let classes = solution();
let testBalloon = new classes.Balloon("yellow", 20.5);
let testPartyBalloon = new classes.PartyBalloon("yellow", 20.5, "red", 10.25);
let ribbon = testPartyBalloon.ribbon;
console.log(testBalloon);
console.log(testPartyBalloon);
console.log(ribbon);


