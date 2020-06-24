const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicationKnowledgeMonographSchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   source : ReferenceSchema,
   fhirTitle: { type: String, default: 'MedicationKnowledgeMonograph' },
});

class MedicationKnowledgeMonograph extends mongoose.Document {
  constructor(object) {
    super(object, MedicationKnowledgeMonographSchema);
    this._type = 'FHIR::MedicationKnowledgeMonograph';
  }
};


module.exports.MedicationKnowledgeMonographSchema = MedicationKnowledgeMonographSchema;
module.exports.MedicationKnowledgeMonograph = MedicationKnowledgeMonograph;
