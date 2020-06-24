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

const MedicationRequestSubstitutionSchema = BackboneElementSchemaFunction({
   allowedBoolean : Boolean,
   allowedCodeableConcept : CodeableConceptSchema,
   reason : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'MedicationRequestSubstitution' },
});

class MedicationRequestSubstitution extends mongoose.Document {
  constructor(object) {
    super(object, MedicationRequestSubstitutionSchema);
    this._type = 'FHIR::MedicationRequestSubstitution';
  }
};


module.exports.MedicationRequestSubstitutionSchema = MedicationRequestSubstitutionSchema;
module.exports.MedicationRequestSubstitution = MedicationRequestSubstitution;
