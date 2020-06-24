const mongoose = require('mongoose/browser');
const { AdverseEventSuspectEntityCausalitySchema } = require('./AdverseEventSuspectEntityCausality');
const { BackboneElementSchema } = require('./BackboneElement');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const AdverseEventSuspectEntitySchema = BackboneElementSchemaFunction({
   instance : ReferenceSchema,
   causality : [AdverseEventSuspectEntityCausalitySchema],
   fhirTitle: { type: String, default: 'AdverseEventSuspectEntity' },
});

class AdverseEventSuspectEntity extends mongoose.Document {
  constructor(object) {
    super(object, AdverseEventSuspectEntitySchema);
    this._type = 'FHIR::AdverseEventSuspectEntity';
  }
};


module.exports.AdverseEventSuspectEntitySchema = AdverseEventSuspectEntitySchema;
module.exports.AdverseEventSuspectEntity = AdverseEventSuspectEntity;
