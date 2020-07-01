const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const AssertionOperatorTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'AssertionOperatorType' },
  _type: { type: String, default: 'FHIR::AssertionOperatorType' },
});

class AssertionOperatorType extends mongoose.Document {
  constructor(object) {
    super(object, AssertionOperatorTypeSchema);
    this.typeName = 'AssertionOperatorType';
    this._type = 'FHIR::AssertionOperatorType';
  }
}

module.exports.AssertionOperatorTypeSchema = AssertionOperatorTypeSchema;
module.exports.AssertionOperatorType = AssertionOperatorType;
