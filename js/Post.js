export default {
    myPost(){
        let getPost = document.querySelector('#post');
        let posts = {};
        let id = 0;

        getPost.addEventListener('submit', (e) => {
            id += 1;
            e.preventDefault();
            let data = (Object.fromEntries(new FormData(e.target)));
            posts = data;
            console.log(posts);
            document.querySelector('.ps').insertAdjacentHTML('afterend', `<br>
            <div class="container p-4 bg-dark rounded card">
            
            <div class="card" style="width: 20rem;">
            <div class="card-body">
                <h5 class="card-title"><strong>${posts.user}</strong> ID: <span class="badge bg-success">${id}</span></h5>
                <p class="card-text">${posts.message}</p>
            </div>
            </div>
            </div>
            
            `);
        });

    }
}