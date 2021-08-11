var weather = [
    { dist_name: "tsr", temp: 25 },
    { dist_name: "tvm", temp: 26 },
    { dist_name: "ekm", temp: 29 },
    { dist_name: "pkd", temp: 30 },
    { dist_name: "idk", temp: 15 },
    { dist_name: "mpm", temp: 29 },
    { dist_name: "tsr", temp: 27 },
    { dist_name: "tvm", temp: 23 },
    { dist_name: "ekm", temp: 31 },
    { dist_name: "pkd", temp: 27 },
    { dist_name: "idk", temp: 17 },
    { dist_name: "mpm", temp: 25 },
  ];

  var max_weather={}
 

  for(let data of weather){
    var cur_temp;
    var dist= data.dist_name;
    var cur_temp=data.temp;
      if(!(dist in max_weather)){
        max_weather[dist]=cur_temp;
    }
    else{
        let old_temp =max_weather[dist];
        if(old_temp<cur_temp){
            max_weather[dist]=cur_temp;
        }

    }
      
  }
  console.log(max_weather);


