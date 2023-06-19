// <!-- // Step4 4 game guessing and get success
// // const answer = Math.floor(Math.random() * 10 + 1);
// // // let guesses = 0 ;
// // document.getElementById("button").onclick = function() {
// //     let guess = document.getElementById("myLabel").value
// //     // guesses += 1;
// //     if ( guess == answer ){
// //         alert(`${answer} is the # , It took you ${guess} guess (Note:If you succeed, you can adore me.)`  )
// //     }
// //     else if (guess < answer ) {
// //         alert("Too small")
// //     }
// //     else {
// //         alert("Too large!")
// //     }
// // } -->

const answer = Math.floor(Math.random() * 10 + 1);
    let guesses = 0 ;
    document.getElementById("button").onclick = function(){
        let guess = document.getElementById("guessing-game").value;
        guesses+=1;
        if(guess == answer){
            alert(`${answer} is the #, it took you ${guess} (You win so you can love me)`);
        }
        else if (guess < answer){
            alert("too small");
        }
        else {
            alert("Too large!");
        }
    }

let username = document.getElementById("fortune-guess");
// let resetvalue = '';
// document.getElementById("reset").onclick = function(){
//     // console.log("reset")
//     if(resetvalue){
//         resetvalue = resetvalue;
//         document.getElementById("guessing-game").innerHTML=resetvalue;
//     }
//     else {
//         document.getElementById("guessing-game").innerHTML='';
//     }
// }
// console.log("fortune-guess")
document.getElementById("guess-button").onclick = function(){
    // console.log("guess-button");
    if(username.value == 'Samoeurn'){
        alert("Hanesome boy")
    }
    else if (username.value == 'Bona'){
        alert("Girlfriend Panha")
    }
    else if (username.value == 'Sambath'){
        alert(" If you make an effort to study, you will succeed in your major today.")
    }
    else if (username.value == 'Sreytouch'){
        alert("You are a young girl who fell in love two years ago. If you put effort into it, you will succeed in your major today.")
    }
    else if (username.value == 'Khim'){
        alert("You have been Vannet's wife for five years and plan to teach Khmer.")
    }
    else if (username.value == 'Channy'){
        alert("You are a pig, and your success will depend on the skills you learn at university today (you will eventually become Daro's bride).")
    }
    else if (username.value == 'Bunrong'){
        alert("You are both my worst and best buddy. If you keep going in life, you will succeed.")
    }
    else if (username.value == 'Chentha'){
        alert("If you keep going in life, you will succeed.")
    }
    else if (username.value == 'Khunary'){
        alert("If you persevere and find true love after finishing anything, you will be successful in life. Master's Degree")
    }
    else if (username.value == 'Liza'){
        alert("You remind me of Channy, a lovely pig.If you keep going in life, you will succeed.")
    }
    else if (username.value == 'Phanha'){
        alert("If you keep going in life, you will succeed.")
    }
    else if (username.value == 'Samphas'){
        alert("If you don't give up, you will succeed in life and become Yaya's husband.")
    }
    else if (username.value == 'Sina'){
        alert("You are a pig in Kalampluck Village and have a black eye.If you keep going in life, you will succeed.")
    }
    else if (username.value == 'Houy'){
        alert("Your honey will find you to be a cute girl.If you keep going in life, you will succeed.")
    }
    else if (username.value == 'Sreynang'){
        alert("If you keep going in life, you will succeed.")
    }
    else if (username.value == 'Sachak'){
        alert("If you keep going in life, you will succeed.")
    }
    else if (username.value == 'Perith'){
        alert("If you keep going in life, you will succeed.")
    }
    else if (username.value == 'Sievmey'){
        alert("Don't left me")
    }
    else if (username.value == 'Sinoun'){
        alert("You are little and adorable. For all of your students, you are a good bio instructor.You first met your true love two years ago.")
    }
    else{
        alert("Incorrect username")
    }
}