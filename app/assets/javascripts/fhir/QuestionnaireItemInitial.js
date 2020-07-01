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
const { ReferenceSchema } = require('./Reference');

const QuestionnaireItemInitialSchema = BackboneElementSchemaFunction({
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
  typeName: { type: String, default: 'QuestionnaireItemInitial' },
  _type: { type: String, default: 'FHIR::QuestionnaireItemInitial' },
});

class QuestionnaireItemInitial extends mongoose.Document {
  constructor(object) {
    super(object, QuestionnaireItemInitialSchema);
    this.typeName = 'QuestionnaireItemInitial';
    this._type = 'FHIR::QuestionnaireItemInitial';
  }
}

module.exports.QuestionnaireItemInitialSchema = QuestionnaireItemInitialSchema;
module.exports.QuestionnaireItemInitial = QuestionnaireItemInitial;
