// src/services/faqService.js
const faqRepository = require('../repositories/faqRepository');

class FaqService {
    // Recuperar FAQs de la base de datos

    async getFaq() {
        const faqs = await faqRepository.getAllFAQ();
        if (!faqs || faqs.length === 0) {
            throw new Error('No FAQs found');
        }

        return { faqs };
    }
}

module.exports = new FaqService();
