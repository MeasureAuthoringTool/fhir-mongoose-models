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

const MedicationAdministrationPerformerSchema = BackboneElementSchemaFunction({
   function : CodeableConceptSchema,
   actor : ReferenceSchema,
   fhirTitle: { type: String, default: 'MedicationAdministrationPerformer' },
});

class MedicationAdministrationPerformer extends mongoose.Document {
  constructor(object) {
    super(object, MedicationAdministrationPerformerSchema);
    this._type = 'FHIR::MedicationAdministrationPerformer';
  }
};


module.exports.MedicationAdministrationPerformerSchema = MedicationAdministrationPerformerSchema;
module.exports.MedicationAdministrationPerformer = MedicationAdministrationPerformer;
