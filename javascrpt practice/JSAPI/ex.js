let count1 = 0;

function timecount(){
    count1++;
    postMessage(count1);
    setTimeout("timecount()",1000);

}
timecount();