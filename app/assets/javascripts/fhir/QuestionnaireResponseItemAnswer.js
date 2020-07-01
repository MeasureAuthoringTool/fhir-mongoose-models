const mongoose = require('mongoose/browser');
const { AttachmentSchema } = require('./Attachment');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveDateSchema } = require('./PrimitiveDate');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveTimeSchema } = require('./PrimitiveTime');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { QuantitySchema } = require('./Quantity');
const { QuestionnaireResponseItemSchema } = require('./QuestionnaireResponseItem');
const { ReferenceSchema } = require('./Reference');

const QuestionnaireResponseItemAnswerSchema = BackboneElementSchemaFunction({
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
  item: [QuestionnaireResponseItemSchema],
  typeName: { type: String, default: 'QuestionnaireResponseItemAnswer' },
  _type: { type: String, default: 'FHIR::QuestionnaireResponseItemAnswer' },
});

class QuestionnaireResponseItemAnswer extends mongoose.Document {
  constructor(object) {
    super(object, QuestionnaireResponseItemAnswerSchema);
    this.typeName = 'QuestionnaireResponseItemAnswer';
    this._type = 'FHIR::QuestionnaireResponseItemAnswer';
  }
}

module.exports.QuestionnaireResponseItemAnswerSchema = QuestionnaireResponseItemAnswerSchema;
module.exports.QuestionnaireResponseItemAnswer = QuestionnaireResponseItemAnswer;
