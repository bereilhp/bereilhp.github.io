var after = "";

function fetchMemes() {

    if (document.getElementById("memes")) {
        document.getElementById("memes").remove();
    }

    let memeDiv = document.createElement("div");
    memeDiv.id = "memes";

    fetch(`https://www.reddit.com/r/memes.json?after=${after}`)
        .then((response) => response.json())
        .then((body) => {
            after = body.data.after;

            for (let index = 0; index < 1; index++) {
                if (body.data.children[index].data.post_hint === "image") {
                    let div = document.createElement("div");
                    let image = document.createElement("img");
                    image.src = body.data.children[index].data.url_overridden_by_dest;
                    div.appendChild(image);
                    memeDiv.appendChild(div);
                }
            }
            document.body.appendChild(memeDiv);
        })
        .catch((e) => {
            console.log(e);
        });
}
