const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');

const MedicationAdministrationPerformerSchema = BackboneElementSchemaFunction({
  function: CodeableConceptSchema,
  actor: ReferenceSchema,
  typeName: { type: String, default: 'MedicationAdministrationPerformer' },
  _type: { type: String, default: 'FHIR::MedicationAdministrationPerformer' },
});

class MedicationAdministrationPerformer extends mongoose.Document {
  constructor(object) {
    super(object, MedicationAdministrationPerformerSchema);
    this.typeName = 'MedicationAdministrationPerformer';
    this._type = 'FHIR::MedicationAdministrationPerformer';
  }
}

module.exports.MedicationAdministrationPerformerSchema = MedicationAdministrationPerformerSchema;
module.exports.MedicationAdministrationPerformer = MedicationAdministrationPerformer;
