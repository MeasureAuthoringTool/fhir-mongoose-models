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

const MedicationDispensePerformerSchema = BackboneElementSchemaFunction({
   function : CodeableConceptSchema,
   actor : ReferenceSchema,
   fhirTitle: { type: String, default: 'MedicationDispensePerformer' },
});

class MedicationDispensePerformer extends mongoose.Document {
  constructor(object) {
    super(object, MedicationDispensePerformerSchema);
    this._type = 'FHIR::MedicationDispensePerformer';
  }
};


module.exports.MedicationDispensePerformerSchema = MedicationDispensePerformerSchema;
module.exports.MedicationDispensePerformer = MedicationDispensePerformer;
