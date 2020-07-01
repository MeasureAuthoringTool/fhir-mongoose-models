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

const ContractTermOfferAnswerSchema = BackboneElementSchemaFunction({
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
  typeName: { type: String, default: 'ContractTermOfferAnswer' },
  _type: { type: String, default: 'FHIR::ContractTermOfferAnswer' },
});

class ContractTermOfferAnswer extends mongoose.Document {
  constructor(object) {
    super(object, ContractTermOfferAnswerSchema);
    this.typeName = 'ContractTermOfferAnswer';
    this._type = 'FHIR::ContractTermOfferAnswer';
  }
}

module.exports.ContractTermOfferAnswerSchema = ContractTermOfferAnswerSchema;
module.exports.ContractTermOfferAnswer = ContractTermOfferAnswer;
