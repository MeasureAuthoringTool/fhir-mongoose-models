const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { MedicationKnowledgeAdministrationGuidelinesSchema } = require('./MedicationKnowledgeAdministrationGuidelines');
const { MedicationKnowledgeCostSchema } = require('./MedicationKnowledgeCost');
const { MedicationKnowledgeDrugCharacteristicSchema } = require('./MedicationKnowledgeDrugCharacteristic');
const { MedicationKnowledgeIngredientSchema } = require('./MedicationKnowledgeIngredient');
const { MedicationKnowledgeKineticsSchema } = require('./MedicationKnowledgeKinetics');
const { MedicationKnowledgeMedicineClassificationSchema } = require('./MedicationKnowledgeMedicineClassification');
const { MedicationKnowledgeMonitoringProgramSchema } = require('./MedicationKnowledgeMonitoringProgram');
const { MedicationKnowledgeMonographSchema } = require('./MedicationKnowledgeMonograph');
const { MedicationKnowledgePackagingSchema } = require('./MedicationKnowledgePackaging');
const { MedicationKnowledgeRegulatorySchema } = require('./MedicationKnowledgeRegulatory');
const { MedicationKnowledgeRelatedMedicationKnowledgeSchema } = require('./MedicationKnowledgeRelatedMedicationKnowledge');
const { MedicationKnowledgeStatusSchema } = require('./MedicationKnowledgeStatus');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const MedicationKnowledgeSchema = DomainResourceSchemaFunction({
  code: CodeableConceptSchema,
  status: MedicationKnowledgeStatusSchema,
  manufacturer: ReferenceSchema,
  doseForm: CodeableConceptSchema,
  amount: SimpleQuantitySchema,
  synonym: [PrimitiveStringSchema],
  relatedMedicationKnowledge: [MedicationKnowledgeRelatedMedicationKnowledgeSchema],
  associatedMedication: [ReferenceSchema],
  productType: [CodeableConceptSchema],
  monograph: [MedicationKnowledgeMonographSchema],
  ingredient: [MedicationKnowledgeIngredientSchema],
  preparationInstruction: PrimitiveMarkdownSchema,
  intendedRoute: [CodeableConceptSchema],
  cost: [MedicationKnowledgeCostSchema],
  monitoringProgram: [MedicationKnowledgeMonitoringProgramSchema],
  administrationGuidelines: [MedicationKnowledgeAdministrationGuidelinesSchema],
  medicineClassification: [MedicationKnowledgeMedicineClassificationSchema],
  packaging: MedicationKnowledgePackagingSchema,
  drugCharacteristic: [MedicationKnowledgeDrugCharacteristicSchema],
  contraindication: [ReferenceSchema],
  regulatory: [MedicationKnowledgeRegulatorySchema],
  kinetics: [MedicationKnowledgeKineticsSchema],
  typeName: { type: String, default: 'MedicationKnowledge' },
  _type: { type: String, default: 'FHIR::MedicationKnowledge' },
});

class MedicationKnowledge extends mongoose.Document {
  constructor(object) {
    super(object, MedicationKnowledgeSchema);
    this.typeName = 'MedicationKnowledge';
    this._type = 'FHIR::MedicationKnowledge';
  }
}

module.exports.MedicationKnowledgeSchema = MedicationKnowledgeSchema;
module.exports.MedicationKnowledge = MedicationKnowledge;