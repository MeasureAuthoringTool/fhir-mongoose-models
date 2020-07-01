const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MoneySchema } = require('./Money');

const ClaimResponseTotalSchema = BackboneElementSchemaFunction({
  category: CodeableConceptSchema,
  amount: MoneySchema,
  typeName: { type: String, default: 'ClaimResponseTotal' },
  _type: { type: String, default: 'FHIR::ClaimResponseTotal' },
});

class ClaimResponseTotal extends mongoose.Document {
  constructor(object) {
    super(object, ClaimResponseTotalSchema);
    this.typeName = 'ClaimResponseTotal';
    this._type = 'FHIR::ClaimResponseTotal';
  }
}

module.exports.ClaimResponseTotalSchema = ClaimResponseTotalSchema;
module.exports.ClaimResponseTotal = ClaimResponseTotal;
