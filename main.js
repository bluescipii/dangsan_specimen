// very very very bad code, don't follow this. sorry. ^_^...
// it could be better to make 'nav' as class...as I did in physical-workshop pj.
// i'm afraid someone gonna see this code and laugh lol

$(window).on('beforeunload', function() {
    $(window).scrollTop(0); 

});

window.onload = function(){
    // 여기 나중에 수정해야함(refresh 후 얼마나 확대인가)
    $("#example").css('zoom', '38.798182279070815');
    var lastscroll = 0;

    function valuemapping(x){
        
        var maxScrollTop = $(document).height() - $(window).height();
        // 아래 값은 언제나 0~1사이의 값 밖에 나올 수 밖에 없음. 비율임.
        var y = x / maxScrollTop 
        
        var zoomvalue = Math.pow((1 - y) * (Math.log2(150) - Math.log2(2)), 2);
        if(zoomvalue < 1.3 ) {
          
          window.scrollTo(0, lastscroll);
          zoomvalue = 1.3; 
        }  else {
          lastscroll = x;
          console.log("last scroll = "+lastscroll)
        }
        console.log(maxScrollTop, x)
        console.log( y, zoomvalue)
        console.log("--------------")

        return zoomvalue;
    }

    

    let scroll_pos = 0;
    let ticking = false;

    function doSomething(scroll_pos) {
    
        $("#example").stop().animate({ 
            zoom : valuemapping(scroll_pos)
            });
    }

    function throttle (callback, limit) {

        var wait = false;
        return function () {
          if (!wait) {
            last_known_scroll_position = window.scrollY;
            doSomething(last_known_scroll_position);
            
            callback.apply(null, arguments);
            wait = true;
            setTimeout(function () {
              wait = false;
            }, limit);
          }
        }
      }

    function makesix (x){
      
      while(!(x % 6 == 0)){
        x = x-1
      }
      
      return x
    }

    
    $("#info").hover(function(){
      document.getElementById('info').style.color = "black";
      document.getElementById('info').style.backgroundColor = "white";
    });

    $("#info").mouseleave(function(){
      document.getElementById('info').style.color = "white";
      document.getElementById('info').style.backgroundColor = "black";
    });

    $("#info").click(function(){
      if ( $("#infodiv").css("display") == "none" ) $("#infodiv").show(); 

      else $("#infodiv").hide(); 

    });

    $("#close").hover(function(){
      document.getElementById('close').style.color = "black";
      document.getElementById('close').style.backgroundColor = "white";
    });

    $("#close").mouseleave(function(){
      document.getElementById('close').style.color = "white";
      document.getElementById('close').style.backgroundColor = "black";
    });

    $("#close").click(function(){
  
      document.getElementById('alphabetvalue').innerHTML = "A";
      document.getElementById('showroom').innerHTML = "A";
      document.getElementById('alphabetvalue').style.color = "black";
      document.getElementById('alphabetvalue').style.bottom = ( $("#leftsquare").height()/2 ) - $("#alphabetvalue").height()/2-$("#leftsquare").height()/3 +"px";
      document.getElementById('alphabetvalue').style.left = ( $("#leftsquare").width()/2 ) - $("#alphabetvalue").width() / 2+"px";
      $("#infodiv").hide();
      $("#rightsquare").hide();
      $("#leftsquare").hide();
     
    });   



    $("#apple").hover(function(){
      document.getElementById('apple').style.fontWeight = "100";
      document.getElementById('apple').style.color = "#1F48ED";
    });

    $("#apple").mouseleave(function(){
      
      document.getElementById('apple').style.fontWeight = "200";
      document.getElementById('apple').style.color = "black";

     
    });

    $("#apple").click(function(){
      document.getElementById('alphabetvalue').innerHTML = "A"
      document.getElementById('showroom').innerHTML = "A"
      document.getElementById('alphabetvalue').style.color = "black"
      document.getElementById('alphabetvalue').style.bottom = ( $("#leftsquare").height()/2 ) - $("#alphabetvalue").height()/2-$("#leftsquare").height()/3 +"px";
      document.getElementById('alphabetvalue').style.left = ( $("#leftsquare").width()/2 ) - $("#alphabetvalue").width() / 2+"px";
      $("#infodiv").hide();
    });


    $("#beta").hover(function(){
      document.getElementById('beta').style.fontWeight = "100";
      document.getElementById('beta').style.color = "#1F48ED";
    });

    $("#beta").mouseleave(function(){
      
      document.getElementById('beta').style.fontWeight = "200";
      document.getElementById('beta').style.color = "black";
     
    });

    $("#beta").click(function(){
      $("#infodiv").hide();
      document.getElementById('alphabetvalue').innerHTML = "B"
      document.getElementById('showroom').innerHTML = "B"
      document.getElementById('alphabetvalue').style.color = "white"
      document.getElementById('alphabetvalue').style.bottom = ( $("#leftsquare").height()/2 ) - $("#alphabetvalue").height()/2-$("#leftsquare").height()/3 +"px";
      document.getElementById('alphabetvalue').style.left = ( $("#leftsquare").width()/2 ) - $("#alphabetvalue").width() / 2+"px";
    });

    $("#Charlie").hover(function(){
      document.getElementById('Charlie').style.fontWeight = "100";
      document.getElementById('Charlie').style.color = "#1F48ED";
      
    });

    $("#Charlie").mouseleave(function(){
      
      document.getElementById('Charlie').style.fontWeight = "200";
      document.getElementById('Charlie').style.color = "black";
     
    });

    $("#Charlie").click(function(){
      $("#infodiv").hide();
      document.getElementById('alphabetvalue').innerHTML = "C"
      document.getElementById('showroom').innerHTML = "C"
      document.getElementById('alphabetvalue').style.color = "white"
      document.getElementById('alphabetvalue').style.bottom = ( $("#leftsquare").height()/2 ) - $("#alphabetvalue").height()/2-$("#leftsquare").height()/3 +"px";
      document.getElementById('alphabetvalue').style.left = ( $("#leftsquare").width()/2 ) - $("#alphabetvalue").width() / 2+"px";
    });   

    $("#Delta").hover(function(){
      document.getElementById('Delta').style.fontWeight = "100";
      document.getElementById('Delta').style.color = "#1F48ED";
    });

    $("#Delta").mouseleave(function(){
      
      document.getElementById('Delta').style.fontWeight = "200";
      document.getElementById('Delta').style.color = "black";
     
    });

    $("#Delta").click(function(){
      $("#infodiv").hide();
      document.getElementById('alphabetvalue').innerHTML = "D"
      document.getElementById('showroom').innerHTML = "D"
      document.getElementById('alphabetvalue').style.color = "white"
      document.getElementById('alphabetvalue').style.bottom = ( $("#leftsquare").height()/2 ) - $("#alphabetvalue").height()/2-$("#leftsquare").height()/3 +"px";
      document.getElementById('alphabetvalue').style.left = ( $("#leftsquare").width()/2 ) - $("#alphabetvalue").width() / 2+"px";
    });   

    $("#Echo").hover(function(){
      document.getElementById('Echo').style.fontWeight = "100";
      document.getElementById('Echo').style.color = "#1F48ED";
    });

    $("#Echo").mouseleave(function(){
      
      document.getElementById('Echo').style.fontWeight = "200";
      document.getElementById('Echo').style.color = "black";
     
    });

    $("#Echo").click(function(){
      $("#infodiv").hide();
      document.getElementById('alphabetvalue').innerHTML = "E"
      document.getElementById('showroom').innerHTML = "E"
      document.getElementById('alphabetvalue').style.color = "white"
      document.getElementById('alphabetvalue').style.bottom = ( $("#leftsquare").height()/2 ) - $("#alphabetvalue").height()/2-$("#leftsquare").height()/3 +"px";
      document.getElementById('alphabetvalue').style.left = ( $("#leftsquare").width()/2 ) - $("#alphabetvalue").width() / 2+"px";
    });   

    $("#Fox").hover(function(){
      document.getElementById('Fox').style.fontWeight = "100";
      document.getElementById('Fox').style.color = "#1F48ED";
    });

    $("#Fox").mouseleave(function(){
      
      document.getElementById('Fox').style.fontWeight = "200";
      document.getElementById('Fox').style.color = "black";
     
    });

    $("#Fox").click(function(){
      $("#infodiv").hide();
      document.getElementById('alphabetvalue').innerHTML = "F"
      document.getElementById('showroom').innerHTML = "F"
      document.getElementById('alphabetvalue').style.color = "black"
      document.getElementById('alphabetvalue').style.bottom = ( $("#leftsquare").height()/2 ) - $("#alphabetvalue").height()/2-$("#leftsquare").height()/3 +"px";
      document.getElementById('alphabetvalue').style.left = ( $("#leftsquare").width()/2 ) - $("#alphabetvalue").width() / 2+"px";
    });   

    $("#Golf").hover(function(){
      document.getElementById('Golf').style.fontWeight = "100";
      document.getElementById('Golf').style.color = "#1F48ED";
    });

    $("#Golf").mouseleave(function(){
      
      document.getElementById('Golf').style.fontWeight = "200";
      document.getElementById('Golf').style.color = "black";
     
    });

    $("#Golf").click(function(){
      $("#infodiv").hide();
      document.getElementById('alphabetvalue').innerHTML = "G"
      document.getElementById('showroom').innerHTML = "G"
      document.getElementById('alphabetvalue').style.color = "white"
      document.getElementById('alphabetvalue').style.bottom = ( $("#leftsquare").height()/2 ) - $("#alphabetvalue").height()/2-$("#leftsquare").height()/3 +"px";
      document.getElementById('alphabetvalue').style.left = ( $("#leftsquare").width()/2 ) - $("#alphabetvalue").width() / 2+"px";
    });   

    $("#Hotel").hover(function(){
      document.getElementById('Hotel').style.fontWeight = "100";
      document.getElementById('Hotel').style.color = "#1F48ED";
    });

    $("#Hotel").mouseleave(function(){
      
      document.getElementById('Hotel').style.fontWeight = "200";
      document.getElementById('Hotel').style.color = "black";
     
    });

    $("#Hotel").click(function(){
      $("#infodiv").hide();
      document.getElementById('alphabetvalue').innerHTML = "H"
      document.getElementById('showroom').innerHTML = "H"
      document.getElementById('alphabetvalue').style.color = "black"
      document.getElementById('alphabetvalue').style.bottom = ( $("#leftsquare").height()/2 ) - $("#alphabetvalue").height()/2-$("#leftsquare").height()/3 +"px";
      document.getElementById('alphabetvalue').style.left = ( $("#leftsquare").width()/2 ) - $("#alphabetvalue").width() / 2+"px";
    });   

    $("#India").hover(function(){
      document.getElementById('India').style.fontWeight = "100";
      document.getElementById('India').style.color = "#1F48ED";
    });

    $("#India").mouseleave(function(){
      
      document.getElementById('India').style.fontWeight = "200";
      document.getElementById('India').style.color = "black";
     
    });

    $("#India").click(function(){
      $("#infodiv").hide();
      document.getElementById('alphabetvalue').innerHTML = "I"
      document.getElementById('showroom').innerHTML = "I"
      document.getElementById('alphabetvalue').style.color = "white"
      document.getElementById('alphabetvalue').style.bottom = ( $("#leftsquare").height()/2 ) - $("#alphabetvalue").height()/2-$("#leftsquare").height()/3 +"px";
      document.getElementById('alphabetvalue').style.left = ( $("#leftsquare").width()/2 ) - $("#alphabetvalue").width() / 2+"px";
     
    });   


    $("#Juliett").hover(function(){
      document.getElementById('Juliett').style.fontWeight = "100";
      document.getElementById('Juliett').style.color = "#1F48ED";
    });

    $("#Juliett").mouseleave(function(){
      
      document.getElementById('Juliett').style.fontWeight = "200";
      document.getElementById('Juliett').style.color = "black";
     
    });

    $("#Juliett").click(function(){
      $("#infodiv").hide();
      document.getElementById('alphabetvalue').innerHTML = "J"
      document.getElementById('showroom').innerHTML = "J"
      document.getElementById('alphabetvalue').style.color = "white"
      document.getElementById('alphabetvalue').style.bottom = ( $("#leftsquare").height()/2 ) - $("#alphabetvalue").height()/2-$("#leftsquare").height()/3 +"px";
      document.getElementById('alphabetvalue').style.left = ( $("#leftsquare").width()/2 ) - $("#alphabetvalue").width() / 2+"px";
     
    });   

    $("#Kilo").hover(function(){
      document.getElementById('Kilo').style.fontWeight = "100";
      document.getElementById('Kilo').style.color = "#1F48ED";
    });

    $("#Kilo").mouseleave(function(){
      
      document.getElementById('Kilo').style.fontWeight = "200";
      document.getElementById('Kilo').style.color = "black";
      
     
    });

    $("#Kilo").click(function(){
      $("#infodiv").hide();
      document.getElementById('alphabetvalue').innerHTML = "K"
      document.getElementById('showroom').innerHTML = "K"
      document.getElementById('alphabetvalue').style.color = "black"
      document.getElementById('alphabetvalue').style.bottom = ( $("#leftsquare").height()/2 ) - $("#alphabetvalue").height()/2-$("#leftsquare").height()/3 +"px";
      document.getElementById('alphabetvalue').style.left = ( $("#leftsquare").width()/2 ) - $("#alphabetvalue").width() / 2+"px";
     
    });   

    $("#Lima").hover(function(){
      document.getElementById('Lima').style.fontWeight = "100";
      document.getElementById('Lima').style.color = "#1F48ED";
    });

    $("#Lima").mouseleave(function(){
      
      document.getElementById('Lima').style.fontWeight = "200";
      document.getElementById('Lima').style.color = "black";
     
    });

    $("#Lima").click(function(){
      $("#infodiv").hide();
      document.getElementById('alphabetvalue').innerHTML = "L"
      document.getElementById('showroom').innerHTML = "L"
      document.getElementById('alphabetvalue').style.color = "white"
      document.getElementById('alphabetvalue').style.bottom = ( $("#leftsquare").height()/2 ) - $("#alphabetvalue").height()/2-$("#leftsquare").height()/3 +"px";
      document.getElementById('alphabetvalue').style.left = ( $("#leftsquare").width()/2 ) - $("#alphabetvalue").width() / 2+"px";
     
    });   

    $("#Mike").hover(function(){
      document.getElementById('Mike').style.fontWeight = "100";
      document.getElementById('Mike').style.color = "#1F48ED";
    });

    $("#Mike").mouseleave(function(){
      
      document.getElementById('Mike').style.fontWeight = "200";
      document.getElementById('Mike').style.color = "black";
     
    });

    $("#Mike").click(function(){
      $("#infodiv").hide();
      document.getElementById('alphabetvalue').innerHTML = "M"
      document.getElementById('showroom').innerHTML = "M"
      document.getElementById('alphabetvalue').style.color = "white"
      document.getElementById('alphabetvalue').style.bottom = ( $("#leftsquare").height()/2 ) - $("#alphabetvalue").height()/2-$("#leftsquare").height()/3 +"px";
      document.getElementById('alphabetvalue').style.left = ( $("#leftsquare").width()/2 ) - $("#alphabetvalue").width() / 2+"px";
     
    });   

    $("#November").hover(function(){
      document.getElementById('November').style.fontWeight = "100";
      document.getElementById('November').style.color = "#1F48ED";
    });

    $("#November").mouseleave(function(){
      
      document.getElementById('November').style.fontWeight = "200";
      document.getElementById('November').style.color = "black";
     
    });

    $("#November").click(function(){
      $("#infodiv").hide();
      document.getElementById('alphabetvalue').innerHTML = "N"
      document.getElementById('showroom').innerHTML = "N"
      document.getElementById('alphabetvalue').style.color = "black"
      document.getElementById('alphabetvalue').style.bottom = ( $("#leftsquare").height()/2 ) - $("#alphabetvalue").height()/2-$("#leftsquare").height()/3 +"px";
      document.getElementById('alphabetvalue').style.left = ( $("#leftsquare").width()/2 ) - $("#alphabetvalue").width() / 2+"px";
     
    });   

    $("#Oscar").hover(function(){
      document.getElementById('Oscar').style.fontWeight = "100";
      document.getElementById('Oscar').style.color = "#1F48ED";
    });

    $("#Oscar").mouseleave(function(){
      
      document.getElementById('Oscar').style.fontWeight = "200";
      document.getElementById('Oscar').style.color = "black";
     
    });

    $("#Oscar").click(function(){
      $("#infodiv").hide();
      document.getElementById('alphabetvalue').innerHTML = "O"
      document.getElementById('showroom').innerHTML = "O"
      document.getElementById('alphabetvalue').style.color = "white"
      document.getElementById('alphabetvalue').style.bottom = ( $("#leftsquare").height()/2 ) - $("#alphabetvalue").height()/2-$("#leftsquare").height()/3 +"px";
      document.getElementById('alphabetvalue').style.left = ( $("#leftsquare").width()/2 ) - $("#alphabetvalue").width() / 2+"px";
     
    });   

    $("#Papa").hover(function(){
      document.getElementById('Papa').style.fontWeight = "100";
      document.getElementById('Papa').style.color = "#1F48ED";
    });

    $("#Papa").mouseleave(function(){
      
      document.getElementById('Papa').style.fontWeight = "200";
      document.getElementById('Papa').style.color = "black";
    });

    $("#Papa").click(function(){
      $("#infodiv").hide();
      document.getElementById('alphabetvalue').innerHTML = "P"
      document.getElementById('showroom').innerHTML = "P"
      document.getElementById('alphabetvalue').style.color = "black"
      document.getElementById('alphabetvalue').style.bottom = ( $("#leftsquare").height()/2 ) - $("#alphabetvalue").height()/2-$("#leftsquare").height()/3 +"px";
      document.getElementById('alphabetvalue').style.left = ( $("#leftsquare").width()/2 ) - $("#alphabetvalue").width() / 2+"px";
     
    });   

    $("#Quebec").hover(function(){
      document.getElementById('Quebec').style.fontWeight = "100";
      document.getElementById('Quebec').style.color = "#1F48ED";
    });

    $("#Quebec").mouseleave(function(){
      
      document.getElementById('Quebec').style.fontWeight = "200";
      document.getElementById('Quebec').style.color = "black";
     
    });

    $("#Quebec").click(function(){
      $("#infodiv").hide();
      document.getElementById('alphabetvalue').innerHTML = "Q"
      document.getElementById('showroom').innerHTML = "Q"
      document.getElementById('alphabetvalue').style.color = "white"
      document.getElementById('alphabetvalue').style.bottom = ( $("#leftsquare").height()/2 ) - $("#alphabetvalue").height()/2-$("#leftsquare").height()/3 +"px";
      document.getElementById('alphabetvalue').style.left = ( $("#leftsquare").width()/2 ) - $("#alphabetvalue").width() / 2+"px";
     
    });   

    $("#Romeo").hover(function(){
      document.getElementById('Romeo').style.fontWeight = "100";
      document.getElementById('Romeo').style.color = "#1F48ED";
    });

    $("#Romeo").mouseleave(function(){
      
      document.getElementById('Romeo').style.fontWeight = "200";
      document.getElementById('Romeo').style.color = "black";
     
    });

    $("#Romeo").click(function(){
      $("#infodiv").hide();
      document.getElementById('alphabetvalue').innerHTML = "R"
      document.getElementById('showroom').innerHTML = "R"
      document.getElementById('alphabetvalue').style.color = "black"
      document.getElementById('alphabetvalue').style.bottom = ( $("#leftsquare").height()/2 ) - $("#alphabetvalue").height()/2-$("#leftsquare").height()/3 +"px";
      document.getElementById('alphabetvalue').style.left = ( $("#leftsquare").width()/2 ) - $("#alphabetvalue").width() / 2+"px";
     
    });   

    $("#Sierra").hover(function(){
      document.getElementById('Sierra').style.fontWeight = "100";
      document.getElementById('Sierra').style.color = "#1F48ED";
    });

    $("#Sierra").mouseleave(function(){
      
      document.getElementById('Sierra').style.fontWeight = "200";
      document.getElementById('Sierra').style.color = "black";
     
    });

    $("#Sierra").click(function(){
      $("#infodiv").hide();
      document.getElementById('alphabetvalue').innerHTML = "S"
      document.getElementById('showroom').innerHTML = "S"
      document.getElementById('alphabetvalue').style.color = "white"
      document.getElementById('alphabetvalue').style.bottom = ( $("#leftsquare").height()/2 ) - $("#alphabetvalue").height()/2-$("#leftsquare").height()/3 +"px";
      document.getElementById('alphabetvalue').style.left = ( $("#leftsquare").width()/2 ) - $("#alphabetvalue").width() / 2+"px";
     
    });   


    $("#Tango").hover(function(){
      document.getElementById('Tango').style.fontWeight = "100";
      document.getElementById('Tango').style.color = "#1F48ED";
    });

    $("#Tango").mouseleave(function(){
      
      document.getElementById('Tango').style.fontWeight = "200";
      document.getElementById('Tango').style.color = "black";
     
    });

    $("#Tango").click(function(){
      $("#infodiv").hide();
      document.getElementById('alphabetvalue').innerHTML = "T"
      document.getElementById('showroom').innerHTML = "T"
      document.getElementById('alphabetvalue').style.color = "white"
      document.getElementById('alphabetvalue').style.bottom = ( $("#leftsquare").height()/2 ) - $("#alphabetvalue").height()/2-$("#leftsquare").height()/3 +"px";
      document.getElementById('alphabetvalue').style.left = ( $("#leftsquare").width()/2 ) - $("#alphabetvalue").width() / 2+"px";
     
    });   


    $("#Uniform").hover(function(){
      document.getElementById('Uniform').style.fontWeight = "100";
      document.getElementById('Uniform').style.color = "#1F48ED";
    });

    $("#Uniform").mouseleave(function(){
      
      document.getElementById('Uniform').style.fontWeight = "200";
      document.getElementById('Uniform').style.color = "black";
     
    });

    
    $("#Uniform").click(function(){
      $("#infodiv").hide();
      document.getElementById('alphabetvalue').innerHTML = "U"
      document.getElementById('showroom').innerHTML = "U"
      document.getElementById('alphabetvalue').style.color = "white"
      document.getElementById('alphabetvalue').style.bottom = ( $("#leftsquare").height()/2 ) - $("#alphabetvalue").height()/2-$("#leftsquare").height()/3 +"px";
      document.getElementById('alphabetvalue').style.left = ( $("#leftsquare").width()/2 ) - $("#alphabetvalue").width() / 2+"px";
     
    });   


    $("#Victor").hover(function(){
      document.getElementById('Victor').style.fontWeight = "100";
      document.getElementById('Victor').style.color = "#1F48ED";
    });

    $("#Victor").mouseleave(function(){
      
      document.getElementById('Victor').style.fontWeight = "200";
      document.getElementById('Victor').style.color = "black";
     
    });

    $("#Victor").click(function(){
      $("#infodiv").hide();
      document.getElementById('alphabetvalue').innerHTML = "V"
      document.getElementById('showroom').innerHTML = "V"
      document.getElementById('alphabetvalue').style.color = "white"
      document.getElementById('alphabetvalue').style.bottom = ( $("#leftsquare").height()/2 ) - $("#alphabetvalue").height()/2-$("#leftsquare").height()/3 +"px";
      document.getElementById('alphabetvalue').style.left = ( $("#leftsquare").width()/2 ) - $("#alphabetvalue").width() / 2+"px";
     
    });   


    $("#Whiskey").hover(function(){
      document.getElementById('Whiskey').style.fontWeight = "100";
      document.getElementById('Whiskey').style.color = "#1F48ED";
    });

    $("#Whiskey").mouseleave(function(){
      
      document.getElementById('Whiskey').style.fontWeight = "200";
      document.getElementById('Whiskey').style.color = "black";
      
     
    });

    $("#Whiskey").click(function(){
      $("#infodiv").hide();
      document.getElementById('alphabetvalue').innerHTML = "W"
      document.getElementById('showroom').innerHTML = "W"
      document.getElementById('alphabetvalue').style.color = "white"
      document.getElementById('alphabetvalue').style.bottom = ( $("#leftsquare").height()/2 ) - $("#alphabetvalue").height()/2-$("#leftsquare").height()/3 +"px";
      document.getElementById('alphabetvalue').style.left = ( $("#leftsquare").width()/2 ) - $("#alphabetvalue").width() / 2+"px";
     
    });   


    $("#Xray").hover(function(){
      document.getElementById('Xray').style.fontWeight = "100";
      document.getElementById('Xray').style.color = "#1F48ED";

    });

    $("#Xray").mouseleave(function(){
      
      document.getElementById('Xray').style.fontWeight = "200";
      document.getElementById('Xray').style.color = "black";
     
    });

    $("#Xray").click(function(){
      $("#infodiv").hide();
      document.getElementById('alphabetvalue').innerHTML = "X"
      document.getElementById('showroom').innerHTML = "X"
      document.getElementById('alphabetvalue').style.color = "black"
      document.getElementById('alphabetvalue').style.bottom = ( $("#leftsquare").height()/2 ) - $("#alphabetvalue").height()/2-$("#leftsquare").height()/3 +"px";
      document.getElementById('alphabetvalue').style.left = ( $("#leftsquare").width()/2 ) - $("#alphabetvalue").width() / 2+"px";
     
    });   

    $("#Yankee").hover(function(){
      document.getElementById('Yankee').style.fontWeight = "100";
      document.getElementById('Yankee').style.color = "#1F48ED";
    });

    $("#Yankee").mouseleave(function(){
      
      document.getElementById('Yankee').style.fontWeight = "200";
      document.getElementById('Yankee').style.color = "black";
     
    });

    $("#Yankee").click(function(){
      $("#infodiv").hide();
      document.getElementById('alphabetvalue').innerHTML = "Y"
      document.getElementById('showroom').innerHTML = "Y"
      document.getElementById('alphabetvalue').style.color = "white"
      document.getElementById('alphabetvalue').style.bottom = ( $("#leftsquare").height()/2 ) - $("#alphabetvalue").height()/2-$("#leftsquare").height()/3 +"px";
      document.getElementById('alphabetvalue').style.left = ( $("#leftsquare").width()/2 ) - $("#alphabetvalue").width() / 2+"px";
     
    });   

    $("#Zulu").hover(function(){
      document.getElementById('Zulu').style.fontWeight = "100";
      document.getElementById('Zulu').style.color = "#1F48ED";
    });

    $("#Zulu").mouseleave(function(){
      
      document.getElementById('Zulu').style.fontWeight = "200";
      document.getElementById('Zulu').style.color = "black";
     
    });

    $("#Zulu").click(function(){
      $("#infodiv").hide();
      document.getElementById('alphabetvalue').innerHTML = "Z"
      document.getElementById('showroom').innerHTML = "Z"
      document.getElementById('alphabetvalue').style.color = "white"
      document.getElementById('alphabetvalue').style.bottom = ( $("#leftsquare").height()/2 ) - $("#alphabetvalue").height()/2-$("#leftsquare").height()/3 +"px";
      document.getElementById('alphabetvalue').style.left = ( $("#leftsquare").width()/2 ) - $("#alphabetvalue").width() / 2+"px";
     
    });   


    $("#comma").hover(function(){
      document.getElementById('comma').style.fontWeight = "100";
      document.getElementById('comma').style.color = "#1F48ED";
    });

    $("#comma").mouseleave(function(){
      
      document.getElementById('comma').style.fontWeight = "200";
      document.getElementById('comma').style.color = "black";
     
    });

    $("#comma").click(function(){
      $("#infodiv").hide();
      document.getElementById('alphabetvalue').innerHTML = ","
      document.getElementById('showroom').innerHTML = ","
      document.getElementById('alphabetvalue').style.color = "black"
      document.getElementById('alphabetvalue').style.bottom = ( $("#leftsquare").height()/2 ) - $("#alphabetvalue").height()/2-$("#leftsquare").height()/3 +"px";
      document.getElementById('alphabetvalue').style.left = ( $("#leftsquare").width()/2 ) - $("#alphabetvalue").width() / 2+"px";
     
    });   

    $("#period").hover(function(){
      document.getElementById('period').style.fontWeight = "100";
      document.getElementById('period').style.color = "#1F48ED";
    });

    $("#period").mouseleave(function(){
      
      document.getElementById('period').style.fontWeight = "200";
      document.getElementById('period').style.color = "black";
    });

    $("#period").click(function(){
      $("#infodiv").hide();
      document.getElementById('alphabetvalue').innerHTML = "."
      document.getElementById('showroom').innerHTML = "."
      document.getElementById('alphabetvalue').style.color = "black"
      document.getElementById('alphabetvalue').style.bottom = ( $("#leftsquare").height()/2 ) - $("#alphabetvalue").height()/2-$("#leftsquare").height()/3 +"px";
      document.getElementById('alphabetvalue').style.left = ( $("#leftsquare").width()/2 ) - $("#alphabetvalue").width() / 2+"px";
     
    });   

    $("#Question").hover(function(){
      document.getElementById('Question').style.fontWeight = "100";
      document.getElementById('Question').style.color = "#1F48ED";
    });

    $("#Question").mouseleave(function(){
      
      document.getElementById('Question').style.fontWeight = "200";
      document.getElementById('Question').style.color = "black";
     
    });

    $("#Question").click(function(){
      $("#infodiv").hide();
      document.getElementById('alphabetvalue').innerHTML = "?"
      document.getElementById('showroom').innerHTML = "?"
      document.getElementById('alphabetvalue').style.color = "white"
      document.getElementById('alphabetvalue').style.bottom = ( $("#leftsquare").height()/2 ) - $("#alphabetvalue").height()/2-$("#leftsquare").height()/3 +"px";
      document.getElementById('alphabetvalue').style.left = ( $("#leftsquare").width()/2 ) - $("#alphabetvalue").width() / 2+"px";
     
    });   


    $("#puc").hover(function(){
      document.getElementById('puc').style.fontWeight = "100";
      document.getElementById('puc').style.color = "#1F48ED";
    });

    $("#puc").mouseleave(function(){
      
      document.getElementById('puc').style.fontWeight = "200";
      document.getElementById('puc').style.color = "black";
     
    });

    $("#puc").click(function(){
      $("#infodiv").hide();
      document.getElementById('alphabetvalue').innerHTML = "!"
      document.getElementById('showroom').innerHTML = "!"
      document.getElementById('alphabetvalue').style.color = "black"
      document.getElementById('alphabetvalue').style.bottom = ( $("#leftsquare").height()/2 ) - $("#alphabetvalue").height()/2-$("#leftsquare").height()/3 +"px";
      document.getElementById('alphabetvalue').style.left = ( $("#leftsquare").width()/2 ) - $("#alphabetvalue").width() / 2+"px";
     
    });   







    
    window.addEventListener('scroll', throttle(function(e){}, 130));

    $("#bt").hover(function(){
        document.getElementById('example').style.animationPlayState="paused";

    
      
    });

    $("#bt").mouseleave(function(){
        document.getElementById('example').style.animationPlayState="running";
        
    });

    $("#bt").click(function(){
      
      $("#rightsquare").show();
      $("#leftsquare").show();
    });
    

    document.getElementById('rightsquare').style.height = makesix(parseInt(window.innerHeight*0.7))+'px';
    document.getElementById('rightsquare').style.width = makesix(parseInt(window.innerHeight*0.7))+'px';
    document.getElementById('leftsquare').style.width = document.getElementById('rightsquare').style.width ;
    document.getElementById('leftsquare').style.height = document.getElementById('rightsquare').style.height ;

    var navarray = document.getElementsByClassName("nav")
    for( var i = 0; i < navarray.length; i++ ){
      
      navarray[i].style.height = $("#rightsquare").height()/6+"px";
      navarray[i].style.width = $("#rightsquare").width()/6+"px";
      navarray[i].scrollTop=navarray[i].scrollHeight;
      navarray[i].style.overflowY = "hidden";
      navarray[i].style.fontSize = $("#rightsquare").height()/6*1.667+"px";
    }

    document.getElementById('close').style.height = $("#rightsquare").height()/6+"px";
    document.getElementById('close').style.width = $("#rightsquare").height()/6*5+"px";
    document.getElementById('close').style.fontSize = $("#rightsquare").height()/6*1.668+"px";
    document.getElementById('showroom').style.fontSize = $("#rightsquare").height()/6*10+"px";

    document.getElementById("close").scrollTop=document.getElementById("close").scrollHeight;
    document.getElementById("close").style.overflowY = "hidden";

    document.getElementById('infodiv').style.height = $("#rightsquare").height()+"px";
    document.getElementById('infodiv').style.width = $("#rightsquare").width()+"px";

    

    window.onresize = function(event)
    {
    document.location.reload(true);
    }


    document.getElementById('alphabetvalue').style.left = ( $("#leftsquare").width()/2 ) - $("#alphabetvalue").width() / 2+"px";
    document.getElementById('alphabetvalue').style.bottom = ( $("#leftsquare").height()/2 ) - $("#alphabetvalue").height()/2-$("#leftsquare").height()/3 +"px";

    document.getElementById('rightsquare').style.display = "none";
    document.getElementById('leftsquare').style.display = "none";
    document.getElementById('infodiv').style.display = "none";

 
    $('#loading').hide();
 
 

}


