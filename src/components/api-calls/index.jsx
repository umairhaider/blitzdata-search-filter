import axios from 'axios';

export const getBlitzData = async (conditions) => {
    if (conditions === "") {
        const response = await axios.get(`https://seeblick.localpoint.ch/api/list/cms_articles.json`);
        return response.data;
    }
    const response = await axios.get(`https://seeblick.localpoint.ch/api/list/cms_articles.json?conditions=[${conditions}]`);
    return response.data;
}