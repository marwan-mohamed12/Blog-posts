let getPosts = async (apiLink) => {
    try {
        let myRequest = await fetch(apiLink);
        return await myRequest.json();
    } catch (rej) {
        return Error(rej);
    }
};

getPosts("https://jsonplaceholder.typicode.com/posts").then((posts) => {
    for (let i = 0; i < 12; i++) {
        // Create Card div
        let card = document.createElement("div");
        card.className = "card";

        // Create Card body
        let cardBody = document.createElement("div"),
            spanCategory = document.createElement("span"),
            spanText = document.createTextNode("Category"),
            title = document.createElement("h4"),
            titleText = document.createTextNode(posts[i].title);

        spanCategory.appendChild(spanText);
        spanCategory.classList = "tag tag-purple";

        title.appendChild(titleText);

        // Body Paragraph
        let body = document.createElement("p"),
            bodyText = document.createTextNode(posts[i].body);

        body.appendChild(bodyText);

        // Create Author Part
        let user = document.createElement("div"),
            userInfo = document.createElement("div"),
            username = document.createElement("h5"),
            usernameText = document.createTextNode("Marwan Mohamed");

        username.appendChild(usernameText);
        userInfo.className = "user-info";
        userInfo.appendChild(username);
        user.className = "user";
        user.appendChild(userInfo);

        cardBody.className = "card-body";
        cardBody.appendChild(spanCategory);
        cardBody.appendChild(title);
        cardBody.appendChild(body);
        cardBody.appendChild(user);

        card.appendChild(cardBody);

        document.querySelector(".container").appendChild(card);
    }
});
