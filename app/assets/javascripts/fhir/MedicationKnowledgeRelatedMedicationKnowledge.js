const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');

const MedicationKnowledgeRelatedMedicationKnowledgeSchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  reference: [ReferenceSchema],
  typeName: { type: String, default: 'MedicationKnowledgeRelatedMedicationKnowledge' },
  _type: { type: String, default: 'FHIR::MedicationKnowledgeRelatedMedicationKnowledge' },
});

class MedicationKnowledgeRelatedMedicationKnowledge extends mongoose.Document {
  constructor(object) {
    super(object, MedicationKnowledgeRelatedMedicationKnowledgeSchema);
    this.typeName = 'MedicationKnowledgeRelatedMedicationKnowledge';
    this._type = 'FHIR::MedicationKnowledgeRelatedMedicationKnowledge';
  }
}

module.exports.MedicationKnowledgeRelatedMedicationKnowledgeSchema = MedicationKnowledgeRelatedMedicationKnowledgeSchema;
module.exports.MedicationKnowledgeRelatedMedicationKnowledge = MedicationKnowledgeRelatedMedicationKnowledge;
