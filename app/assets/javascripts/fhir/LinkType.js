const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const LinkTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'LinkType' },
  _type: { type: String, default: 'FHIR::LinkType' },
});

class LinkType extends mongoose.Document {
  constructor(object) {
    super(object, LinkTypeSchema);
    this.typeName = 'LinkType';
    this._type = 'FHIR::LinkType';
  }
}

module.exports.LinkTypeSchema = LinkTypeSchema;
module.exports.LinkType = LinkType;
