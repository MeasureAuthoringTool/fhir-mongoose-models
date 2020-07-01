const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const MedicationKnowledgeMonitoringProgramSchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  name: PrimitiveStringSchema,
  typeName: { type: String, default: 'MedicationKnowledgeMonitoringProgram' },
  _type: { type: String, default: 'FHIR::MedicationKnowledgeMonitoringProgram' },
});

class MedicationKnowledgeMonitoringProgram extends mongoose.Document {
  constructor(object) {
    super(object, MedicationKnowledgeMonitoringProgramSchema);
    this.typeName = 'MedicationKnowledgeMonitoringProgram';
    this._type = 'FHIR::MedicationKnowledgeMonitoringProgram';
  }
}

module.exports.MedicationKnowledgeMonitoringProgramSchema = MedicationKnowledgeMonitoringProgramSchema;
module.exports.MedicationKnowledgeMonitoringProgram = MedicationKnowledgeMonitoringProgram;
