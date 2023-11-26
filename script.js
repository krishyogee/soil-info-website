function showMore(output) {
    // Toggle the display of the 'View More' content
    const moreInfo = event.target.nextElementSibling;
    moreInfo.style.display = (moreInfo.style.display === 'none' || moreInfo.style.display === '') ? 'block' : 'none';
}
