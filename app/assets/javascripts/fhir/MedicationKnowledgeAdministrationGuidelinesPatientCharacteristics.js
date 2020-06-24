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

const MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsSchema = BackboneElementSchemaFunction({
   characteristicCodeableConcept : CodeableConceptSchema,
   characteristicSimpleQuantity : SimpleQuantitySchema,
   value : [String],
   fhirTitle: { type: String, default: 'MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics' },
});

class MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics extends mongoose.Document {
  constructor(object) {
    super(object, MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsSchema);
    this._type = 'FHIR::MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics';
  }
};


module.exports.MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsSchema = MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsSchema;
module.exports.MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics = MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics;
