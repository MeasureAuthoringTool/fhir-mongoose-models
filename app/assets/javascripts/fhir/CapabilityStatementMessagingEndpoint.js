const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CapabilityStatementMessagingEndpointSchema = BackboneElementSchemaFunction({
   protocol : CodingSchema,
   address : String,
   fhirTitle: { type: String, default: 'CapabilityStatementMessagingEndpoint' },
});

class CapabilityStatementMessagingEndpoint extends mongoose.Document {
  constructor(object) {
    super(object, CapabilityStatementMessagingEndpointSchema);
    this._type = 'FHIR::CapabilityStatementMessagingEndpoint';
  }
};


module.exports.CapabilityStatementMessagingEndpointSchema = CapabilityStatementMessagingEndpointSchema;
module.exports.CapabilityStatementMessagingEndpoint = CapabilityStatementMessagingEndpoint;
