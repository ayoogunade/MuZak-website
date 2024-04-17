// Function to update recent album reviews
function updateRecentAlbumReviews() {
    // Fetch album log data from albumlog.html
    fetch('albumlog.html')
        .then(response => response.text())
        .then(html => {
            // Parse album review links from HTML content
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const ol = doc.querySelector('ol');
            const links = ol.querySelectorAll('a');
            
            // Extract the most recent 4 album reviews
            const recentAlbums = Array.from(links)
                .slice(0, 4)
                .map(link => {
                    const title = link.textContent;
                    const href = link.href;
                    return `
                        <div class="col-6 col-12-medium">
                            <section class="box">
                                <h3>${title}</h3>
                                <p>Some description about the album goes here...</p>
                                <ul class="actions special">
                                    <li><a href="${href}" class="button">Read Review</a></li>
                                </ul>
                            </section>
                        </div>`;
                })
                .join('');
            
            // Insert the recent album reviews into the page
            const recentAlbumReviews = document.getElementById('recentAlbumReviews');
            recentAlbumReviews.innerHTML = `
                <header class="major">
                    <h2>Recent Album Reviews</h2>
                </header>
                <div class="row">${recentAlbums}</div>`;
        })
        .catch(error => {
            console.error('Error fetching album log data:', error);
        });
}

// Call the function initially to populate recent album reviews
updateRecentAlbumReviews();
