const { AttachmentSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { QuestionnaireItemInitialSchema } = require('./allSchemaHeaders.js');

QuestionnaireItemInitialSchema.add(BackboneElementSchema);
QuestionnaireItemInitialSchema.remove('id');
QuestionnaireItemInitialSchema.add({
  valueBoolean: PrimitiveBooleanSchema,
  valueDecimal: PrimitiveDecimalSchema,
  valueInteger: PrimitiveIntegerSchema,
  valueDate: PrimitiveDateSchema,
  valueDateTime: PrimitiveDateTimeSchema,
  valueTime: PrimitiveTimeSchema,
  valueString: PrimitiveStringSchema,
  valueUri: PrimitiveUriSchema,
  valueAttachment: AttachmentSchema,
  valueCoding: CodingSchema,
  valueQuantity: QuantitySchema,
  valueReference: ReferenceSchema,
});

module.exports.QuestionnaireItemInitialSchema = QuestionnaireItemInitialSchema;
