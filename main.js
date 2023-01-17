// Get the timer element from the DOM, whichh will be our output for the countdown
const output=document.querySelector(".timer");

// Set date we're counting down to 
a=prompt("Set The Deadline (say: May 15, 2023 12:00:00)");
const targetDate = new Date(a).getTime();

// Update countdown every second
const interval = setInterval(()=>{
    // Get current day and time
    const currentDate=new Date().getTime();
    // Get distance between the current and target date
    const distance=targetDate-currentDate;
    // Time calculations for

    // Days
    const days=Math.floor(distance/(1000*60*60*24));
    // Hours
    const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    // Minutes
    const minutes=Math.floor((distance%(1000*60*60))/(1000*60));
    // Seconds
    const seconds=Math.floor((distance%(1000*60))/1000);

    //output the result
    output.innerHTML=days+"d "+hours+"h "+minutes+"m "+seconds+"s ";

    // When the countdown ends, display a new message and end the interval
    if(distance<0){
        // End interval
        clearInterval(interval);
        // Change text
        output.innerHTML="WELCOME!";
        // Change text to uppercase
        output.getElementsByClassName.textTransform="uppercase";

        // We can do anything we want to happen after the countdown ends inside this if statement.

        // This is just a simple example
    }

},1000);