var coderbyte = {
  reverseString: function(string) {

  	// confirm a string is being passed
    var stringReversed = "",
        i, 
        len; 

    for (i = 0, len = string.length; i < len; i++) {
      stringReversed = string[i] + stringReversed;
    }

    return stringReversed;
  },

  getFactorial: function(number) {

  	// confirm that a num and a num > 0 is passed
    var product = 1, 
        i,
        len; 

    for (i = number; i > 1 ; i--) {
      console.log(product = product * i);
    }

  	return product;
  },

  getLongestWord: function(sentence) {

  	// confirm that a string was passed  	
    var santizedSentence = sentence.replace(/[^a-z\s]/gi, ""),
        words            = santizedSentence.split(" "),
        longestWord      = "",
        i, 
        len;

    for (i = 0, len = words.length; i < len; i++) {
      if ( words[i].length > longestWord.length) {
      	longestWord = words[i];
      }
    }

  	return longestWord;
  },

  changeLetters: function(string) {

  	// confirm that a string was passed


  },

  addNumbers: function(number) {
 
  	// confirm that a number was passed && number is greater than 0
  	var sum = 0,
        i;

    for (i = number; i > 0; i--) {
    	sum += i; 
    }

    return sum; 
  },

  capitalizeLetters: function(sentence) {

  	// confirm that a string was passed
    var words = sentence.split(" "),
        sentenceCapitalized = "",
        i,
        len; 

    for (i = 0, len = words.length; i < length; i++) {
      sentenceCapitalized += words[i].charAt(0).toUpperCase();
    };    

  	return sentenceCapitalized;
  },

  //breaked

  compareNumbers: function(number1, number2) {

  	// confirm that both arguments are numbers

  	if (number1 < number2) {
  		return true;
  	} else if ( number1 > number2) {
  		return false; 
  	} else {
  		return -1;
  	}
    
  },

  countVowels: function(string) {

  	//confirm a string was passed

    var regex          = /[^aeiou]/ig,
        removeChar     = "",
        vowelsAsString = string.replace(regex, removeChar),
        vowelCount     = vowelsAsString.length; 

    return vowelCount;
  },

  insertDashes: function(number) {

  	// confirm that a number was passed
    var numberAsString = number.toString(),
        regex          = /([13579])(?=[13579])/g,
        dash           = "$1-", 
        numberWithDash = numberAsString.replace(regex, dash);
    
    return numberWithDash;
  },

  addNumbersAsString: function(string) {

  	// should refactor && confirm  that a string was passed
  	var regex                  = /[^\d]+/g,
  	    space                  = " ", 
  	    numbersSpacedDelimited = string.replace(regex, space),
  	    numbers                = numbersSpacedDelimited.split(space),
  	    sum                    = 0,
  	    i,
  	    len;

    for (i = 0, len = numbers.length; i < len; i++) {
    	sum += parseInt(numbers[i]);
    } 

    return sum; 
  }
};