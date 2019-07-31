// const TypeWriter = function(txtElement, words, wait = 3000) {
//   this.txtElement = txtElement;
//   this.words = words;
//   this.txt = '';
//   this.wordIndex = 0;
//   this.wait = parseInt(wait, 10);
//   this.type();
//   this.isDeleting = false;
// }

// // Type Method
// TypeWriter.prototype.type = function() {
//   // Current index of word
//   const current = this.wordIndex % this.words.length;
//   // Get full text of current word
//   const fullTxt = this.words[current];

//   // Check if deleting
//   if(this.isDeleting) {
//     // Remove char
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     // Add char
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }

//   // Insert txt into element
//   this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//   // Initial Type Speed
//   let typeSpeed = 300;

//   if(this.isDeleting) {
//     typeSpeed /= 2;
//   }

//   // If word is complete
//   if(!this.isDeleting && this.txt === fullTxt) {
//     // Make pause at end
//     typeSpeed = this.wait;
//     // Set delete to true
//     this.isDeleting = true;
//   } else if(this.isDeleting && this.txt === '') {
//     this.isDeleting = false;
//     // Move to next word
//     this.wordIndex++;
//     // Pause before start typing
//     typeSpeed = 500;
//   }

//   setTimeout(() => this.type(), typeSpeed);
// }

// ES6 Class
class TypeWriter {
    constructor (txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }
    type () {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Getting the full text of words
        const fullTxt= this.words[current];
        // Check if deleting
        if (this.isDeleting) {
            // Remove one character
            this.txt = fullTxt.substring(0, this.txt.length -1);
        } else {
            // Add one character
            this.txt = fullTxt.substring(0, this.txt.length +1);
        }

        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Type speed
        let typeSpeed = 500; // Initial speed

        if (this.isDeleting){ // Check if it's deleting and speed up
            typeSpeed /= 4;
        }

        if(!this.isDeleting && this.txt === fullTxt) { // Checks if the word is completed
            typeSpeed = this.wait; // Make it pause at the end
            this.isDeleting = true; // Get it deleting
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++; // Moves to the next word
            typeSpeed = 800; // Pauses before it starts to type again
        }



        setTimeout(() => this.type(), typeSpeed);
        }
}

document.addEventListener('DOMContentLoaded', init); //Starts working when DOM is loaded up

//This is the init function for the App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement, words, wait); // Init the TypeWriter
}