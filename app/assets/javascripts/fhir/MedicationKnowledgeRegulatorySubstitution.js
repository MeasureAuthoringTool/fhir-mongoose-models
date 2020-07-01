const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');

const MedicationKnowledgeRegulatorySubstitutionSchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  allowed: PrimitiveBooleanSchema,
  typeName: { type: String, default: 'MedicationKnowledgeRegulatorySubstitution' },
  _type: { type: String, default: 'FHIR::MedicationKnowledgeRegulatorySubstitution' },
});

class MedicationKnowledgeRegulatorySubstitution extends mongoose.Document {
  constructor(object) {
    super(object, MedicationKnowledgeRegulatorySubstitutionSchema);
    this.typeName = 'MedicationKnowledgeRegulatorySubstitution';
    this._type = 'FHIR::MedicationKnowledgeRegulatorySubstitution';
  }
}

module.exports.MedicationKnowledgeRegulatorySubstitutionSchema = MedicationKnowledgeRegulatorySubstitutionSchema;
module.exports.MedicationKnowledgeRegulatorySubstitution = MedicationKnowledgeRegulatorySubstitution;
