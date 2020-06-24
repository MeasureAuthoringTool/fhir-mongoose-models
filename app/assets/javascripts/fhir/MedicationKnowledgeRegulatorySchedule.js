const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicationKnowledgeRegulatoryScheduleSchema = BackboneElementSchemaFunction({
   schedule : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'MedicationKnowledgeRegulatorySchedule' },
});

class MedicationKnowledgeRegulatorySchedule extends mongoose.Document {
  constructor(object) {
    super(object, MedicationKnowledgeRegulatoryScheduleSchema);
    this._type = 'FHIR::MedicationKnowledgeRegulatorySchedule';
  }
};


module.exports.MedicationKnowledgeRegulatoryScheduleSchema = MedicationKnowledgeRegulatoryScheduleSchema;
module.exports.MedicationKnowledgeRegulatorySchedule = MedicationKnowledgeRegulatorySchedule;
