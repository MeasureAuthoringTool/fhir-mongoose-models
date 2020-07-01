const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MoneySchema } = require('./Money');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const MedicationKnowledgeCostSchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  source: PrimitiveStringSchema,
  cost: MoneySchema,
  typeName: { type: String, default: 'MedicationKnowledgeCost' },
  _type: { type: String, default: 'FHIR::MedicationKnowledgeCost' },
});

class MedicationKnowledgeCost extends mongoose.Document {
  constructor(object) {
    super(object, MedicationKnowledgeCostSchema);
    this.typeName = 'MedicationKnowledgeCost';
    this._type = 'FHIR::MedicationKnowledgeCost';
  }
}

module.exports.MedicationKnowledgeCostSchema = MedicationKnowledgeCostSchema;
module.exports.MedicationKnowledgeCost = MedicationKnowledgeCost;
