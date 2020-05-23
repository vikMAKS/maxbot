alert("This code is a prototype!I will add new things every day");
alert("You can ask what do you want:");
alert("Comment more questions that can be added,please!");
var Ques = [
    /hello|hi|hy|howareyou/i,
    /whoareyou|whatareyou/i,
    /WhatIsSololearn/i,
    /WhatCourses|WhichCourses|WhatCourse|whatarecourses|whataredisciplines|whatprogramminglanguages/i,
    /cost|purchase|fee|free/i,
    /peers|peer|friend|friends/i,
    /whatIsCodePlayground|WhatIsPlayground|playground/i,
    /whatIsForum|useforum|Howtoaskquestion|askquestion|forum/i,
    /yourname|urname/i,
    /createdyou|yourcreator|yourdeveloper|yourmoderator/i,
    /youarewritten|inwhichlanguageyouarewritten/i,
    /favourite|favorite|like/i,
    /ceo|createdsololearn|founderofsololearn/i,
    /createcode|newcode/i,
    /advertising|advertisement|advertise/i,
    /xp|xps/i,
    /challenge|challenges/i,
    /expired|expire/i,
    /managecourses|manage|add|remove/i,
    /limit/i,
    /public|private/i,
    /logout|signout|sign|log/i,
    /message|chat/i,
    /post|images/i,
    /lessonfactory|quizfactory/i,
    /recommendation|recommend|recommendations/i,
    /youdo|yourtask|yourpurpose|helpme/i,
    /badges|badge/i,
    /jquery|reactjs|vuejs|meteorjs|angularjs/i,
    /private chat|chat|private/i,
    /google|google chrome|mozzila|safari|internet explorer|opera|edge/i,
    /tennis|rugby|football|basketball|cricket|baseball|handball|voleyball/i,
    /addition|plus/i,
    /minus|min/i,
    /multiplication/i,
    /devide/i,
    /square/i,
    /root|squareroot|Root|SquareRoot|sqrt/i,
    /microsoft|linux|macOS/i,
    /date/i,
    /clock|time/i,
    /best computer|computer/i,
    /degree|deg/i,
    /advice|programming advice/i
];


function openMenu(){
    document.querySelector("#bar").style.width = "270px";
}
function closeMenu(){
    document.querySelector("#bar").style.width = "0px";
}
function openSettingMenu(){
    document.querySelector("#setting-menu").style.display = "block";
}
function closeSettingMenu(){
    document.querySelector("#setting-menu").style.display = "none";
    document.querySelector("#bar").style.width = "0px";
}
function startApp(){
    document.getElementById("cover").style.display = "none"
}
$(function(){

    var name = prompt("Enter your name:");
    while(name === '') {
        var name = prompt("Enter your name:");
    }
    $(".send-btn").on("click",function(){
    var userAsked = document.querySelector(".user-sent").value,
    showUser = userAsked,
    userAsked = userAsked.toLowerCase();
    $("<p class='user-container'>"+name+": "+showUser+"</p>").appendTo(".main-container"),
     reply = function(message){
          $("<p class='bot-container'> solobot: "+message+"</p>").appendTo(".main-container");
    };
    function speak(txt, vol, speed){
    var audio = "https://audio1.spanishdict.com/audio?lang=en&text=" + txt + "&key=8e9b354fabaade0e3ecf6f183f8dc173";
        var speak = new Audio(audio); 
        speak.volume = vol;
        speak.playbackRate = speed;
        speak.play();
}
sp =  function speakText(){
       var txt = document.querySelector(".user-sent").value;
       var vol = document.getElementById("volume").value;
       var speed = document.getElementById("playbackRate").value;
       speak(message, vol, speed);
       
    }
    $(".user-sent").val(""); 
  
    if(Ques[0].test(userAsked)){
          reply("Hello. Hope you are fine");
          sp("Hello.Hope you are fine");
    }else if(Ques[1].test(userAsked)){
        reply("I'm SoloBot. I'm here to help you!");
    }else if(Ques[2].test(userAsked)){
        reply("SoloLearn is an online and mobile learning platform that offers free coding classes in 13 different programming disciplines. SoloLearn apps are available on Android, iOS, and web.");
    }else if(Ques[3].test(userAsked)){
        reply("SoloLearn provides courses on programming languages like C++, Java, C# and Swift. Web Development like HTML, CSS, Javascript and PHP with popular frameworks like Angular and Bootstrap etc are also offered.");
    }else if(Ques[4].test(userAsked)){
        reply("These courses are free of cost!");
    }else if(Ques[5].test(userAsked)){
        reply("You can learn with peers and friends, follow them and you can also message them personally.");
    }else if(Ques[6].test(userAsked)){
        reply("Code Playground is created for you to share your codes with others. You can see trending and popular codes as well in code playground.");
    }else if(Ques[7].test(userAsked)){
        reply("You can ask a question using SoloLearn Forum. To ask questions:<br>1: Go to Forum tab.<br>2: Click '+' button  to create a new question.<br>3: Add required information and submit the question.");
        reply("Always search a question before asking it on forum.")
    }else if(Ques[8].test(userAsked)){
        reply("I'm robot, I don't have any name.")
    }else if(Ques[9].test(userAsked)){
        reply("My creator is Viktor Maksimoski")
    }else if(Ques[10].test(userAsked)){
        reply("I'm written in Javascript.");
    }else if(Ques[11].test(userAsked)){
        reply("I am not human so nothing is my favourite.");
        
    }else if(Ques[12].test(userAsked)){
        reply("SoloLearn is created by Yeva Hyusyan and she is CEO of SoloLearn");
    }else if(Ques[13].test(userAsked)){
        reply("You can create new codes and share with others.");
        reply("To create a new code:<br>1: Go to code playground.<br>2: Touch '+' button.<br>3: Choose language.<br>4: Write code in compiler<br>5: Click save and you are done!");
        reply("Post you codes here to advertise them:<br>1: <a href='https://www.sololearn.com/Discuss/452626/?ref=app'>Code Advertising</a><br>2: <a href='https://www.sololearn.com/Discuss/637386/?ref=app' >Advertising</a>")
    }else if(Ques[14].test(userAsked)){
        reply("You can advertise your codes in some post so that other may know of what you've created.");
        reply("Post you codes here to advertise them:<br>1: <a href='https://www.sololearn.com/Discuss/452626/?ref=app'>Code Advertising</a><br>2: <a href='https://www.sololearn.com/Discuss/637386/?ref=app' >Advertising</a>");
    }else if(Ques[15].test(userAsked)){
        reply("XP stands for eXperience Points. You earn XP by participating in activities and improving your coding skills. These activities include completing a lesson/course, playing challenges, unlocking badges, and so on.");
    }else if(Ques[16].test(userAsked)){
        reply("You can challenge peers in almost all languages. Challenges will help you gain XPs.");
        reply("To play a challenge: <br>1: Go to Challenge tab<br>2: Touch + button<br>3: Choose your weapon<br>4: Select peer or a random person<br>5: Here we go!")
    }else if(Ques[17].test(userAsked)){
        reply("If opponent don't play challenge, it will expire in 24 hours.");
    }else if(Ques[18].test(userAsked)){
        reply("You can manage courses in app easily.<br>Click manage button above 'My Courses' to add or remove a course.<br><img src='https://dl-web.dropbox.com/s/pn7vxn2jyfx7cc9/IMG_20181204_182748.jpg?dl=0'/>");
    }else if(Ques[19].test(userAsked)){
        reply("15 matches against 1 person in a 24 hour period <br>You can however play against 50 to say 500 people in a day and 15 matches per person.");
    }else if(Ques[20].test(userAsked)){
        reply("You can public/private your code by touching on public/private button on the top code menu.<br><img src = 'https://dl-web.dropbox.com/s/23purbhj6k7e5as/IMG_20181204_185406.jpg?dl=0'/>");
    }else if(Ques[21].test(userAsked)){
            reply("You can logout from SoloLearn app by touching on option button on top right corner of app.");
            reply("1: Click on option button on top right corner.<br><img src='https://dl-web.dropbox.com/s/pdm1fhi02mwf0p3/IMG_20181204_194248.jpg?dl=0' /><br>2: Go to Settings. <br>3: At the end of list, click 'Sign Out'");
    }else if(Ques[22].test(userAsked)){
        reply("You can send messages to a peer personally.");
        reply("1: Open the person's profile.<br>2: Follow him/her<br>3: Message button will appear instead of follow button.<br><img src='https://dl-web.dropbox.com/s/oqcizt44lanvxty/IMG_20181204_195939.jpg?dl=0'/><br>4: Click on the button and start chatting!");
    }else if(Ques[23].test(userAsked)){
        reply("You can create a neq post in <b>Activity Feed</b>. ");
        reply("At homepage, click on the text under your username to create new post. Add image or right text and click <b>Post</b>")
    }else if(Ques[24].test(userAsked)){
        reply("You can create new lessons to share knowledge and new quiz also. Approved quizzes will be added in challenges.");
        reply("To create a quiz or lesson, go to quiz or lesson factory respectively. Create your content and submit.");
    }else if(Ques[25].test(userAsked)){
        reply("If you are a beginner you should try Web languages. You should learn Ruby or C language");
    }else if(Ques[26].test(userAsked)){
        reply("I am here to help you figure out SoloLearn App. You can ask me anything about SoloLearn");
    }else if(Ques[27].test(userAsked)){
        reply("Badges are awarded to eligible users. Badges help you gain XPs. Each badge has its own XP value.<br> To know more about badges check this <a href='https://code.sololearn.com/WdNJUx3lFKMZ/?ref=app'>code</a>.");
    }else if(Ques[28].test(userAsked)){
        reply("<p>It's JavaScript library.</p>");
        }else if(Ques[29].test(userAsked)){
            reply("It's a place where you can chat with other sololearn users.");
            }else if(Ques[30].test(userAsked)){
            reply(userAsked+" is web explorer");  
            }else if(Ques[31].test(userAsked)){
                reply(userAsked+" is a sport");
        }else if(Ques[32].test(userAsked)){
            var a = prompt("Enter a num:");
            var b = prompt("Enter a num:");
            var c = parseInt(a, 10) + parseInt(b, 10);
            reply(a+"+"+b+" is: "+c);
        }else if(Ques[33].test(userAsked)){
         var d = prompt("Enter a num:");
         var e = prompt("Enter a num:");
         var f = parseInt(d, 10) - parseInt(e, 10);
         reply(d+"-"+e+" is "+f);
        }else if(Ques[34].test(userAsked)){
         var g = prompt("Enter a num:");
         var h = prompt("Enter a num:");
         var i = g * h;
         reply(g+"*"+h+" is: "+i);
        }else if(Ques[35].test(userAsked)){
         var j = prompt("Enter a num:");
         var k = prompt("Enter a num:");
         if(k === 0){
             reply(j+"/"+k+" is infinity");
             speakText(j+"/"+k+" if infinity");
         }
         else{
             var l = j / k;
             reply(j+"/"+k+" is "+l);
             speakText(j+"/"+k+" is "+l);
         }
         }else if(Ques[36].test(userAsked)){
          var m = prompt("Enter a num:");
          var n = Math.pow(m, 2);
          reply(m+"² is: "+n);
        }else if(Ques[37].test(userAsked)){
         var o = prompt("Enter a num:");
         var p = Math.sqrt(o);
         reply("√"+o+" is: "+p);
        }else if(Ques[38].test(userAsked)){
         reply(userAsked+" is operating system");
        }else if(Ques[39].test(userAsked)){
         var da = new Date();
         var year = da.getFullYear();
         var month = da.getMonth();
         var day = da.getDate();
         reply("The date is: "+day+"/"+month+"/"+year);
        }else if(Ques[40].test(userAsked)){
         var dat = new Date();
         var hour = dat.getHours();
         var min = dat.getMinutes();
         var sec = dat.getSeconds();
         var mil = dat.getMilliseconds();
         reply("The time is: "+hour+":"+min+":"+sec+":"+mil);
        }else if(Ques[41].test(userAsked)){
         reply("The best computer is macOS");
        }else if(Ques[42].test(userAsked)){
            var x = prompt("Enter a num.");
            var y = prompt("Enter a num.");
            var z = Math.pow(x, y);
            reply("The answer is: "+z);
        }else if(Ques[43].test(userAsked)){
            reply(name+" you sould learn from courses and applications like sololearn and u must learn every day because every day there is new things.");
   }else{
        var rand = Math.random();
        if(rand < 0.5){
            reply("Sorry, I don't know this");
        }else{
            reply("I'm not programmed to answer this.");
        }
    }
    });
});