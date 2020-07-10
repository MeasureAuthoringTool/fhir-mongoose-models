const { ElementSchema } = require('./Element');
const { QuestionnaireItemTypeSchema } = require('./allSchemaHeaders.js');

QuestionnaireItemTypeSchema.add(ElementSchema);
QuestionnaireItemTypeSchema.remove('id');
QuestionnaireItemTypeSchema.add({
  value: String,
});

module.exports.QuestionnaireItemTypeSchema = QuestionnaireItemTypeSchema;
