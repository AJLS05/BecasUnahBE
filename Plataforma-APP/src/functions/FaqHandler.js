const faqService = require('../services/faqService');

const headersACL ={
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
}

module.exports.faq = async (event) => {

    try {
        const faq = await faqService.getFaq();
        const content = faq.Faq
        return {
            statusCode: 200,
            headers: headersACL,
            body: JSON.stringify(content), 
        };
    } catch (error) {
        return {
            statusCode: 401,
            headers: headersACL,
            body: JSON.stringify({ message: error.message }), 
        };
    }
};
