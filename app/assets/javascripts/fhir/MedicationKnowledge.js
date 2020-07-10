const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { MedicationKnowledgeAdministrationGuidelinesSchema } = require('./allSchemaHeaders.js');
const { MedicationKnowledgeCostSchema } = require('./allSchemaHeaders.js');
const { MedicationKnowledgeDrugCharacteristicSchema } = require('./allSchemaHeaders.js');
const { MedicationKnowledgeIngredientSchema } = require('./allSchemaHeaders.js');
const { MedicationKnowledgeKineticsSchema } = require('./allSchemaHeaders.js');
const { MedicationKnowledgeMedicineClassificationSchema } = require('./allSchemaHeaders.js');
const { MedicationKnowledgeMonitoringProgramSchema } = require('./allSchemaHeaders.js');
const { MedicationKnowledgeMonographSchema } = require('./allSchemaHeaders.js');
const { MedicationKnowledgePackagingSchema } = require('./allSchemaHeaders.js');
const { MedicationKnowledgeRegulatorySchema } = require('./allSchemaHeaders.js');
const { MedicationKnowledgeRelatedMedicationKnowledgeSchema } = require('./allSchemaHeaders.js');
const { MedicationKnowledgeStatusSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { MedicationKnowledgeSchema } = require('./allSchemaHeaders.js');

MedicationKnowledgeSchema.add(DomainResourceSchema);
MedicationKnowledgeSchema.remove('id');
MedicationKnowledgeSchema.add({
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
});

module.exports.MedicationKnowledgeSchema = MedicationKnowledgeSchema;
