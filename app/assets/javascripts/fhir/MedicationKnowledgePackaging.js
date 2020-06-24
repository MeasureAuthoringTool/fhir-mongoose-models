const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicationKnowledgePackagingSchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   quantity : SimpleQuantitySchema,
   fhirTitle: { type: String, default: 'MedicationKnowledgePackaging' },
});

class MedicationKnowledgePackaging extends mongoose.Document {
  constructor(object) {
    super(object, MedicationKnowledgePackagingSchema);
    this._type = 'FHIR::MedicationKnowledgePackaging';
  }
};


module.exports.MedicationKnowledgePackagingSchema = MedicationKnowledgePackagingSchema;
module.exports.MedicationKnowledgePackaging = MedicationKnowledgePackaging;
