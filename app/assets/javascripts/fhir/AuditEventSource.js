const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const AuditEventSourceSchema = BackboneElementSchemaFunction({
  site: PrimitiveStringSchema,
  observer: ReferenceSchema,
  type: [CodingSchema],
  typeName: { type: String, default: 'AuditEventSource' },
  _type: { type: String, default: 'FHIR::AuditEventSource' },
});

class AuditEventSource extends mongoose.Document {
  constructor(object) {
    super(object, AuditEventSourceSchema);
    this.typeName = 'AuditEventSource';
    this._type = 'FHIR::AuditEventSource';
  }
}

module.exports.AuditEventSourceSchema = AuditEventSourceSchema;
module.exports.AuditEventSource = AuditEventSource;
