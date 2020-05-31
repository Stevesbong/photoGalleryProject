$(document).ready( () => {
    
    // IMAGE HOVERING 
    $('.photo').hover( (e) => {
        console.log('img hover test',e.target)

        // SIMPLE STYLE WORKING TEST
        e.target.style.opacity = ".5"
        e.target.style.transition = ".3s ease-in"
    }, (e) => {
        e.target.style.opacity = '1'
        e.target.style.transition = ".3s ease-in"
    });

});
