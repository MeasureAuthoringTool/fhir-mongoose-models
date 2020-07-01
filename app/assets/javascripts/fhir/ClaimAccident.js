const mongoose = require('mongoose/browser');
const { AddressSchema } = require('./Address');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveDateSchema } = require('./PrimitiveDate');
const { ReferenceSchema } = require('./Reference');

const ClaimAccidentSchema = BackboneElementSchemaFunction({
  date: PrimitiveDateSchema,
  type: CodeableConceptSchema,
  locationAddress: AddressSchema,
  locationReference: ReferenceSchema,
  typeName: { type: String, default: 'ClaimAccident' },
  _type: { type: String, default: 'FHIR::ClaimAccident' },
});

class ClaimAccident extends mongoose.Document {
  constructor(object) {
    super(object, ClaimAccidentSchema);
    this.typeName = 'ClaimAccident';
    this._type = 'FHIR::ClaimAccident';
  }
}

module.exports.ClaimAccidentSchema = ClaimAccidentSchema;
module.exports.ClaimAccident = ClaimAccident;
