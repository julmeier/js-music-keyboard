
//$('.note c').on('click', 'div', function(event) {
//   console.log('You clicked on C');
//   $(this).play();
// } );

// function play() {
//   var cNote = document.getElementbyId("cAudio");
//   cNote.play();
// }
//let cAudio = $('#cAudio')[0];

$(document).ready(function() {
  console.log('program has started')

//   let cAudio = $('#cAudio')[0];
//
//   $('.c').click(function() {
//     cAudio.play();
//     console.log('You clicked on C');
//     console.log(cAudio);
//     //cAudio.pause();
//     cAudio.currentTime = 0;
//   })

  const playNote = function playNote() {
    $('.instrument').on('click', 'button', function(event) {
      //alert(`clicked on ${$(this).html()}`);
      //console.log('You clicked on a button');
      //let fileID = `#${$(this).html()}Audio`;
      let fileID = `#${this.innerHTML}Audio`;
      console.log(fileID);
      $(fileID).load();
      $(fileID).get(0).play();
    })
  };
  playNote();

  const playNoteByLetter = function playNoteByLetter(letter) {
      //console.log('youre inside again')
      let fileID = "#" + letter + "Audio";
      //console.log(fileID);
      $(fileID).load();
      $(fileID).get(0).play();
  };

  let notes = ['a','b','c','d','e','f','g'];
  $("body").keydown(function(event) {
    //console.log('You pressed a letter');
    pressedLetter = event.key;
    console.log(`${pressedLetter}`);
    if (notes.includes(pressedLetter)) {
      //console.log('Its included!');
      playNoteByLetter(pressedLetter);
    }
  });


});


// let notes = ['a','b','c','d','e','f','g'];
// for (let i = 0; i < notes.length; i++) {
//   let buttonNote = notes[i];
//   document.getElementbyId(buttonNote.id).click( function() {
//     playNote();
//   })
// }


//SOURCES:
//http://jsfiddle.net/iambriansreed/VavyK/
