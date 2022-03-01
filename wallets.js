var tags = document.getElementsByClassName("tag");

const lbry = {
	clicker:document.getElementById("walletTag_lbry"),
	id:document.getElementById("bTDNBPrpz65nvcdhaRbfuTa22itNfmaJqW")};

const dash = {
        clicker:document.getElementById("walletTag_dash"),
        id:document.getElementById("Xh1ap93yhCUNL2qv8HZuuVDpDY4ZjuFJLi")};

const ether = {
    clicker:document.getElementById("walletTag_ether"),
    id:document.getElementById("0xE1D04e9d713FD24d4859a6f912516fee1320089B")};
    
const bitcoin = {
    clicker:document.getElementById("walletTag_bitcoin"),
    id:document.getElementById("1QBWeBirgcw4uHz9wmwMiFJYkypZtJb7bN")};
                
const doge = {
    clicker:document.getElementById("walletTag_doge"),
    id:document.getElementById("D7QRvuGKTcXM8L4upfhRnjHcpsxHjibNZe")};

var clickerdash = document.getElementById("walletTag_dash");

var slide = document.getElementById("thankYouSlide");

// LBRY
    lbry.clicker.onclick = function() {
        navigator.clipboard.writeText(lbry.id.id)
            .then(() => {
                lbry.clicker.innerHTML="LBRY<br>address<br>coppied!";
                slide.innerHTML = "<div class='slideBrace'><div class='slidePack'><span class='slideLabel'>LBRY</span><img src='"+lbry.id.src+"'></div></div>";
                lbry.clicker.style.backgroundColor="rgba(255,255,255,0.8";
                lbry.clicker.style.color="black";
                lbry.clicker.style.textShadow="none"
                for(var i = 0; i < tags.length; i++){
                    tags[i].style.backgroundColor="rgba(0,0,0,0.8";
                    tags[i].style.color="rgb(199, 197, 211)";
                    tags[i].style.textShadow="-1.5px 3px 1px black";
                }
                setInterval(myTimer, 10000);
                    function myTimer() {
                        lbry.clicker.innerHTML="LBRY";
                    }
            })
            .catch(err => {
                alert('Error in copying text: ', err);
            });
        }

// Dash
dash.clicker.onclick = function() {
    navigator.clipboard.writeText(dash.id.id)
        .then(() => {
            dash.clicker.innerHTML="Dash<br>address<br>coppied!";
            slide.innerHTML = "<div class='slideBrace'><div class='slidePack'><span class='slideLabel'>Dash</span><img src='"+dash.id.src+"'></div></div>";
            dash.clicker.style.backgroundColor="rgba(255,255,255,0.8";
            dash.clicker.style.color="black";
            dash.clicker.style.textShadow="none"
            for(var i = 0; i < tags.length; i++){
                tags[i].style.backgroundColor="rgba(0,0,0,0.8";
                tags[i].style.color="rgb(199, 197, 211)";
                tags[i].style.textShadow="-1.5px 3px 1px black";
            }
            setInterval(myTimer, 10000);
                function myTimer() {
                    dash.clicker.innerHTML="Dash";
                }
        })
        .catch(err => {
            alert('Error in copying text: ', err);
        });
    }

    // Ether
    ether.clicker.onclick = function() {
        navigator.clipboard.writeText(ether.id.id)
            .then(() => {
                ether.clicker.innerHTML="Ether<br>address<br>coppied!";
                slide.innerHTML = "<div class='slideBrace'><div class='slidePack'><span class='slideLabel'>Ether</span><img src='"+ether.id.src+"'></div></div>";
                ether.clicker.style.backgroundColor="rgba(255,255,255,0.8";
                ether.clicker.style.color="black";
                ether.clicker.style.textShadow="none"
                for(var i = 0; i < tags.length; i++){
                    tags[i].style.backgroundColor="rgba(0,0,0,0.8";
                    tags[i].style.color="rgb(199, 197, 211)";
                    tags[i].style.textShadow="-1.5px 3px 1px black";
                }
                setInterval(myTimer, 10000);
                    function myTimer() {
                        ether.clicker.innerHTML="Ether/<br>Salt/<br>Pre";
                    }
            })
            .catch(err => {
                alert('Error in copying text: ', err);
            });
        }
// Bitcoin
bitcoin.clicker.onclick = function() {
    navigator.clipboard.writeText(bitcoin.id.id)
        .then(() => {
            bitcoin.clicker.innerHTML="Bitcoin<br>address<br>coppied!";
            slide.innerHTML = "<div class='slideBrace'><div class='slidePack'><span class='slideLabel'>BTC</span><img src='"+bitcoin.id.src+"'></div></div>";
            bitcoin.clicker.style.backgroundColor="rgba(255,255,255,0.8";
            bitcoin.clicker.style.color="black";
            bitcoin.clicker.style.textShadow="none"
            for(var i = 0; i < tags.length; i++){
                tags[i].style.backgroundColor="rgba(0,0,0,0.8";
                tags[i].style.color="rgb(199, 197, 211)";
                tags[i].style.textShadow="-1.5px 3px 1px black";
            }
            setInterval(myTimer, 10000);
                function myTimer() {
                    bitcoin.clicker.innerHTML="Bitcoin";
                }
        })
        .catch(err => {
            alert('Error in copying text: ', err);
        });
    }
// Doge
doge.clicker.onclick = function() {
    navigator.clipboard.writeText(doge.id.id)
        .then(() => {
            doge.clicker.innerHTML="Doge<br>address<br>coppied!";
            slide.innerHTML = "<div class='slideBrace'><div class='slidePack'><span class='slideLabel'>Doge</span><img src='"+doge.id.src+"'></div></div>";
            doge.clicker.style.backgroundColor="rgba(255,255,255,0.8";
            doge.clicker.style.color="black";
            doge.clicker.style.textShadow="none"
            for(var i = 0; i < tags.length; i++){
                tags[i].style.backgroundColor="rgba(0,0,0,0.8";
                tags[i].style.color="rgb(199, 197, 211)";
                tags[i].style.textShadow="-1.5px 3px 1px black";
            }
            setInterval(myTimer, 10000);
                function myTimer() {
                    doge.clicker.innerHTML="Doge";
                }
        })
        .catch(err => {
            alert('Error in copying text: ', err);
        });
    }