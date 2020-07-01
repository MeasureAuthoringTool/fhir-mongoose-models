const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const ClaimResponseInsuranceSchema = BackboneElementSchemaFunction({
  sequence: PrimitivePositiveIntSchema,
  focal: PrimitiveBooleanSchema,
  coverage: ReferenceSchema,
  businessArrangement: PrimitiveStringSchema,
  claimResponse: ReferenceSchema,
  typeName: { type: String, default: 'ClaimResponseInsurance' },
  _type: { type: String, default: 'FHIR::ClaimResponseInsurance' },
});

class ClaimResponseInsurance extends mongoose.Document {
  constructor(object) {
    super(object, ClaimResponseInsuranceSchema);
    this.typeName = 'ClaimResponseInsurance';
    this._type = 'FHIR::ClaimResponseInsurance';
  }
}

module.exports.ClaimResponseInsuranceSchema = ClaimResponseInsuranceSchema;
module.exports.ClaimResponseInsurance = ClaimResponseInsurance;
