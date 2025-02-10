//controlador de FAQ
import { getFaq } from '../services/faqService.js';

class FAQController {
    async Faq(req, res) {
        const { Faq } = req.body;

        try {
            const content = await getFaq(Faq);
            return res.status(200).json(content);
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}

export default new FAQController();
