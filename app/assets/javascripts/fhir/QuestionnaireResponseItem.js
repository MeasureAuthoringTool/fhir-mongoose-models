const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { QuestionnaireResponseItemAnswerSchema } = require('./allSchemaHeaders.js');
const { QuestionnaireResponseItemSchema } = require('./allSchemaHeaders.js');

QuestionnaireResponseItemSchema.add(BackboneElementSchema);
QuestionnaireResponseItemSchema.remove('id');
QuestionnaireResponseItemSchema.add({
  linkId: PrimitiveStringSchema,
  definition: PrimitiveUriSchema,
  text: PrimitiveStringSchema,
  answer: [QuestionnaireResponseItemAnswerSchema],
  item: [QuestionnaireResponseItemSchema],
});

module.exports.QuestionnaireResponseItemSchema = QuestionnaireResponseItemSchema;
