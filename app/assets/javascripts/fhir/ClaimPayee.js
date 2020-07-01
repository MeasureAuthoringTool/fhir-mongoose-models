const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');

const ClaimPayeeSchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  party: ReferenceSchema,
  typeName: { type: String, default: 'ClaimPayee' },
  _type: { type: String, default: 'FHIR::ClaimPayee' },
});

class ClaimPayee extends mongoose.Document {
  constructor(object) {
    super(object, ClaimPayeeSchema);
    this.typeName = 'ClaimPayee';
    this._type = 'FHIR::ClaimPayee';
  }
}

module.exports.ClaimPayeeSchema = ClaimPayeeSchema;
module.exports.ClaimPayee = ClaimPayee;
