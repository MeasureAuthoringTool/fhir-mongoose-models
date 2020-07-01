const mongoose = require('mongoose/browser');
const { AuditEventAgentNetworkTypeSchema } = require('./AuditEventAgentNetworkType');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const AuditEventAgentNetworkSchema = BackboneElementSchemaFunction({
  address: PrimitiveStringSchema,
  type: AuditEventAgentNetworkTypeSchema,
  typeName: { type: String, default: 'AuditEventAgentNetwork' },
  _type: { type: String, default: 'FHIR::AuditEventAgentNetwork' },
});

class AuditEventAgentNetwork extends mongoose.Document {
  constructor(object) {
    super(object, AuditEventAgentNetworkSchema);
    this.typeName = 'AuditEventAgentNetwork';
    this._type = 'FHIR::AuditEventAgentNetwork';
  }
}

module.exports.AuditEventAgentNetworkSchema = AuditEventAgentNetworkSchema;
module.exports.AuditEventAgentNetwork = AuditEventAgentNetwork;
