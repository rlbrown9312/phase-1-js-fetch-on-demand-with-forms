const init = () => {
    const form = document.querySelector("form")
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector('input#searchByID');
        
    fetch(`http://localhost:3000/movies/${input.value}`)
        .then(res => res.json())
        .then(data => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');

        title.innerText = data.title;
        summary.innerText = data.summary
        })
    })};
      
document.addEventListener('DOMContentLoaded', init);





        // CODE BELOW EXECUTED with input search by ID  to obtain target and value
    // form.addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     const input = document.querySelector('input#searchByID');
      
    //     console.log(input.value);

            // TESTING CODE BELOW
        // fetch('http://localhost:3000/movies')
        // .then(res => res.json())
        // .then(data => console.log(data))
    
        //CODE BELOW EXECUTED with e.target to obtain target and value
    // form.addEventListener("submit", (e) => {
    //    e.preventDefault();
    //    console.log(e)
    //     const target = e.target
    //     console.log(target.children[1].value)
    // })
  


