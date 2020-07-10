const { ElementSchema } = require('./Element');
const { QuestionnaireItemOperatorSchema } = require('./allSchemaHeaders.js');

QuestionnaireItemOperatorSchema.add(ElementSchema);
QuestionnaireItemOperatorSchema.remove('id');
QuestionnaireItemOperatorSchema.add({
  value: String,
});

module.exports.QuestionnaireItemOperatorSchema = QuestionnaireItemOperatorSchema;
