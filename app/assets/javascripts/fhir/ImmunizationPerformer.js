const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');

const ImmunizationPerformerSchema = BackboneElementSchemaFunction({
  function: CodeableConceptSchema,
  actor: ReferenceSchema,
  typeName: { type: String, default: 'ImmunizationPerformer' },
  _type: { type: String, default: 'FHIR::ImmunizationPerformer' },
});

class ImmunizationPerformer extends mongoose.Document {
  constructor(object) {
    super(object, ImmunizationPerformerSchema);
    this.typeName = 'ImmunizationPerformer';
    this._type = 'FHIR::ImmunizationPerformer';
  }
}

module.exports.ImmunizationPerformerSchema = ImmunizationPerformerSchema;
module.exports.ImmunizationPerformer = ImmunizationPerformer;
