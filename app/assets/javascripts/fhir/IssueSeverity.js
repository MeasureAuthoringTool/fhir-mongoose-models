const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const IssueSeveritySchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'IssueSeverity' },
  _type: { type: String, default: 'FHIR::IssueSeverity' },
});

class IssueSeverity extends mongoose.Document {
  constructor(object) {
    super(object, IssueSeveritySchema);
    this.typeName = 'IssueSeverity';
    this._type = 'FHIR::IssueSeverity';
  }
}

module.exports.IssueSeveritySchema = IssueSeveritySchema;
module.exports.IssueSeverity = IssueSeverity;
