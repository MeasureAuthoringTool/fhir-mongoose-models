const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveTimeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { QuestionnaireItemAnswerOptionSchema } = require('./allSchemaHeaders.js');

QuestionnaireItemAnswerOptionSchema.add(BackboneElementSchema);
QuestionnaireItemAnswerOptionSchema.remove('id');
QuestionnaireItemAnswerOptionSchema.add({
  valueInteger: PrimitiveIntegerSchema,
  valueDate: PrimitiveDateSchema,
  valueTime: PrimitiveTimeSchema,
  valueString: PrimitiveStringSchema,
  valueCoding: CodingSchema,
  valueReference: ReferenceSchema,
  initialSelected: PrimitiveBooleanSchema,
});

module.exports.QuestionnaireItemAnswerOptionSchema = QuestionnaireItemAnswerOptionSchema;
