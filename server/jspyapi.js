_isRequestDone = false;
_requestStatus = "no req. status yet";
function saveRequest(prjName, data){
    document.getElementById("loadingDiv").style.visibility = "visible";
    $httper = new XMLHttpRequest;
    this.result2 = {status2: false, result2: "none"};
    if ($httper.readyState == 4 || $httper.readyState == 0){
        $httper.open("GET", "http://waseemssaeed.pythonanywhere.com/save/"+prjName+"/"+data, true);
        $httper.onreadystatechange = ()=>{
            if ($httper.readyState == 4)
            {
                if ($httper.status == 200)
                {
                    console.log('here2');
                    this.result2 = {status2: true, result2: $httper.responseText};
                } else {
                    console.log('there');
                    //alert("connection error!");
                    this.result2 = {status2: true, result2: 'error'};
                }
            } else {
                //alert("connection error!");
            }
        };
        $httper.send(null);
    }
    i = 0;
    thisInterval = setInterval(()=>{
        if(this.result2.status2){
            document.getElementById("loadingDiv").style.visibility = "hidden";
            clearInterval(thisInterval);
            _isRequestDone = true;
            _requestStatus = this.result2.result2;
            //alert(_requestStatus);
            alert("done, thank you!, I will be in touch with you as soon as possible!")
        }
        i += 500;
        if(i == 6000){
            document.getElementById("loadingDiv").style.visibility = "hidden";
            clearInterval(thisInterval);
            _isRequestDone = true;
            _requestStatus = this.result2.result2;
            alert(_requestStatus);
        }
    }, 500);
}