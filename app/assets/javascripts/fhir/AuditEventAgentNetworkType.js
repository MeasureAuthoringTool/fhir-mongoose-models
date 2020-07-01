const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const AuditEventAgentNetworkTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'AuditEventAgentNetworkType' },
  _type: { type: String, default: 'FHIR::AuditEventAgentNetworkType' },
});

class AuditEventAgentNetworkType extends mongoose.Document {
  constructor(object) {
    super(object, AuditEventAgentNetworkTypeSchema);
    this.typeName = 'AuditEventAgentNetworkType';
    this._type = 'FHIR::AuditEventAgentNetworkType';
  }
}

module.exports.AuditEventAgentNetworkTypeSchema = AuditEventAgentNetworkTypeSchema;
module.exports.AuditEventAgentNetworkType = AuditEventAgentNetworkType;
