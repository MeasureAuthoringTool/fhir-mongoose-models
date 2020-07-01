const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const AuditEventActionSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'AuditEventAction' },
  _type: { type: String, default: 'FHIR::AuditEventAction' },
});

class AuditEventAction extends mongoose.Document {
  constructor(object) {
    super(object, AuditEventActionSchema);
    this.typeName = 'AuditEventAction';
    this._type = 'FHIR::AuditEventAction';
  }
}

module.exports.AuditEventActionSchema = AuditEventActionSchema;
module.exports.AuditEventAction = AuditEventAction;
