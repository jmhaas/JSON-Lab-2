var httpRequest = XMLHttpRequest();
var output;
var data_json;

request.open("https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD");

request.onreadystatechange = funtion(); {
    if (this.readyState == 4 && this.status == 200) {
        data_json = JSON.parse(request.response);
        let count = 1;
        for (var i in data_json){
            for (let movieNum = 0; movieNum < JSON(i).length; movieNum++){
                if(data_json.data[movieNum][10] === "Golden Gate Bridge"){
                    document.getElementById("result").innerHTML += "<br>" + count + ". <br>" + data_json.data[movieNum][8] + 
                    "<br>" + "Release Year: </b>" + data_json.data[movieNum][9] + "<br>" + "<b>Production Company: </b>" + 
                    data_json.data[movieNum][12] + "<br><br>";
                    count++; 

                }
            }  
        }
    }
}
request.send();