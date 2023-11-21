document.addEventListener("DOMContentLoaded", function () {
    let  memeform = document.getElementById("meme-form");
    let listGallery = document.querySelector(".gallery");
    memeform.addEventListener("submit", function (event) {
        event.preventDefault();
        let memeList = document.createElement("li");
        memeList.classList.add("meme-img");

        let topText = document.getElementById("text-top");
        let urlInput = document.getElementById("uploaded-img").value,
            src = urlInput,
            img = document.createElement("img");
        img.src = src;

        let topTextDiv = document.createElement('div');
        topTextDiv.classList.add("text", "top");
        topTextDiv.innerText = document.getElementById("text-top").value;

        let bottomTextDiv = document.createElement('div');
        bottomTextDiv.classList.add("text", "bottom");
        bottomTextDiv.innerText = document.getElementById("text-bottom").value;

        let removeDiv = document.createElement('div');
        removeDiv.classList.add("grey-cross");
        removeDiv.innerText = "X";
        removeDiv.style.color = "grey";

        listGallery.appendChild(memeList);
        memeList.appendChild(img);
        memeList.appendChild(topTextDiv);
        memeList.appendChild(bottomTextDiv);
        memeList.appendChild(removeDiv);

        memeform.reset();
    });
    function remove(event) {
        event.target.parentNode.remove();
    }


    listGallery.addEventListener('click', remove, false);
});