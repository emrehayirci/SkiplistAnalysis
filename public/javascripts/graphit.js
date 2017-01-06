//Relation Between Memory Usage And Level
var graph0_data= [];
for(var i = 0; i< data.length; i ++){
    var a = {}; 
    a.x = data[i].OrderedLevel;
    a.y = data[i].OrderedItems;
    graph0_data.push(a);
};
for(var i = 0; i< data.length; i ++){
    var a = {}; 
    a.x = data[i].RandomLevel;
    a.y = data[i].RandomItems;
    graph0_data.push(a);
};
for(var i = 0; i< data.length; i ++){
    var a = {}; 
    a.x = data[i].ReversedLevel;
    a.y = data[i].ReversedItems;
    graph0_data.push(a);
};
var graph0_layout = {title :"Relation Between Memory Usage And Level", xaxis : {title:"Number of Level"},yaxis : {title:"Number of Items"}};
GrapLineChartCreatorMethod(graph0_data,"graph0",graph0_layout);

//Ordered Insertion Cost
var graph1_data= [];
for(var i = 0; i< data.length; i ++){
    var a = {};
    a.x = data[i].OrderedItems;
    a.y = data[i].OrderedInsertionCost;
    graph1_data[i] = a;
};
var graph1_layout = {title :"Ordered Insertion Cost", xaxis : {title:"Number of Inserted Items"},yaxis : {title:"Cost (miliseconds)"}};
var graph2_data= [];
for(var i = 0; i< data.length; i ++){
    var a = {}; 
    a.x = data[i].OrderedLevel;
    a.y = data[i].OrderedInsertionCost;
    graph2_data[i] = a;
};
var graph2_layout = {title :"Ordered Insertion Cost", xaxis : {title:"Number of Level"},yaxis : {title:"Cost (miliseconds)"}};
GrapLineChartCreatorMethod(graph1_data,"graph1",graph1_layout);
GrapLineChartCreatorMethod(graph2_data,"graph2",graph2_layout);
//Random Insertion Cost
var graph3_data= [];
for(var i = 0; i< data.length; i ++){
    var a = {};
    a.x = data[i].RandomItems;
    a.y = data[i].RandomInsertionCost;
    graph3_data[i] = a;
};
var graph3_layout = {title :"Random Insertion Cost", xaxis : {title:"Number of Inserted Items"},yaxis : {title:"Cost (miliseconds)"}};
var graph4_data= [];
for(var i = 0; i< data.length; i ++){
    var a = {};
    a.x = data[i].RandomLevel;
    a.y = data[i].RandomInsertionCost;
    graph4_data[i] = a;
};
var graph4_layout = {title :"Random Insertion Cost", xaxis : {title:"Number of Level"},yaxis : {title:"Cost (miliseconds)"}};
GrapLineChartCreatorMethod(graph3_data,"graph3",graph3_layout);
GrapLineChartCreatorMethod(graph4_data,"graph4",graph4_layout);
//Reversed Insertion Cost
var graph5_data= [];
for(var i = 0; i< data.length; i ++){
    var a = {};
    a.x = data[i].ReversedItems;
    a.y = data[i].ReversedInsertionCost;
    graph5_data[i] = a;
};
var graph5_layout = {title :"Reversed Insertion Cost", xaxis : {title:"Number of Inserted Items"},yaxis : {title:"Cost (miliseconds)"}};
var graph6_data= [];
for(var i = 0; i< data.length; i ++){
    var a = {};
    a.x = data[i].ReversedLevel;
    a.y = data[i].ReversedInsertionCost;
    graph6_data[i] = a;
};
var graph6_layout = {title :"Reversed Insertion Cost", xaxis : {title:"Number of Level"},yaxis : {title:"Cost (miliseconds)"}};
GrapLineChartCreatorMethod(graph5_data,"graph5",graph5_layout);
GrapLineChartCreatorMethod(graph6_data,"graph6",graph6_layout);
//Existant Search Cost
var graph7_data= [];
for(var i = 0; i< data.length; i ++){
    var a = {};
    a.x = data[i].OrderedItems;
    a.y = data[i].ExistantSearchCost;
    graph7_data[i] = a;
};
var graph7_layout = {title :"Existant Item Search Cost", xaxis : {title:"Number of Items"},yaxis : {title:"Cost (miliseconds)"}};
var graph8_data= [];
for(var i = 0; i< data.length; i ++){
    var a = {}; 
    a.x = data[i].OrderedLevel;
    a.y = data[i].ExistantSearchCost;
    graph8_data[i] = a;
};
var graph8_layout = {title :"Existant Item Search Cost", xaxis : {title:"Number of Level"},yaxis : {title:"Cost (miliseconds)"}};
GrapLineChartCreatorMethod(graph7_data,"graph7",graph7_layout);
GrapLineChartCreatorMethod(graph8_data,"graph8",graph8_layout);
//NonExistant Seacrh Cost
var graph9_data= [];
for(var i = 0; i< data.length; i ++){
    var a = {};
    a.x = data[i].OrderedItems;
    a.y = data[i].NonExistantSearchCost;
    graph9_data[i] = a;
};
var graph9_layout = {title :"Non-Existant Item Search Cost", xaxis : {title:"Number of Items"},yaxis : {title:"Cost (miliseconds)"}};
var graph10_data= [];
for(var i = 0; i< data.length; i ++){
    var a = {}; 
    a.x = data[i].OrderedLevel;
    a.y = data[i].NonExistantSearchCost;
    graph10_data[i] = a;
};
var graph10_layout = {title :"Non-Existant Item Search Cost", xaxis : {title:"Number of Level"},yaxis : {title:"Cost (miliseconds)"}};
GrapLineChartCreatorMethod(graph9_data,"graph9",graph9_layout);
GrapLineChartCreatorMethod(graph10_data,"graph10",graph10_layout);
//Ordered Deletion Cost
var graph11_data= [];
for(var i = 0; i< data.length; i ++){
    var a = {};
    a.x = data[i].OrderedItems;
    a.y = data[i].OrderedDeletionCost;
    graph11_data[i] = a;
};
var graph11_layout = {title :"Ordered Deletion Cost", xaxis : {title:"Number of Items"},yaxis : {title:"Cost (miliseconds)"}};
var graph12_data= [];
for(var i = 0; i< data.length; i ++){
    var a = {}; 
    a.x = data[i].OrderedLevel;
    a.y = data[i].OrderedDeletionCost;
    graph12_data[i] = a;
};
var graph12_layout = {title :"Ordered Deletion Cost", xaxis : {title:"Number of Level"},yaxis : {title:"Cost (miliseconds)"}};
GrapLineChartCreatorMethod(graph11_data,"graph11",graph11_layout);
GrapLineChartCreatorMethod(graph12_data,"graph12",graph12_layout);
//Random Deletion Cost
var graph13_data= [];
for(var i = 0; i< data.length; i ++){
    var a = {};
    a.x = data[i].RandomItems;
    a.y = data[i].RandomDeletionCost;
    graph13_data[i] = a;
};
var graph13_layout = {title :"Random Deletion Cost", xaxis : {title:"Number of Items"},yaxis : {title:"Cost (miliseconds)"}};
var graph14_data= [];
for(var i = 0; i< data.length; i ++){
    var a = {}; 
    a.x = data[i].RandomLevel;
    a.y = data[i].RandomDeletionCost;
    graph14_data[i] = a;
};
var graph14_layout = {title :"Random Deletion Cost", xaxis : {title:"Number of Level"},yaxis : {title:"Cost (miliseconds)"}};
GrapLineChartCreatorMethod(graph13_data,"graph13",graph13_layout);
GrapLineChartCreatorMethod(graph14_data,"graph14",graph14_layout);
//Reversed Deletion Cost
var graph15_data= [];
for(var i = 0; i< data.length; i ++){
    var a = {};
    a.x = data[i].ReversedItems;
    a.y = data[i].ReversedDeletionCost;
    graph15_data[i] = a;
};
var graph15_layout = {title :"Reverse Ordered Deletion Cost", xaxis : {title:"Number of Items"},yaxis : {title:"Cost (miliseconds)"}};
var graph16_data= [];
for(var i = 0; i< data.length; i ++){
    var a = {}; 
    a.x = data[i].ReversedLevel;
    a.y = data[i].ReversedDeletionCost;
    graph16_data[i] = a;
};
var graph16_layout = {title :"Reverse Ordered Deletion Cost", xaxis : {title:"Number of Level"},yaxis : {title:"Cost (miliseconds)"}};
GrapLineChartCreatorMethod(graph15_data,"graph15",graph15_layout);
GrapLineChartCreatorMethod(graph16_data,"graph16",graph16_layout);


function GrapLineChartCreatorMethod(targetGraphArray, targetdiv, layout){
    targetGraphArray.sort(genericSortMethod);
    trace = {x : [], y: [], type:'scatter'};
    for(var i = 0; i < targetGraphArray.length; i++)
    {
        trace.x[i] = targetGraphArray[i].x;
        trace.y[i] = targetGraphArray[i].y;
    }
    Plotly.plot(targetdiv,[trace],layout);
}
function genericSortMethod(a, b){
    return a.x - b.x;
}
