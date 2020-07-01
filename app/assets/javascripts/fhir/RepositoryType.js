const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const RepositoryTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'RepositoryType' },
  _type: { type: String, default: 'FHIR::RepositoryType' },
});

class RepositoryType extends mongoose.Document {
  constructor(object) {
    super(object, RepositoryTypeSchema);
    this.typeName = 'RepositoryType';
    this._type = 'FHIR::RepositoryType';
  }
}

module.exports.RepositoryTypeSchema = RepositoryTypeSchema;
module.exports.RepositoryType = RepositoryType;
