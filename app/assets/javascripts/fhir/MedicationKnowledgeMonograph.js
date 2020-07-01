const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');

const MedicationKnowledgeMonographSchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  source: ReferenceSchema,
  typeName: { type: String, default: 'MedicationKnowledgeMonograph' },
  _type: { type: String, default: 'FHIR::MedicationKnowledgeMonograph' },
});

class MedicationKnowledgeMonograph extends mongoose.Document {
  constructor(object) {
    super(object, MedicationKnowledgeMonographSchema);
    this.typeName = 'MedicationKnowledgeMonograph';
    this._type = 'FHIR::MedicationKnowledgeMonograph';
  }
}

module.exports.MedicationKnowledgeMonographSchema = MedicationKnowledgeMonographSchema;
module.exports.MedicationKnowledgeMonograph = MedicationKnowledgeMonograph;
