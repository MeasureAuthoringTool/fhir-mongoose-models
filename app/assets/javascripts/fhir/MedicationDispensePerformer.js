const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');

const MedicationDispensePerformerSchema = BackboneElementSchemaFunction({
  function: CodeableConceptSchema,
  actor: ReferenceSchema,
  typeName: { type: String, default: 'MedicationDispensePerformer' },
  _type: { type: String, default: 'FHIR::MedicationDispensePerformer' },
});

class MedicationDispensePerformer extends mongoose.Document {
  constructor(object) {
    super(object, MedicationDispensePerformerSchema);
    this.typeName = 'MedicationDispensePerformer';
    this._type = 'FHIR::MedicationDispensePerformer';
  }
}

module.exports.MedicationDispensePerformerSchema = MedicationDispensePerformerSchema;
module.exports.MedicationDispensePerformer = MedicationDispensePerformer;
