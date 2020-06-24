const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { TypeRestfulInteractionSchema } = require('./TypeRestfulInteraction');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CapabilityStatementRestResourceInteractionSchema = BackboneElementSchemaFunction({
   code : TypeRestfulInteractionSchema,
   documentation : String,
   fhirTitle: { type: String, default: 'CapabilityStatementRestResourceInteraction' },
});

class CapabilityStatementRestResourceInteraction extends mongoose.Document {
  constructor(object) {
    super(object, CapabilityStatementRestResourceInteractionSchema);
    this._type = 'FHIR::CapabilityStatementRestResourceInteraction';
  }
};


module.exports.CapabilityStatementRestResourceInteractionSchema = CapabilityStatementRestResourceInteractionSchema;
module.exports.CapabilityStatementRestResourceInteraction = CapabilityStatementRestResourceInteraction;
