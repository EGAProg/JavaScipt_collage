const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get('id');

fetch(`https://gorest.co.in/public-api/posts/${articleId}`).then(response => response.json()).then(data => {
    const articleTitle = document.getElementById('article-title');
    const articleContent = document.getElementById('article-content');
    articleTitle.textContent = data.data.title;
    articleContent.textContent = data.data.body;
});

fetch(`https://gorest.co.in/public-api/comments?post_id=${articleId}`).then(response => response.json()).then(data => {
    const commentsList = document.getElementById('comments-list');
    data.data.forEach(comment => {
        const li = document.createElement('li');
        li.textContent = `${comment.name}: ${comment.body}`;
        commentsList.appendChild(li);
    });
});