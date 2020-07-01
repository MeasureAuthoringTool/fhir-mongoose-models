const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { NamingSystemIdentifierTypeSchema } = require('./NamingSystemIdentifierType');
const { PeriodSchema } = require('./Period');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const NamingSystemUniqueIdSchema = BackboneElementSchemaFunction({
  type: NamingSystemIdentifierTypeSchema,
  value: PrimitiveStringSchema,
  preferred: PrimitiveBooleanSchema,
  comment: PrimitiveStringSchema,
  period: PeriodSchema,
  typeName: { type: String, default: 'NamingSystemUniqueId' },
  _type: { type: String, default: 'FHIR::NamingSystemUniqueId' },
});

class NamingSystemUniqueId extends mongoose.Document {
  constructor(object) {
    super(object, NamingSystemUniqueIdSchema);
    this.typeName = 'NamingSystemUniqueId';
    this._type = 'FHIR::NamingSystemUniqueId';
  }
}

module.exports.NamingSystemUniqueIdSchema = NamingSystemUniqueIdSchema;
module.exports.NamingSystemUniqueId = NamingSystemUniqueId;
