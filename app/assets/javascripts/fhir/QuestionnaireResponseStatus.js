const { ElementSchema } = require('./Element');
const { QuestionnaireResponseStatusSchema } = require('./allSchemaHeaders.js');

QuestionnaireResponseStatusSchema.add(ElementSchema);
QuestionnaireResponseStatusSchema.remove('id');
QuestionnaireResponseStatusSchema.add({
  value: String,
});

module.exports.QuestionnaireResponseStatusSchema = QuestionnaireResponseStatusSchema;
