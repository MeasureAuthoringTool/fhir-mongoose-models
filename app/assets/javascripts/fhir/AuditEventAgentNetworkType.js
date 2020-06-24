const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const AuditEventAgentNetworkTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'AuditEventAgentNetworkType' },
});

class AuditEventAgentNetworkType extends mongoose.Document {
  constructor(object) {
    super(object, AuditEventAgentNetworkTypeSchema);
    this._type = 'FHIR::AuditEventAgentNetworkType';
  }
};


module.exports.AuditEventAgentNetworkTypeSchema = AuditEventAgentNetworkTypeSchema;
module.exports.AuditEventAgentNetworkType = AuditEventAgentNetworkType;
