fetch('https://gorest.co.in/public-api/posts?page=1').then(response => response.json()).then(data => {
    const articlesList = document.getElementById('articles-list');
    data.data.forEach(article => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = `post.html?id=${article.id}`;
        link.textContent = article.title;
        li.appendChild(link);
        articlesList.appendChild(li);
    });

    const pagination = document.getElementById('pagination');
    const currentPage = data.meta.pagination.page;
    const totalPages = data.meta.pagination.pages;
    if (totalPages > 1) {
        for (let i = 1; i <= totalPages; i++) {
            const link = document.createElement('a');
            link.href = i === 1 ? 'index.html' : `index.html?page=${i}`;
            link.textContent = i;
            if (i === currentPage) {
                link.classList.add('active');
            }
            pagination.appendChild(link);
        }
    }
});