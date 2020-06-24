const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { MedicationKnowledgeRegulatoryMaxDispenseSchema } = require('./MedicationKnowledgeRegulatoryMaxDispense');
const { MedicationKnowledgeRegulatoryScheduleSchema } = require('./MedicationKnowledgeRegulatorySchedule');
const { MedicationKnowledgeRegulatorySubstitutionSchema } = require('./MedicationKnowledgeRegulatorySubstitution');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicationKnowledgeRegulatorySchema = BackboneElementSchemaFunction({
   regulatoryAuthority : ReferenceSchema,
   substitution : [MedicationKnowledgeRegulatorySubstitutionSchema],
   schedule : [MedicationKnowledgeRegulatoryScheduleSchema],
   maxDispense : MedicationKnowledgeRegulatoryMaxDispenseSchema,
   fhirTitle: { type: String, default: 'MedicationKnowledgeRegulatory' },
});

class MedicationKnowledgeRegulatory extends mongoose.Document {
  constructor(object) {
    super(object, MedicationKnowledgeRegulatorySchema);
    this._type = 'FHIR::MedicationKnowledgeRegulatory';
  }
};


module.exports.MedicationKnowledgeRegulatorySchema = MedicationKnowledgeRegulatorySchema;
module.exports.MedicationKnowledgeRegulatory = MedicationKnowledgeRegulatory;
