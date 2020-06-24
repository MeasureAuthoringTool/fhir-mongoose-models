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

const AdverseEventSuspectEntityCausalitySchema = BackboneElementSchemaFunction({
   assessment : CodeableConceptSchema,
   productRelatedness : String,
   author : ReferenceSchema,
   method : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'AdverseEventSuspectEntityCausality' },
});

class AdverseEventSuspectEntityCausality extends mongoose.Document {
  constructor(object) {
    super(object, AdverseEventSuspectEntityCausalitySchema);
    this._type = 'FHIR::AdverseEventSuspectEntityCausality';
  }
};


module.exports.AdverseEventSuspectEntityCausalitySchema = AdverseEventSuspectEntityCausalitySchema;
module.exports.AdverseEventSuspectEntityCausality = AdverseEventSuspectEntityCausality;
