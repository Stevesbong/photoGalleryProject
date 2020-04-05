
    // INPUT EVENT LISTENER 
const searchInput = document.getElementById('search');

searchInput.addEventListener("input", e => {
    // OR
    // document.getElementById('search').addEventListener("input", (e) => {
    //    ...
    // })

    // PARAMETER INPUT EVENT VALUE
    let inputvalue = e.target.value

    // SELECT ALL ANCHOR TAG FROM GALLERY
    let imageAnchor = document.querySelectorAll('.photo a');

    // LOOPING THROUGH EACH ANCHOR TAG 'DATA-TITLE' ATTRIBUTE IN GALLERY DIV
    imageAnchor.forEach(element => {
        // PARAMETER ELEMENT IS WHOLE ANCHOR TAG IN HTML
        
        
        // GET DATA TITLE( CAPTION )  FROM ANCHOR TAG
        let title = element.getAttribute('data-title').toLowerCase();
        
        // IF TITLE DOES NOT INCLUDE INPUT VALUE SET DISPLAY NONE
        if( !title.includes(inputvalue.toLowerCase()) ) {
            element.parentElement.style.display = "none"
            
            // UNSET GROUP OF IMAGES FROM LIGHTBOX PLUGIN
            // THIS MAKES ONLY INCLUDE INPUT VALUE IMAGES TO VISIBLE ON THE LIGHTBOX 
            element.setAttribute('data-lightbox', "")
        }
        else { // IF TITLE DOES INCLUDE INPUT VALUE   
            element.parentElement.style.display = "block"
        }
    });
})