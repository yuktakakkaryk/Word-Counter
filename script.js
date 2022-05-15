let textbox = document.getElementById("textbox");
        let char = document.getElementById("char");
        let word = document.getElementById("word");

        textbox.addEventListener('input', function(){
            let text = this.value;
            char.innerText = text.length;
            
            text = text.trim();
            let words = text.split(" ");
            let cleanList = words.filter(function(elm){
                return elm != "";
            });
            word.innerText = cleanList.length;
        })