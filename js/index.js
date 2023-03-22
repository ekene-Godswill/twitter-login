function handleInputFill(){
    let input = document.getElementById('email');
    let placehoder = document.getElementById('placeholder');
    let inputValue = input.value ;

    if(inputValue.toString()){
        placehoder.className = 'filledInput';
    }
    else{
        placehoder.className = '';
    }
    
}