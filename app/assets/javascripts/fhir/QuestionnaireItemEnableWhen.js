const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveTimeSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { QuestionnaireItemOperatorSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { QuestionnaireItemEnableWhenSchema } = require('./allSchemaHeaders.js');

QuestionnaireItemEnableWhenSchema.add(BackboneElementSchema);
QuestionnaireItemEnableWhenSchema.remove('id');
QuestionnaireItemEnableWhenSchema.add({
  question: PrimitiveStringSchema,
  operator: QuestionnaireItemOperatorSchema,
  answerBoolean: PrimitiveBooleanSchema,
  answerDecimal: PrimitiveDecimalSchema,
  answerInteger: PrimitiveIntegerSchema,
  answerDate: PrimitiveDateSchema,
  answerDateTime: PrimitiveDateTimeSchema,
  answerTime: PrimitiveTimeSchema,
  answerString: PrimitiveStringSchema,
  answerCoding: CodingSchema,
  answerQuantity: QuantitySchema,
  answerReference: ReferenceSchema,
});

module.exports.QuestionnaireItemEnableWhenSchema = QuestionnaireItemEnableWhenSchema;
