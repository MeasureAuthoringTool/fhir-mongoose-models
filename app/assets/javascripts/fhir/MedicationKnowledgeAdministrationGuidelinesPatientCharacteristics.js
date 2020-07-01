const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsSchema = BackboneElementSchemaFunction({
  characteristicCodeableConcept: CodeableConceptSchema,
  characteristicSimpleQuantity: SimpleQuantitySchema,
  value: [PrimitiveStringSchema],
  typeName: { type: String, default: 'MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics' },
  _type: { type: String, default: 'FHIR::MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics' },
});

class MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics extends mongoose.Document {
  constructor(object) {
    super(object, MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsSchema);
    this.typeName = 'MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics';
    this._type = 'FHIR::MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics';
  }
}

module.exports.MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsSchema = MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsSchema;
module.exports.MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics = MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics;
