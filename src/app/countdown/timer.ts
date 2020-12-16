//-------------------------------------------------------//
// Re usable countdown timer, just put the end date      //
//-------------------------------------------------------//
const timer = (finishDate:string) =>{

    let countDownDate = new Date(finishDate).getTime();
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let countdown = {
        
    };

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    countdown = {
        days,
        hours,
        minutes,
        seconds
    }

    return countdown;
}

export default timer;