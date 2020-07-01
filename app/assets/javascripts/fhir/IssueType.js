const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const IssueTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'IssueType' },
  _type: { type: String, default: 'FHIR::IssueType' },
});

class IssueType extends mongoose.Document {
  constructor(object) {
    super(object, IssueTypeSchema);
    this.typeName = 'IssueType';
    this._type = 'FHIR::IssueType';
  }
}

module.exports.IssueTypeSchema = IssueTypeSchema;
module.exports.IssueType = IssueType;
