function checkfunction(){
            
    var admaxadsjs = document.getElementById('admax-ads');



    if(admaxadsjs.Checked == true) {
        document.getElementById('honbun').style.display = "block";
        document.getElementById('woods').style.display = "block";
        document.getElementById('customs').style.display = "block";
        document.getElementById('factory').style.display = "block";
        document.getElementById('shoreline').style.display = "block";
        document.getElementById('reserve').style.display = "block";
        document.getElementById('lighthouse').style.display = "block";
        document.getElementById('interchange').style.display = "block";
        document.getElementById('sot').style.display = "block";

        document.getElementById('admax-ads').style.display = "none";

    } else {
        document.getElementById('honbun').style.display = "none";
        document.getElementById('woods').style.display = "none";
        document.getElementById('customs').style.display = "none";
        document.getElementById('factory').style.display = "none";
        document.getElementById('shoreline').style.display = "none";
        document.getElementById('reserve').style.display = "none";
        document.getElementById('lighthouse').style.display = "none";
        document.getElementById('interchange').style.display = "none";
        document.getElementById('sot').style.display = "none";

        document.getElementById('admax-ads').style.display = "block";
    }


}