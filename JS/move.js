// Move.js
class Move {
  constructor(name, type, category, power, accuracy, pp, priority) {
    this.name = name;
    this.type = type;   
    this.category = category;  
    this.power = power;     
    this.accuracy = accuracy;
    this.pp = pp;       
    this.currentPP = pp;      
    this.priority = priority;  
  }
}
