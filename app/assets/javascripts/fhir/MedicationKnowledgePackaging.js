const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const MedicationKnowledgePackagingSchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  quantity: SimpleQuantitySchema,
  typeName: { type: String, default: 'MedicationKnowledgePackaging' },
  _type: { type: String, default: 'FHIR::MedicationKnowledgePackaging' },
});

class MedicationKnowledgePackaging extends mongoose.Document {
  constructor(object) {
    super(object, MedicationKnowledgePackagingSchema);
    this.typeName = 'MedicationKnowledgePackaging';
    this._type = 'FHIR::MedicationKnowledgePackaging';
  }
}

module.exports.MedicationKnowledgePackagingSchema = MedicationKnowledgePackagingSchema;
module.exports.MedicationKnowledgePackaging = MedicationKnowledgePackaging;
