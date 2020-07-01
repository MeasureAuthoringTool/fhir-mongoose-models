const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { ReferenceSchema } = require('./Reference');

const MedicationDispenseSubstitutionSchema = BackboneElementSchemaFunction({
  wasSubstituted: PrimitiveBooleanSchema,
  type: CodeableConceptSchema,
  reason: [CodeableConceptSchema],
  responsibleParty: [ReferenceSchema],
  typeName: { type: String, default: 'MedicationDispenseSubstitution' },
  _type: { type: String, default: 'FHIR::MedicationDispenseSubstitution' },
});

class MedicationDispenseSubstitution extends mongoose.Document {
  constructor(object) {
    super(object, MedicationDispenseSubstitutionSchema);
    this.typeName = 'MedicationDispenseSubstitution';
    this._type = 'FHIR::MedicationDispenseSubstitution';
  }
}

module.exports.MedicationDispenseSubstitutionSchema = MedicationDispenseSubstitutionSchema;
module.exports.MedicationDispenseSubstitution = MedicationDispenseSubstitution;
