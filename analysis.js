var sizeof = require("object-sizeof");
var skiplist = require("./skiplist");
class Analysis {
    DoAnalysis() {
        var arr = [];
        for(var i = 0; i < 10; i ++){
            arr[i] = this.SimpleExperiment();
        }
        return { title: 'Analysis Of Skiplist', exps : arr };
    }
    SimpleExperiment(){
        var testData = {};
        //generating input array
        skiplist.GenerateRandomArray(10000);
        var initialstate = getNanoTime();
        console.log("i: " +initialstate);
        //Inserting items ORDERED
        skiplist.InsertOrdered();
        var insertedstate = getNanoTime();
        console.log("i2: " +insertedstate);
        testData.OrderedLevel = skiplist.maxLevel;
        testData.OrderedItems = skiplist.numofitems;
        //Searching Existing items
        skiplist.SearchExistant();
        var e_searchedstate = getNanoTime();
        console.log("i3: " + e_searchedstate);
        //Searching NonExisting items
        skiplist.SearchNonExistant();
        var n_searchedstate = getNanoTime();
        console.log("i4: " + n_searchedstate);
        //Deleting ORDERED
        skiplist.DeleteOrdered();
        var deletedstate = getNanoTime();
        console.log("i5: " + deletedstate); 
        skiplist.maxLevel = 0;
        skiplist.levels = [];
        skiplist.numofitems = 0;
        var random_initialstate = getNanoTime();
        console.log("r: " + random_initialstate);
        //Inserting items RANDOMLY
        skiplist.InsertRandomOrdered();
        var random_insertedstate = getNanoTime();
        console.log("r1: " + random_insertedstate);
        testData.RandomLevel =skiplist.maxLevel;
        testData.RandomItems =skiplist.maxLevel;
        //Deleting RANDOMLY
        skiplist.DeleteRandomOrdered();
        var random_deletedstate = getNanoTime();
        console.log("r2: " + random_deletedstate);
        skiplist.maxLevel = 0;
        skiplist.levels = [];
        skiplist.numofitems = 0;
        var reversed_initialstate = getNanoTime();
        console.log("-: " + reversed_initialstate);
        //Inserting REVERSED
        skiplist.InsertReverseOrdered();
        var reversed_insertedstate = getNanoTime();
        console.log("-1: " + reversed_insertedstate);
        testData.ReversedLevel =skiplist.maxLevel;
        testData.ReversedItems =skiplist.maxLevel;
        //Deleting REVERSED
        skiplist.DeleteReverseOrdered();
        var reversed_deletedstate = getNanoTime();
        console.log("-2: " + reversed_deletedstate);
        testData.OrderedInsertionCost = (insertedstate - initialstate);
        testData.ExistantSearchCost = (e_searchedstate-insertedstate);
        testData.NonExistantSearchCost = (n_searchedstate-e_searchedstate);
        testData.OrderedDeletionCost = (deletedstate- n_searchedstate);
        testData.RandomInsertionCost = (random_insertedstate - random_initialstate);
        testData.RandomDeletionCost = (random_deletedstate - random_insertedstate);
        testData.ReversedInsertionCost = (reversed_insertedstate - reversed_initialstate);
        testData.ReversedDeletionCost = (reversed_deletedstate- reversed_insertedstate);
        return testData;
    }
}
function getNanoTime(){
    //used for getting current high resolution time in miliseconds
    let hrTime=process.hrtime();
    return hrTime[0] * 1000000 + hrTime[1] / 1000;
}

const analysis = new Analysis();
module.exports = analysis;