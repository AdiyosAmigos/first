function tenglama(a,b,c){
    let d = Math.pow(b, 2) - 4 * a * c;
    if(d < 0){
        console.log("yechimi yoq")
    }else if(d === 0){
        console.log("yechimga ega " , - b / (2 * a))
    }else{
        console.log("2 ta yechim" , ( - b + Math.sqrt(d)) / (2 * a), ( - b - Math.sqrt(d)) / (2 * a));
    }
}
tenglama (-2,-4,-8);