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

const MedicationKnowledgeMonitoringProgramSchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   name : String,
   fhirTitle: { type: String, default: 'MedicationKnowledgeMonitoringProgram' },
});

class MedicationKnowledgeMonitoringProgram extends mongoose.Document {
  constructor(object) {
    super(object, MedicationKnowledgeMonitoringProgramSchema);
    this._type = 'FHIR::MedicationKnowledgeMonitoringProgram';
  }
};


module.exports.MedicationKnowledgeMonitoringProgramSchema = MedicationKnowledgeMonitoringProgramSchema;
module.exports.MedicationKnowledgeMonitoringProgram = MedicationKnowledgeMonitoringProgram;
