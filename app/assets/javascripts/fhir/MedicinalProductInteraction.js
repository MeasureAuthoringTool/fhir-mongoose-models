const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { MedicinalProductInteractionInteractantSchema } = require('./MedicinalProductInteractionInteractant');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicinalProductInteractionSchema = DomainResourceSchemaFunction({
   subject : [ReferenceSchema],
   description : String,
   interactant : [MedicinalProductInteractionInteractantSchema],
   type : CodeableConceptSchema,
   effect : CodeableConceptSchema,
   incidence : CodeableConceptSchema,
   management : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'MedicinalProductInteraction' },
});

class MedicinalProductInteraction extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductInteractionSchema);
    this._type = 'FHIR::MedicinalProductInteraction';
  }
};


module.exports.MedicinalProductInteractionSchema = MedicinalProductInteractionSchema;
module.exports.MedicinalProductInteraction = MedicinalProductInteraction;
