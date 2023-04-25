function checkfunction(){
            
    var task11 = document.getElementById('task1-1');
    var task12 = document.getElementById('task1-2');
    var task13 = document.getElementById('task1-3');
    var task15 = document.getElementById('task1-5');
    
    var task21 = document.getElementById('task2-1');
    var task25 = document.getElementById('task2-5');


    if(task11.checked == true) {
        document.getElementById('t1-1').style.display = "block";
    
    } else {
        document.getElementById('t1-1').style.display = "none";
    }

    if(task12.checked == true) {
        document.getElementById('t1-2').style.display = "block";
    
    } else {
        document.getElementById('t1-2').style.display = "none";
    }

    if(task13.checked == true) {
        document.getElementById('t1-3').style.display = "block";
    
    } else {
        document.getElementById('t1-3').style.display = "none";
    }

    if(task15.checked == true) {
        document.getElementById('t1-5').style.display = "block";
    
    } else {
        document.getElementById('t1-5').style.display = "none";
    }











    if(task21.checked == true) {
        document.getElementById('t2-1').style.display = "block";
    
    } else {
        document.getElementById('t2-1').style.display = "none";
    }

    if(task25.checked == true) {
        document.getElementById('t2-5').style.display = "block";
    
    } else {
        document.getElementById('t2-5').style.display = "none";
    }



}