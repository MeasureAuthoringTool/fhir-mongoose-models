const mongoose = require('mongoose/browser');
const { AuditEventEntityDetailSchema } = require('./AuditEventEntityDetail');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { PrimitiveBase64BinarySchema } = require('./PrimitiveBase64Binary');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const AuditEventEntitySchema = BackboneElementSchemaFunction({
  what: ReferenceSchema,
  type: CodingSchema,
  role: CodingSchema,
  lifecycle: CodingSchema,
  securityLabel: [CodingSchema],
  name: PrimitiveStringSchema,
  description: PrimitiveStringSchema,
  query: PrimitiveBase64BinarySchema,
  detail: [AuditEventEntityDetailSchema],
  typeName: { type: String, default: 'AuditEventEntity' },
  _type: { type: String, default: 'FHIR::AuditEventEntity' },
});

class AuditEventEntity extends mongoose.Document {
  constructor(object) {
    super(object, AuditEventEntitySchema);
    this.typeName = 'AuditEventEntity';
    this._type = 'FHIR::AuditEventEntity';
  }
}

module.exports.AuditEventEntitySchema = AuditEventEntitySchema;
module.exports.AuditEventEntity = AuditEventEntity;
