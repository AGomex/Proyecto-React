import React, { useEffect, useState } from 'react';

function BlogEntryPage() {
    const [entry, setEntry] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const blogId = params.get('id');

        if (blogId) {
            const storedEntry = JSON.parse(localStorage.getItem(blogId));
            if (storedEntry) {
                setEntry(storedEntry);
            } else {
                setEntry({ error: 'Blog entry not found.' });
            }
        } else {
            setEntry({ error: 'Invalid blog entry.' });
        }
    }, []);

    return (
        <main className="main">
            <section id="blogEntry">
                {entry ? (
                    <>
                        {entry.error ? (
                            <p>{entry.error}</p>
                        ) : (
                            <>
                                <h2>{entry.title}</h2>
                                <div className="author-category">
                                    <p>Author: {entry.author}</p>
                                    <p className="separator">|</p>
                                    <p>Category: {entry.category}</p>
                                </div>
                                <div className="image-container">
                                    <img src={entry.image} alt="Blog Image" />
                                </div>
                                <p>{entry.content}</p>
                            </>
                        )}
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </section>
        </main>
    );
}

export default BlogEntryPage;
