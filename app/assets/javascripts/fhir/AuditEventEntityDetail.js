const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveBase64BinarySchema } = require('./PrimitiveBase64Binary');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const AuditEventEntityDetailSchema = BackboneElementSchemaFunction({
  type: PrimitiveStringSchema,
  valueString: PrimitiveStringSchema,
  valueBase64Binary: PrimitiveBase64BinarySchema,
  typeName: { type: String, default: 'AuditEventEntityDetail' },
  _type: { type: String, default: 'FHIR::AuditEventEntityDetail' },
});

class AuditEventEntityDetail extends mongoose.Document {
  constructor(object) {
    super(object, AuditEventEntityDetailSchema);
    this.typeName = 'AuditEventEntityDetail';
    this._type = 'FHIR::AuditEventEntityDetail';
  }
}

module.exports.AuditEventEntityDetailSchema = AuditEventEntityDetailSchema;
module.exports.AuditEventEntityDetail = AuditEventEntityDetail;
