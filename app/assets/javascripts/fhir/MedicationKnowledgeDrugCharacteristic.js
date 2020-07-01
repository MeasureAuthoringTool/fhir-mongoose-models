const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveBase64BinarySchema } = require('./PrimitiveBase64Binary');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const MedicationKnowledgeDrugCharacteristicSchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  valueCodeableConcept: CodeableConceptSchema,
  valueString: PrimitiveStringSchema,
  valueSimpleQuantity: SimpleQuantitySchema,
  valueBase64Binary: PrimitiveBase64BinarySchema,
  typeName: { type: String, default: 'MedicationKnowledgeDrugCharacteristic' },
  _type: { type: String, default: 'FHIR::MedicationKnowledgeDrugCharacteristic' },
});

class MedicationKnowledgeDrugCharacteristic extends mongoose.Document {
  constructor(object) {
    super(object, MedicationKnowledgeDrugCharacteristicSchema);
    this.typeName = 'MedicationKnowledgeDrugCharacteristic';
    this._type = 'FHIR::MedicationKnowledgeDrugCharacteristic';
  }
}

module.exports.MedicationKnowledgeDrugCharacteristicSchema = MedicationKnowledgeDrugCharacteristicSchema;
module.exports.MedicationKnowledgeDrugCharacteristic = MedicationKnowledgeDrugCharacteristic;
