const mongoose = require('mongoose/browser');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { LinkageItemSchema } = require('./LinkageItem');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { ReferenceSchema } = require('./Reference');

const LinkageSchema = DomainResourceSchemaFunction({
  active: PrimitiveBooleanSchema,
  author: ReferenceSchema,
  item: [LinkageItemSchema],
  typeName: { type: String, default: 'Linkage' },
  _type: { type: String, default: 'FHIR::Linkage' },
});

class Linkage extends mongoose.Document {
  constructor(object) {
    super(object, LinkageSchema);
    this.typeName = 'Linkage';
    this._type = 'FHIR::Linkage';
  }
}

module.exports.LinkageSchema = LinkageSchema;
module.exports.Linkage = Linkage;
