const Faq = require('../models/Faq');

class FaqRepository {
  async getAllFAQ() {
    return await Faq.findAll({ order: [['pregunta', 'ASC']] });
  }
}

module.exports = new FaqRepository();
