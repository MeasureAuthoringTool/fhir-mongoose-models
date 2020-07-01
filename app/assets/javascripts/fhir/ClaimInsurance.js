const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const ClaimInsuranceSchema = BackboneElementSchemaFunction({
  sequence: PrimitivePositiveIntSchema,
  focal: PrimitiveBooleanSchema,
  identifier: IdentifierSchema,
  coverage: ReferenceSchema,
  businessArrangement: PrimitiveStringSchema,
  preAuthRef: [PrimitiveStringSchema],
  claimResponse: ReferenceSchema,
  typeName: { type: String, default: 'ClaimInsurance' },
  _type: { type: String, default: 'FHIR::ClaimInsurance' },
});

class ClaimInsurance extends mongoose.Document {
  constructor(object) {
    super(object, ClaimInsuranceSchema);
    this.typeName = 'ClaimInsurance';
    this._type = 'FHIR::ClaimInsurance';
  }
}

module.exports.ClaimInsuranceSchema = ClaimInsuranceSchema;
module.exports.ClaimInsurance = ClaimInsurance;
