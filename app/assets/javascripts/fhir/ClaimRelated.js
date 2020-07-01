const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');

const ClaimRelatedSchema = BackboneElementSchemaFunction({
  claim: ReferenceSchema,
  relationship: CodeableConceptSchema,
  reference: IdentifierSchema,
  typeName: { type: String, default: 'ClaimRelated' },
  _type: { type: String, default: 'FHIR::ClaimRelated' },
});

class ClaimRelated extends mongoose.Document {
  constructor(object) {
    super(object, ClaimRelatedSchema);
    this.typeName = 'ClaimRelated';
    this._type = 'FHIR::ClaimRelated';
  }
}

module.exports.ClaimRelatedSchema = ClaimRelatedSchema;
module.exports.ClaimRelated = ClaimRelated;
