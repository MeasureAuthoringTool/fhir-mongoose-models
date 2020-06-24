const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { SystemRestfulInteractionSchema } = require('./SystemRestfulInteraction');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CapabilityStatementRestInteractionSchema = BackboneElementSchemaFunction({
   code : SystemRestfulInteractionSchema,
   documentation : String,
   fhirTitle: { type: String, default: 'CapabilityStatementRestInteraction' },
});

class CapabilityStatementRestInteraction extends mongoose.Document {
  constructor(object) {
    super(object, CapabilityStatementRestInteractionSchema);
    this._type = 'FHIR::CapabilityStatementRestInteraction';
  }
};


module.exports.CapabilityStatementRestInteractionSchema = CapabilityStatementRestInteractionSchema;
module.exports.CapabilityStatementRestInteraction = CapabilityStatementRestInteraction;
