const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { DurationSchema } = require('./Duration');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const MedicationKnowledgeRegulatoryMaxDispenseSchema = BackboneElementSchemaFunction({
  quantity: SimpleQuantitySchema,
  period: DurationSchema,
  typeName: { type: String, default: 'MedicationKnowledgeRegulatoryMaxDispense' },
  _type: { type: String, default: 'FHIR::MedicationKnowledgeRegulatoryMaxDispense' },
});

class MedicationKnowledgeRegulatoryMaxDispense extends mongoose.Document {
  constructor(object) {
    super(object, MedicationKnowledgeRegulatoryMaxDispenseSchema);
    this.typeName = 'MedicationKnowledgeRegulatoryMaxDispense';
    this._type = 'FHIR::MedicationKnowledgeRegulatoryMaxDispense';
  }
}

module.exports.MedicationKnowledgeRegulatoryMaxDispenseSchema = MedicationKnowledgeRegulatoryMaxDispenseSchema;
module.exports.MedicationKnowledgeRegulatoryMaxDispense = MedicationKnowledgeRegulatoryMaxDispense;
