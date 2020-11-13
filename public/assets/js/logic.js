$(document).ready(function() {
    let user = {
        email: "testemail@gmail.com",
        password: "test"
    };

    let post = {
        title: "test title",
        body: "This is a test body, BOYO. It's significantly longer than the title, hence the length of this entry.",
        UserId: 1,
        tag: "Political"
    }

    $("#create-user").on("click", function() {
        $.post("/api/users", user);        
    });

    $("#create-post").on("click", function() {
        $.post("/api/posts", post);        
    });

});