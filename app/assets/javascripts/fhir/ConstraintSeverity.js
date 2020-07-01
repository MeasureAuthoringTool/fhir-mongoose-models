const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ConstraintSeveritySchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ConstraintSeverity' },
  _type: { type: String, default: 'FHIR::ConstraintSeverity' },
});

class ConstraintSeverity extends mongoose.Document {
  constructor(object) {
    super(object, ConstraintSeveritySchema);
    this.typeName = 'ConstraintSeverity';
    this._type = 'FHIR::ConstraintSeverity';
  }
}

module.exports.ConstraintSeveritySchema = ConstraintSeveritySchema;
module.exports.ConstraintSeverity = ConstraintSeverity;
