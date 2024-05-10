    document.addEventListener('DOMContentLoaded', function() {
        // The next five functions are identical and serve to chnage the pages via the menu
        document.getElementById('home').addEventListener('click', function() {
            // Found this method here https://www.geeksforgeeks.org/how-to-redirect-to-another-webpage-using-javascript/
            window.location.href = "index.html";
        });

        document.getElementById('metal').addEventListener('click', function() {
            window.location.href = "metal.html";
        });

        document.getElementById('rock').addEventListener('click', function() {
            window.location.href = "rock.html";
        });

        document.getElementById('pop').addEventListener('click', function() {
            window.location.href = "pop.html";
        });

        document.getElementById('jazz').addEventListener('click', function() {
            window.location.href = "jazz.html";
        })


        // Chnages colors of the buttons according to their correct/incorrect status,
        // prints out correct/incorrect
        // and makes sure no two buttons can be lit up at the same time.
        let lastClick = null;

        let correct = document.querySelector(".correct");
        correct.addEventListener('click',function(){
            if(lastClick != null){
                lastClick.style.background = '#e0bad7';
            }
            correct.style.background = 'green';
            lastClick = correct;
            document.querySelector("#feedback1").innerHTML = "Correct!";
        });

        let incorrects = document.querySelectorAll(".incorrect");
        for(let i=0; i<incorrects.length; i++){
            incorrects[i].addEventListener('click',function(){
                if(lastClick != null){
                    lastClick.style.background = '#e0bad7';
                }
                incorrects[i].style.background = 'red';
                lastClick = incorrects[i];
                document.querySelector("#feedback1").innerHTML = "Incorrect!";
            })
        }




    });