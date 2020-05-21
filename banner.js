$('#close').click(function() {
    $(this).parent('#shadowbox').hide('#shadowbox,#banner');
    $('#shadowbox,banner').hide('#shadowbox,#banner');
            //Function after window is closed 
            yourfunction(); 
});

//Your Function
function yourfunction() {
        alert('close');
}


$('#click').click(function() {
     $('#shadowbox, #banner').show();   
});

$('#close').click(function() {
    alert('Button was clicked');
    .hide('');
    
})