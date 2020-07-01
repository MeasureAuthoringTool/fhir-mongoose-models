const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { MedicationKnowledgeRegulatoryMaxDispenseSchema } = require('./MedicationKnowledgeRegulatoryMaxDispense');
const { MedicationKnowledgeRegulatoryScheduleSchema } = require('./MedicationKnowledgeRegulatorySchedule');
const { MedicationKnowledgeRegulatorySubstitutionSchema } = require('./MedicationKnowledgeRegulatorySubstitution');
const { ReferenceSchema } = require('./Reference');

const MedicationKnowledgeRegulatorySchema = BackboneElementSchemaFunction({
  regulatoryAuthority: ReferenceSchema,
  substitution: [MedicationKnowledgeRegulatorySubstitutionSchema],
  schedule: [MedicationKnowledgeRegulatoryScheduleSchema],
  maxDispense: MedicationKnowledgeRegulatoryMaxDispenseSchema,
  typeName: { type: String, default: 'MedicationKnowledgeRegulatory' },
  _type: { type: String, default: 'FHIR::MedicationKnowledgeRegulatory' },
});

class MedicationKnowledgeRegulatory extends mongoose.Document {
  constructor(object) {
    super(object, MedicationKnowledgeRegulatorySchema);
    this.typeName = 'MedicationKnowledgeRegulatory';
    this._type = 'FHIR::MedicationKnowledgeRegulatory';
  }
}

module.exports.MedicationKnowledgeRegulatorySchema = MedicationKnowledgeRegulatorySchema;
module.exports.MedicationKnowledgeRegulatory = MedicationKnowledgeRegulatory;
