
    // GET INPUT ELEMENT FOR EVENT LISTENER 
const searchInput = document.getElementById('search');

    // GALLERY CLASS TO CONTROL FLEX JUSTIFY CONTENT PROPERTY
const gallery = document.getElementsByClassName('gallery')[0];
gallery.style.justifyContent = "center"

searchInput.addEventListener("input", e => {
    // OR
    // document.getElementById('search').addEventListener("input", (e) => {
    //    ...
    // })

    // PUT THE SEARCH RESULTS TO TOP LEFT SIDE
    gallery.style.justifyContent = "flex-start"

    // PARAMETER INPUT EVENT VALUE
    let inputValue = e.target.value

    // SELECT ALL ANCHOR TAG FROM GALLERY
    let imageAnchor = document.querySelectorAll('.photo a');

    // LOOPING THROUGH EACH ANCHOR TAG 'DATA-TITLE' ATTRIBUTE IN GALLERY DIV
    imageAnchor.forEach(element => {

        // PARAMETER ELEMENT IS WHOLE ANCHOR TAG IN HTML
        // GET DATA TITLE( CAPTION )  FROM ANCHOR TAG
        let title = element.getAttribute('data-title').toLowerCase();
        
        // IF TITLE DOES NOT INCLUDE INPUT VALUE SET DISPLAY NONE
        if( !title.includes(inputValue.toLowerCase()) ) {
            element.parentElement.style.display = "none"
            
            // UNSET GROUP OF IMAGES FROM LIGHTBOX PLUGIN
            // THIS MAKES ONLY INCLUDE INPUT VALUE IMAGES TO VISIBLE ON THE LIGHTBOX 
            element.setAttribute('data-lightbox', "")
        }
        else { // IF TITLE DOES INCLUDE INPUT VALUE   
            element.parentElement.style.display = "block"
        }
    });

    // IF THERE IS NO INPUT VALUES IN THE SEARCHBOX, SET GALLERY DIV TO CENTER
    if (inputValue === "") {
        gallery.style.justifyContent = "center"
    }
})