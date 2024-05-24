var btn = document.querySelector("button");

const jokes = {
    url: "https://official-joke-api.appspot.com/random_joke",
    getData: function(){
        fetch(this.url)
        .then((response)=>response.json())
        .then((data)=>this.displayData(data));
    },
    displayData: (data)=>{
        const {setup, punchline} = data;

        document.querySelector("h2").innerHTML = setup;
        document.getElementById("answer").innerHTML = punchline;
    }
}

btn.addEventListener('click', ()=>{
    return jokes.getData();
})