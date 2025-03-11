function ClearForm() {
    // document.getElementById("fullname").value = '';
    // document.getElementById("email").value = '';
    // document.getElementById("inquiry").value = '';

    document.getElementById('contactForm').reset();
}

function hidePTags() {
    let pTags = document.getElementsByTagName('p');
    for(let tag of pTags) { // for (let tag in pTags) {}
        tag.style.visibility = 'hidden'; // removes element, leaves space
        //tag.style.display = 'none'; // removes element and space
    };
}

$('#jQueryBtn').click(function() {
    $('p').hide(); //behavior similar with tag.style.display = 'none'; which removes element and space
})

function printContent(){
    let pTags = document.getElementsByClassName('WeirdColor');
    for(let tag of pTags) {
        let words = tag.textContent; // read the content only
        //let words = tag.innerHTML; // read the content with tags inside, like <br/>
        alert(words);
    }
}

// function openContactUs(){
//     window.location.href="contact_us.html";
// }

$('#btnOpenContactUs').click(function(){
    window.location.href = "contact_us.html"
})

$(function() {
    var pages = ['index','about', 'contact'];
    var pathName = window.location.pathname;

    $('.nav-link').each(function(item){
        if(pathName.includes(pages[item])) {
            $(this).addClass('active'); // this represent the current nav-link which enters in if statement
            $(this).attr('aria-current', 'page');
        }
    })
}
);