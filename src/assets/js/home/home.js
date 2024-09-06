document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const documents = document.querySelectorAll('.document-item');
    documents.forEach(doc => {
        const title = doc.querySelector('.title').textContent.toLowerCase();
        if (title.includes(query)) {
            doc.style.display = 'block';
        } else {
            doc.style.display = 'none';
        }
    });
});
