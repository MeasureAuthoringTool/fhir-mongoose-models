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

const MedicationKnowledgeRegulatorySubstitutionSchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   allowed : Boolean,
   fhirTitle: { type: String, default: 'MedicationKnowledgeRegulatorySubstitution' },
});

class MedicationKnowledgeRegulatorySubstitution extends mongoose.Document {
  constructor(object) {
    super(object, MedicationKnowledgeRegulatorySubstitutionSchema);
    this._type = 'FHIR::MedicationKnowledgeRegulatorySubstitution';
  }
};


module.exports.MedicationKnowledgeRegulatorySubstitutionSchema = MedicationKnowledgeRegulatorySubstitutionSchema;
module.exports.MedicationKnowledgeRegulatorySubstitution = MedicationKnowledgeRegulatorySubstitution;
