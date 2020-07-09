const { ElementSchema } = require('./Element');
const { MessageSignificanceCategorySchema } = require('./allSchemaHeaders.js');

MessageSignificanceCategorySchema.add(ElementSchema);
MessageSignificanceCategorySchema.remove('id');
MessageSignificanceCategorySchema.add({
  value: String,
});

module.exports.MessageSignificanceCategorySchema = MessageSignificanceCategorySchema;
