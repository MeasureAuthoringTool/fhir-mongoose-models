const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBase64BinarySchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { MedicationKnowledgeDrugCharacteristicSchema } = require('./allSchemaHeaders.js');

MedicationKnowledgeDrugCharacteristicSchema.add(BackboneElementSchema);
MedicationKnowledgeDrugCharacteristicSchema.remove('id');
MedicationKnowledgeDrugCharacteristicSchema.add({
  type: CodeableConceptSchema,
  valueCodeableConcept: CodeableConceptSchema,
  valueString: PrimitiveStringSchema,
  valueSimpleQuantity: SimpleQuantitySchema,
  valueBase64Binary: PrimitiveBase64BinarySchema,
});

module.exports.MedicationKnowledgeDrugCharacteristicSchema = MedicationKnowledgeDrugCharacteristicSchema;
