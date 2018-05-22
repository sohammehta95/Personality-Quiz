(function() {
  var questions = [{
    question: "How would you describe your work life?",
    choices: ['img/q1a.png', 'img/q1b.png'],
    correctAnswer: 2
  }, {
    question: "How do you behave with people at work?",
    choices: ['img/q2a.png', 'img/q2b.png'],
    correctAnswer: 4
  }, {
    question: "How is your relation with time?",
    choices: ['img/q3a.png', 'img/q3b.png'],
    correctAnswer: 0
  }, {
    question: "What is your way of working?",
    choices: ['img/q4a.png', 'img/q4b.png'],
    correctAnswer: 3
  }, {
    question: "Which seems more exciting?",
    choices: ['img/q5a.png', 'img/q5b.png'],
    correctAnswer: 4
  }, {
    question: "How do you feel about new technologies?",
    choices: ['img/q6a.png', 'img/q6b.png'],
    correctAnswer: 4
  }, {
    question: "Which scenario defines you?",
    choices: ['img/q7a.png', 'img/q7b.png'],
    correctAnswer: 4
  } , {
    question: "Whom do you identify most with?",
    choices: ['img/q8a.png', 'img/q8b.png'],
    correctAnswer: 4
  }, {
    question: "How does your travel look like?",
    choices: ['img/q9a.png', 'img/q9b.png'],
    correctAnswer: 4
  }];
  
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  
  // Display initial question
  displayNext();
  


  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Please make a selection!');
    } else {
      questionCounter++;
      displayNext();
    }
  });
  
  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });
  
  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
  
  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  
  // Creates and returns the div that contains the questions and 
  // the answer selections

  document.getElementById('pickup-1').addEventListener('change', function() {
  document.querySelector('label[for="pickup-1"]').classList.add('colorText')
})
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    //var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    //qElement.append(header);
    
    var question = $('<p class="cent">').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }
  
    function abe() {
  $('#' + i).trigger('click');
  }

// var addclass = 'color';
// $('input[name="answer"]:checked')(function(e){
//    $('.img_button').removeClass(addclass);
//    $('.img_button')..addClass(addclass);

// });
// // var $cols = $('.img_button').click(function(e) {
// //     $cols.removeClass(addclass);
// //     $(this).addClass(addclass);
// // });

document.getElementById(i).addEventListener('change', function() {
  document.querySelector('label[for="'+i+'"]').classList.add('colorText')
})

  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul class="up">');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li class="up2">');
      input = '<div class="img_button">';
      input += '<input type="radio" style="opacity:0" name="answer" class="check-with-label" value="' + i + '" id="'+i+'" />';
      input+='<label class="label-for-check" onclick="abe()" for="'+i+'">';
      input += '<img src="'+questions[index].choices[i]+'">';
      input+='</label>';
      input+='</div>';
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }
  
  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < questions.length)
      {
          var nextQuestion = createQuestionElement(questionCounter);
          quiz.append(nextQuestion).fadeIn();
          if (!(isNaN(selections[questionCounter]))) {
            $('input[value='+selections[questionCounter]+']').prop('checked', true);
          }
          
          // Controls display of 'prev' button
          if(questionCounter === 1){
            $('#prev').show();
          } else if(questionCounter === 0){
            
            $('#prev').hide();
            $('#next').show();
          }
      }
      else 
      {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }
  
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    
    var ans={
      good:['Optimistic', 'Observant'],
      bad:['Impulsive','Finicky']};
    
        
      if (selections[0] === 1) 
        ans.good.push('Hardworking');

      if (selections[1] === 1) 
        ans.good.push('Friendly');

      if (selections[1] === 0) 
        ans.good.push('Shy');

      if (selections[6] === 0) 
        ans.bad.push('Optimistic');

      if (selections[6] === 1) 
        ans.bad.push('Panicky');

      var output ='';
      output = '<center>';
      output+=" The following are the results of your personality test: <br><br>";
      output+= '<img class="bigimage" src="img/result.png" alt="Result"><br>';

      
      output+= " <h2> Positive Traits: </h2>  <ul class='yo'>";
      for(var i=0;i< 3; i++)
        output+= "<li class='yo2'>" + ans.good[i] + "</li><br>";
      output+="</ul>";

      output+= "<h2> Negative Traits: </h2> <ul class='yo'>"
      for(var i=0;i< 3; i++)
        output+= "<li class='yo2'>" + ans.bad[i] + "</li><br>";
      output+="</ul>"
    
    score.append(output);
    return score;
  }
})();