class Node{
    constructor(key){
        var n = {};
        n.key = key;
        n.left = null;
        n.right = null;
        n.up = null;
        n.down = null;
        return n;
    }
}
class Skiplist{
    constructor(){
    this.levels = [];
    this.maxLevel = 0;
    this.numofitems = 0;
    this.inputArray = [];
    }
    GenerateRandomArray(times){
        var last = 0;
        for(var i = 0; i< times; i++){
            last = last + Math.ceil(Math.random() * 10); 
            this.inputArray[i] = last;
        }
        return;
    }
    InsertOrdered(){
        var last = 0;
        for(var i = 0; i< this.inputArray.length; i++){
            this.Insert(this.inputArray[i]);
        }

        return;
    }
    InsertReverseOrdered(){
        var last = 0;
        for(var i = this.inputArray.length -1; i>= 0; i--){
            this.Insert(this.inputArray[i]);
        }
        return;
    }
    InsertRandomOrdered(){
        var first = 0;
        var last = this.inputArray.length -1;
        var randomnumber = 0;
        var fromfirstswitch = true;
        while(first < last){
            if(randomnumber <= 0){
                fromfirstswitch = !fromfirstswitch;
                randomnumber = Math.random()* 10;
            }
            if(fromfirstswitch){
                this.Insert(this.inputArray[first]);
                first++;
                randomnumber--;
            }
            else{
                this.Insert(this.inputArray[last]);
                last--;
                randomnumber--;
            }
        }
    }
    DeleteOrdered(){
        for(var i = 0; i< this.inputArray.length; i++){
            this.Delete(this.inputArray[i]);
        }
        return;
    }
    DeleteReverseOrdered(){
        var last = 0;
        for(var i = this.inputArray.length -1; i >= 0; i--){
            this.Delete(this.inputArray[i]);
        }
        return;
    }
    DeleteRandomOrdered(){
        var first = 0;
        var last = this.inputArray.length -1;
        var randomnumber = 0;
        var fromfirstswitch = true;
        while(first < last){
            if(randomnumber <= 0){
                fromfirstswitch = !fromfirstswitch;
                randomnumber = Math.random()* 10;
            }
            if(fromfirstswitch){
                this.Delete(this.inputArray[first]);
                first++;
                randomnumber--;
            }
            else{
                this.Delete(this.inputArray[last]);
                last--;
                randomnumber--;
            }
        }
    }
    SearchExistant(){
        for(var i = 0; i< this.inputArray.length; i++){
            this.Search(this.inputArray[i]);
        }
        return;
    }
    SearchNonExistant(){
        var last= this.inputArray[this.inputArray.length-1];
        for(var i = 0; i< this.inputArray.length; i++){
            this.Search(last+i);
        }
        return;
    }
    CoinFlip(){//Random coin flip returns true or false
        return Math.random() > .5 ? true:false ;
    }
    Delete(key){
        var level = this.maxLevel-1;
        while(true){//Level the initial level for searching in skiplist
            if(this.levels[level].key > key){
                if(level == 0){
                    return;
                }
                level --;
            }
            else break;
        }
        var iterator = this.levels[level];
        while(level >= 0){
            iterator = this.getSlightlyLessInLevel(key,iterator);
            if(key == iterator.key){
                if(iterator.left == null){//initial at this level
                    if(iterator.right != null){//it is at start but has continious nodes
                        this.levels[level] = iterator.right;
                        iterator.right.left = null;
                    }
                    else{
                        if(this.maxLevel == level + 1){
                            delete this.levels[level] ;
                            this.maxLevel --;
                        }
                    }
                }
                else{
                    iterator.left.right = iterator.right;
                    if(iterator.right != null)//if not at the end of this level
                        iterator.right.left = iterator.left;
                    
                }
                if(level != 0){
                    iterator = iterator.down;
                    iterator.up = null;
                    level --;
                }
                else{
                    return;
                }
            }
            else{
                iterator = iterator.down;
                level --;
            }

            
        }
    }
    Search(key){
    var level = this.maxLevel - 1 ;
    while(true){//Level the initial level for searching in skiplist
        if(this.levels[level].key > key){
            if(level == 0){
                return false;
            }    
            level --;
        }   
        else break;
    }
    var iterator = this.levels[level];
    while(level != 0){
        iterator = this.getSlightlyLessInLevel(key,iterator);
        iterator = iterator.down;
        level --;
    }
    while(true){
        if(iterator.key == key){
            return true;
        }
        if(iterator.right != null &&iterator.right.key <= key){
            iterator = iterator.right;
        }
        else{
            break;
        }
    }
    return false;
}
    AddToLevel(level, key){   
        if(this.levels[level] == undefined){
            var node = new Node(key);
            node.level = level;
            this.levels[level] = node;
            this.maxLevel ++;
            return node;
        }
        if(this.levels[level].key > key){
            var node = new Node(key);
            node.level = level;
            node.right = this.levels[level];
            this.levels[level].left = node;
            this.levels[level] = node;
            return node;
        }
        var iterator = this.levels[level];
        while(iterator.right != null && iterator.right.key <= key){
            iterator = iterator.right;
        }
        var node = new Node(key);
        node.level = level;
        node.right = iterator.right;
        node.left = iterator;
        iterator.right = node;
        return node;
    }
    Insert(key){
        var level = 0;
        var node = this.AddToLevel(level,key);
        this.numofitems ++;
        while(this.CoinFlip()){
            level ++;
            this.numofitems ++;
            var up = this.AddToLevel(level,key);
            up.down = node;
            node.up = up;
            node = node.up;
        }
    }
    getSlightlyLessInLevel(key, point){
        var iterator = point;
        if(key == point.key){
            return point;
        }
        while(true){
            if(iterator.right != null){//look left
                if(iterator.right.key <= key){
                    iterator = iterator.right;
                }
                else{
                    break;
                }
            }
            else{
                break;
            }
        }
        return iterator;
    }
}
var skiplist = new Skiplist();
module.exports = skiplist; 