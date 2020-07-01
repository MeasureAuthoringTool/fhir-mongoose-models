const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { LinkageTypeSchema } = require('./LinkageType');
const { ReferenceSchema } = require('./Reference');

const LinkageItemSchema = BackboneElementSchemaFunction({
  type: LinkageTypeSchema,
  resource: ReferenceSchema,
  typeName: { type: String, default: 'LinkageItem' },
  _type: { type: String, default: 'FHIR::LinkageItem' },
});

class LinkageItem extends mongoose.Document {
  constructor(object) {
    super(object, LinkageItemSchema);
    this.typeName = 'LinkageItem';
    this._type = 'FHIR::LinkageItem';
  }
}

module.exports.LinkageItemSchema = LinkageItemSchema;
module.exports.LinkageItem = LinkageItem;
