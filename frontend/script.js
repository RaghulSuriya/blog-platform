const apiUrl = "http://localhost:8080/api/posts";

async function fetchPosts(){

    const response = await fetch(apiUrl);

    const posts = await response.json();

    const blogList = document.getElementById("blog-list");

    blogList.innerHTML = "";

    posts.reverse().forEach(post => {

        blogList.innerHTML += `

            <div class="blog-card">

                <h2>${post.title}</h2>

                <small>By ${post.author}</small>

                <p>${post.content}</p>

            </div>

        `;
    });
}

async function addPost(){

    const post = {

        title: document.getElementById("title").value,

        author: document.getElementById("author").value,

        content: document.getElementById("content").value
    };

    await fetch(apiUrl,{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify(post)
    });

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("content").value = "";

    fetchPosts();
}

fetchPosts();