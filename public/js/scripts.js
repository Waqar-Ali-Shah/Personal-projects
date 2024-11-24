// Function to display alert on button click
const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!");
};

// Function to handle form submission
const submitForm = () => {
    let formData = {
        first_name: $('#first_name').val(),
        last_name: $('#last_name').val(),
        password: $('#password').val(),
        email: $('#email').val(),
    };
    console.log("Form Data Submitted: ", formData);
};

// Array of card data
const cardList = [
    {
        title: "Scene-2",
        image: "images/img-2.webp",
        link: "About Scene-2",
        description: "Demo description about kitten 2",
    },
    {
        title: "Scene-3",
        image: "images/img-3.jpg",
        link: "About Scene-3",
        description: "Demo description about kitten 3",
    },
];

// Function to add cards dynamically
const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = `
        <div class="col s4 center-align">
            <div class="card medium">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="${item.image}">
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">
                        ${item.title}<i class="material-icons right">more_vert</i>
                    </span>
                    <p><a href="#">${item.link}</a></p>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">
                        ${item.title}<i class="material-icons right">close</i>
                    </span>
                    <p class="card-text">${item.description}</p>
                </div>
            </div>
        </div>`;
        $("#card-section").append(itemToAppend);
    });
};
$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
    submitForm();
    })
    addCards(cardList);
    $('.modal').modal();
    });

