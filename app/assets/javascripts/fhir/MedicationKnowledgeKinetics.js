const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { DurationSchema } = require('./Duration');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const MedicationKnowledgeKineticsSchema = BackboneElementSchemaFunction({
  areaUnderCurve: [SimpleQuantitySchema],
  lethalDose50: [SimpleQuantitySchema],
  halfLifePeriod: DurationSchema,
  typeName: { type: String, default: 'MedicationKnowledgeKinetics' },
  _type: { type: String, default: 'FHIR::MedicationKnowledgeKinetics' },
});

class MedicationKnowledgeKinetics extends mongoose.Document {
  constructor(object) {
    super(object, MedicationKnowledgeKineticsSchema);
    this.typeName = 'MedicationKnowledgeKinetics';
    this._type = 'FHIR::MedicationKnowledgeKinetics';
  }
}

module.exports.MedicationKnowledgeKineticsSchema = MedicationKnowledgeKineticsSchema;
module.exports.MedicationKnowledgeKinetics = MedicationKnowledgeKinetics;
