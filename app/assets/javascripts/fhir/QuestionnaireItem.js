const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./allSchemaHeaders.js');
const { EnableWhenBehaviorSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { QuestionnaireItemAnswerOptionSchema } = require('./allSchemaHeaders.js');
const { QuestionnaireItemEnableWhenSchema } = require('./allSchemaHeaders.js');
const { QuestionnaireItemInitialSchema } = require('./allSchemaHeaders.js');
const { QuestionnaireItemTypeSchema } = require('./allSchemaHeaders.js');
const { QuestionnaireItemSchema } = require('./allSchemaHeaders.js');

QuestionnaireItemSchema.add(BackboneElementSchema);
QuestionnaireItemSchema.remove('id');
QuestionnaireItemSchema.add({
  linkId: PrimitiveStringSchema,
  definition: PrimitiveUriSchema,
  code: [CodingSchema],
  prefix: PrimitiveStringSchema,
  text: PrimitiveStringSchema,
  type: QuestionnaireItemTypeSchema,
  enableWhen: [QuestionnaireItemEnableWhenSchema],
  enableBehavior: EnableWhenBehaviorSchema,
  required: PrimitiveBooleanSchema,
  repeats: PrimitiveBooleanSchema,
  readOnly: PrimitiveBooleanSchema,
  maxLength: PrimitiveIntegerSchema,
  answerValueSet: PrimitiveCanonicalSchema,
  answerOption: [QuestionnaireItemAnswerOptionSchema],
  initial: [QuestionnaireItemInitialSchema],
  item: [QuestionnaireItemSchema],
});

module.exports.QuestionnaireItemSchema = QuestionnaireItemSchema;
