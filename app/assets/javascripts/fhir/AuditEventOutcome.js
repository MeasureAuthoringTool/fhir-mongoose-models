const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const AuditEventOutcomeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'AuditEventOutcome' },
  _type: { type: String, default: 'FHIR::AuditEventOutcome' },
});

class AuditEventOutcome extends mongoose.Document {
  constructor(object) {
    super(object, AuditEventOutcomeSchema);
    this.typeName = 'AuditEventOutcome';
    this._type = 'FHIR::AuditEventOutcome';
  }
}

module.exports.AuditEventOutcomeSchema = AuditEventOutcomeSchema;
module.exports.AuditEventOutcome = AuditEventOutcome;
