$(document).ready( () => {
    
    // IMAGE HOVERING 
    $('.photo').mouseover( (e) => {
        console.log('img hover test',e.target)

        // SIMPLE STYLE WORKING TEST
        e.target.style.display = 'none'
    });

});
