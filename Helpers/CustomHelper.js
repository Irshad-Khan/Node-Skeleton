function getActiveClass(currentUrl, urls) {
    if (urls.includes(currentUrl)) {
        return 'active';
    }
    return '';
}

function formatBirthDate(date) {
    const options = { day: 'numeric', month: 'long' };
    const formattedDate = new Date(date).toLocaleDateString('en-US', options);
    return formattedDate.replace(/\d+(st|nd|rd|th)/, '$& ');
}

module.exports = {
    getActiveClass,
    formatBirthDate
};