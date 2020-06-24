const mongoose = require('mongoose/browser');
const { AuditEventAgentNetworkTypeSchema } = require('./AuditEventAgentNetworkType');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const AuditEventAgentNetworkSchema = BackboneElementSchemaFunction({
   address : String,
   type : AuditEventAgentNetworkTypeSchema,
   fhirTitle: { type: String, default: 'AuditEventAgentNetwork' },
});

class AuditEventAgentNetwork extends mongoose.Document {
  constructor(object) {
    super(object, AuditEventAgentNetworkSchema);
    this._type = 'FHIR::AuditEventAgentNetwork';
  }
};


module.exports.AuditEventAgentNetworkSchema = AuditEventAgentNetworkSchema;
module.exports.AuditEventAgentNetwork = AuditEventAgentNetwork;
