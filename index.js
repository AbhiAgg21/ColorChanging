// Is code snippet mein hum JS ka use kar rahe hai jisse humein ek HTML element jiski id "center" hai woh milta hai aur jab uspr mouse hover hota hai left to right toh uska background color bhi red to blue change hota hai and rectangle ke edges par background color maximum red ya maximum blue hota. Extreme Left edge par background color extreme red hoga aur extreme right edge par background color extreme blue hoga.  



var rect = document.getElementById("center");
// Yahan rect naam ka ek variable banaya gaya hai jo HTML mein ek element ko represent karega jo "center" id ke saath milta hai. Isse hum JavaScript mein us element tak pahunch sakte hain.


// Is line mein mousemove event par ek event listener add kiya gaya hai. Matlab, jab mouse element ke upar move karega to ye function chala jayega.
//function (details) ek anonymous function hai jo event ke details ko argument mein le leta hai. 
rect.addEventListener("mousemove", function (details) {
    var rectlocation = rect.getBoundingClientRect();
    //Is line mein getBoundingClientRect function ka upayog kiya gaya hai jo rect element ke rectangular area ki properties ko laata hai aur unhe rectlocation variable mein store karta hai.

    var insiderectvalue = Math.floor(details.clientX - rectlocation.left);
    // Yahan details argument se milne wale clientX property ka upayog karke mouse pointer ki current x-coordinate se rect element ke left edge ke x-coordinate ko subtract karke insiderectvalue ko set kiya jata hai. Math.floor se value ko whole number mein convert kiya jata hai.




    //Yeh ek conditional statement hai jo check karta hai ki insiderectvalue rect element ki width ka adha hai ya nahi.
    if (insiderectvalue < rectlocation.width / 2) {
        var redcolor = gsap.utils.mapRange(0 , rectlocation.width/2 , 255,0, insiderectvalue);
        // Yahan hum gsap.utils.mapRange function ka upayog kar rahe hain jo ek range ko doosri range mein map karta hai. Yahan redcolor ko map kiya gaya hai jo insiderectvalue ko 0 se rectlocation.width/2 ke beech ke range mein map karta hai aur uska result 255 se 0 ke beech ke range mein hota hai.

        gsap.to(rect, {
            backgroundColor : `rgb(${redcolor},0 , 0)`,
            ease: Power4,}) //Yeh line gsap.to function ka upayog karke rect element ki background color ko animate karne ke liye hai. Background color redcolor ke hisab se set ki jati hai.

    }
    else {
        var bluecolor = gsap.utils.mapRange(rectlocation.width/2 ,rectlocation.width,0,255, insiderectvalue);
        gsap.to(rect, {
            backgroundColor : `rgb(0 , 0 , ${bluecolor})`,
            ease: Power4,

        })
        }
})







//Is line mein mouseleave event par ek aur event listener add kiya gaya hai. Matlab, jab mouse element se bahar jaata hai, to ye function chala jayega.

rect.addEventListener("mouseleave" , function() {


    // Is line mein gsap.to function ka upayog karke rect element ki background color ko animate karke "White" color mein set kiya jata hai, jab mouse element se bahar jaata hai.

    gsap.to(rect,{
        backgroundColor: "White",
    })
    
})