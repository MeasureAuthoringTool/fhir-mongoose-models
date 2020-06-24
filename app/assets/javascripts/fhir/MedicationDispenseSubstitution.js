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

const MedicationDispenseSubstitutionSchema = BackboneElementSchemaFunction({
   wasSubstituted : Boolean,
   type : CodeableConceptSchema,
   reason : [CodeableConceptSchema],
   responsibleParty : [ReferenceSchema],
   fhirTitle: { type: String, default: 'MedicationDispenseSubstitution' },
});

class MedicationDispenseSubstitution extends mongoose.Document {
  constructor(object) {
    super(object, MedicationDispenseSubstitutionSchema);
    this._type = 'FHIR::MedicationDispenseSubstitution';
  }
};


module.exports.MedicationDispenseSubstitutionSchema = MedicationDispenseSubstitutionSchema;
module.exports.MedicationDispenseSubstitution = MedicationDispenseSubstitution;
