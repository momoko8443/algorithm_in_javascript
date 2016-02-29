function AlgorithmUtil(){

}

AlgorithmUtil.generateRandomArray = function(size,max){
    var num;
    var arr= [];
    for(var i=0;i<size;i++){
        num = Math.floor(Math.random()*(max+1));
        arr.push(num);
    }
    return arr;
};
AlgorithmUtil.swap = function(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

AlgorithmUtil.print = function(arr, i, round){
    //'本轮第'+(j+1)+'次比较:'+chaos.slice(0,j).join(',')+'%c'+chaos[j],'color:red',chaos.slice(j+1,-1).join(','));
    var title = '<h4>'+'本轮第'+(i+1)+'次比较:'+'</h4>';
    var previous = arr.slice(0,i+1).join(' ');
    var keyItem = '<span style="color:red"> '+arr[i+1].toString()+' </span>';
    var next = arr.slice(i+2,arr.length-round).join(' ');
    var completed = '<span style="color:green"> '+arr.slice(arr.length-round).join(' ')+' </span>';
    return title + previous + keyItem + next + completed +'<br/>';
};
