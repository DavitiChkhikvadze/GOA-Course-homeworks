function duplicateCount(text){
    const lowerText = text.toLowerCase(); //ტექსტის ყველა სიმბოლო იქნება lowcase
    const duplicates = [];//აგრეთვე შევქმენით ცარიელი კონსტანტა
    
    for(let i = 0; i < text.length; i++){ //იტერაცია მოვახდინეთ text-ზე
      let count = 0; //შევქმენით count ცვლადი რომლის მნიშვნელობა ჯერჯერობით 0-ია
      
      for(let x = 0; x < text.length; x++){ //for ციკლში კიდევ ერთხელ გადავუვლით for ციკლით ამ text-ს
        if(lowerText[i] === lowerText[x]) { //აქ ვამოწმებთ, რომ თუ პირველი იტერაციის
            //შედეგად მიღებული მნიშვნელობა (ასო) უდრის მეორე იტერაციის დროს მიღებულ ასოს, 
            //сount ცვლადი დავაპლიუსოთ 1-ით
          count++;
        }
      }
      
      if(count > 1 && !duplicates.includes(lowerText[i])){ //შემდეგ 1 ციკლს ვუბრუნდებით და
        //ვამოწმებთ რომ თუ count ცვლადის მნიშვნელობა მეტია 1-ზე და duplicates არ შეიცავს
        // პატარა I ასოს, დავამატოთ ეს i duplicates მასივში.
        duplicates.push(lowerText[i])
      }
    }
    
    return duplicates.length; //ბოლოს კი დავაბრუნოთ მიღებული მასივის სიგრძე
  }


  function uniqueInOrder(sequence){ 
    const result = []; //შევქმენით ცარიელი კონსტანტა
    let lastItem; //შევქმენით ცვლადი lastItem, რომელსაც მნიშვნელობა მივანიჭეთ 0, ანუ არაფერი
    
    for(let i = 0; i < sequence.length; i++){  //for ციკლის გამოყენებით იტერაცია მოვახდინეთ
        //sequence-ის ყველა მნიშვნელობის გასაგებად.
      if(sequence[i] != lastItem){ //შემდეგ დავწერეთ ესეთი რამ, რო თუ sequence მასივში 
        //კონკრეტული i ინდექსზე მყოფი ელემენტი არ უდრის lastItem-ს, 
        //მაშინ დავამატოთ ეს ელემენტი result ცვლადში და lastItem-ის მნიშვნელობა გავუტოლოთ ამ
        //კონკრეტულ ელემენტს.
        result.push(sequence[i]);
        lastItem = sequence[i]
      }
    }
    
    return result; //ბოლოს კი დავაბრუნოთ result ცვლადი, ანუ შედეგი
  }