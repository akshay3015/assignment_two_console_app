

  const readline =  require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });




  const question = (question) => {
    return new Promise((resolve, reject) => {
        readline.question(question, (answer) => {
        resolve(answer)
      })
    })
  }
  
  readline.question('Please select Option 1,2,3 \n1 ---> BMI calculator \n2 ---> To check if entered text is palindrome \n3------> generate user name', input => {
    switch(input) {
        case '1':
            
          executeBMICal();
          break;
        case '2':
          executePanlindromeCheck();
          break;
          case '3':
          executeGenerateUserName();
          break;
        default:
            console.log('Not a valid option! \nPlease enter 1,2 or 3');
            readline.close();
      }
   
   
  });

  async  function executeBMICal(){
    const height = await question('Please enter height in cm');
    const weight = await question('Please enter weight in kg');

    if (height === "" || isNaN(height)){
         console.log("Provide a valid Height!");
    }
    else if  (weight === "" || isNaN(weight)) {
        console.log("Provide a valid Weight!");
    } else {
  
        // Fixing upto 2 decimal places
        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);
  
        let result = '';
        // Dividing as per the bmi conditions
        if (bmi < 18.6) result =
            'Under Weight : '+bmi;
  
        else if (bmi >= 18.6 && bmi < 24.9) 
            result = 
                'Normal :'+bmi;
  
        else result =
            'Over Weight : '+bmi;

        
        console.log(result);
        readline.close();
    }

    
  }

  async function executePanlindromeCheck(){
    const stringToCompare = await question('Please enter anything to check if it is palindrome');

    let reversed = stringToCompare.split('').reduce((acc, char) => char + acc, '');
  if (stringToCompare === reversed) {
    console.log('String is palindrome');
  } else {
    console.log('String is not palindrome');
  }
  readline.close();


  }

  async function executeGenerateUserName(){
    const userInput = await question('Please enter name');
    console.log('user name is '.concat(userInput).concat(Math.floor((Math.random() * 100) + 1)));


  }