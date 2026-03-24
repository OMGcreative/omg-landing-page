export const validate = (url) => {
    // Remove the 'https://' requirement
    const regex = /^(?:https?:\/\/)?(?:www\.)?([a-z0-9\-]+\.[a-z]{2,})(?:[\/?])?(.*)?$/i;
    return regex.test(url);
};

// Other existing content of the CTA.tsx file...
