export default {
    myPost(){
        let getPost = document.querySelector('#post');
        let posts = {};

        getPost.addEventListener('submit', (e) => {
            e.preventDefault();
            let data = (Object.fromEntries(new FormData(e.target)));
            posts = data;
            console.log(posts);
            document.querySelector('.ps').insertAdjacentHTML('afterend', `<br>
            <div class="container p-5 bg-dark rounded">
            
            <div class="card" style="width: 20rem;">
            <div class="card-body">
                <h5 class="card-title">${posts.user}</h5>
                <p class="card-text">${posts.message}</p>
            </div>
            </div>
            </div>
            
            `);
        });

    }
}