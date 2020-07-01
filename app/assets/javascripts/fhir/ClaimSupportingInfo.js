const mongoose = require('mongoose/browser');
const { AttachmentSchema } = require('./Attachment');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PeriodSchema } = require('./Period');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveDateSchema } = require('./PrimitiveDate');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { QuantitySchema } = require('./Quantity');
const { ReferenceSchema } = require('./Reference');

const ClaimSupportingInfoSchema = BackboneElementSchemaFunction({
  sequence: PrimitivePositiveIntSchema,
  category: CodeableConceptSchema,
  code: CodeableConceptSchema,
  timingDate: PrimitiveDateSchema,
  timingPeriod: PeriodSchema,
  valueBoolean: PrimitiveBooleanSchema,
  valueString: PrimitiveStringSchema,
  valueQuantity: QuantitySchema,
  valueAttachment: AttachmentSchema,
  valueReference: ReferenceSchema,
  reason: CodeableConceptSchema,
  typeName: { type: String, default: 'ClaimSupportingInfo' },
  _type: { type: String, default: 'FHIR::ClaimSupportingInfo' },
});

class ClaimSupportingInfo extends mongoose.Document {
  constructor(object) {
    super(object, ClaimSupportingInfoSchema);
    this.typeName = 'ClaimSupportingInfo';
    this._type = 'FHIR::ClaimSupportingInfo';
  }
}

module.exports.ClaimSupportingInfoSchema = ClaimSupportingInfoSchema;
module.exports.ClaimSupportingInfo = ClaimSupportingInfo;
