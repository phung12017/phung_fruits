var img_arr = new Array( 1,2,3,4,5,6,7,8,9,10,11,12)
                    
for(i = 0 ; i<img_arr.length;i++){
    modal = document.getElementById("myModal");
    img1 = document.getElementById(img_arr[i]);
    
    modalImg = document.getElementById("img01")
    img1.onclick = function(){
        modal.style.display = "block"
        modalImg.src = this.src
        
    }

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
         modal.style.display = "none";
    }

}