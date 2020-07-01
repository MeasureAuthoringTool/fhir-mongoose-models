const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');

const MedicationRequestSubstitutionSchema = BackboneElementSchemaFunction({
  allowedBoolean: PrimitiveBooleanSchema,
  allowedCodeableConcept: CodeableConceptSchema,
  reason: CodeableConceptSchema,
  typeName: { type: String, default: 'MedicationRequestSubstitution' },
  _type: { type: String, default: 'FHIR::MedicationRequestSubstitution' },
});

class MedicationRequestSubstitution extends mongoose.Document {
  constructor(object) {
    super(object, MedicationRequestSubstitutionSchema);
    this.typeName = 'MedicationRequestSubstitution';
    this._type = 'FHIR::MedicationRequestSubstitution';
  }
}

module.exports.MedicationRequestSubstitutionSchema = MedicationRequestSubstitutionSchema;
module.exports.MedicationRequestSubstitution = MedicationRequestSubstitution;
