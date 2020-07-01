const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const LinkageTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'LinkageType' },
  _type: { type: String, default: 'FHIR::LinkageType' },
});

class LinkageType extends mongoose.Document {
  constructor(object) {
    super(object, LinkageTypeSchema);
    this.typeName = 'LinkageType';
    this._type = 'FHIR::LinkageType';
  }
}

module.exports.LinkageTypeSchema = LinkageTypeSchema;
module.exports.LinkageType = LinkageType;
