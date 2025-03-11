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