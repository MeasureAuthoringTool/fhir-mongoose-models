const mongoose = require('mongoose/browser');
const { AuditEventAgentNetworkSchema } = require('./AuditEventAgentNetwork');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CodingSchema } = require('./Coding');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { ReferenceSchema } = require('./Reference');

const AuditEventAgentSchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  role: [CodeableConceptSchema],
  who: ReferenceSchema,
  altId: PrimitiveStringSchema,
  name: PrimitiveStringSchema,
  requestor: PrimitiveBooleanSchema,
  location: ReferenceSchema,
  policy: [PrimitiveUriSchema],
  media: CodingSchema,
  network: AuditEventAgentNetworkSchema,
  purposeOfUse: [CodeableConceptSchema],
  typeName: { type: String, default: 'AuditEventAgent' },
  _type: { type: String, default: 'FHIR::AuditEventAgent' },
});

class AuditEventAgent extends mongoose.Document {
  constructor(object) {
    super(object, AuditEventAgentSchema);
    this.typeName = 'AuditEventAgent';
    this._type = 'FHIR::AuditEventAgent';
  }
}

module.exports.AuditEventAgentSchema = AuditEventAgentSchema;
module.exports.AuditEventAgent = AuditEventAgent;
