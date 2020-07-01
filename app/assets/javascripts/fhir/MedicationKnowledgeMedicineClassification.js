const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');

const MedicationKnowledgeMedicineClassificationSchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  classification: [CodeableConceptSchema],
  typeName: { type: String, default: 'MedicationKnowledgeMedicineClassification' },
  _type: { type: String, default: 'FHIR::MedicationKnowledgeMedicineClassification' },
});

class MedicationKnowledgeMedicineClassification extends mongoose.Document {
  constructor(object) {
    super(object, MedicationKnowledgeMedicineClassificationSchema);
    this.typeName = 'MedicationKnowledgeMedicineClassification';
    this._type = 'FHIR::MedicationKnowledgeMedicineClassification';
  }
}

module.exports.MedicationKnowledgeMedicineClassificationSchema = MedicationKnowledgeMedicineClassificationSchema;
module.exports.MedicationKnowledgeMedicineClassification = MedicationKnowledgeMedicineClassification;
