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

const MedicinalProductInteractionInteractantSchema = BackboneElementSchemaFunction({
   itemReference : ReferenceSchema,
   itemCodeableConcept : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'MedicinalProductInteractionInteractant' },
});

class MedicinalProductInteractionInteractant extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductInteractionInteractantSchema);
    this._type = 'FHIR::MedicinalProductInteractionInteractant';
  }
};


module.exports.MedicinalProductInteractionInteractantSchema = MedicinalProductInteractionInteractantSchema;
module.exports.MedicinalProductInteractionInteractant = MedicinalProductInteractionInteractant;
