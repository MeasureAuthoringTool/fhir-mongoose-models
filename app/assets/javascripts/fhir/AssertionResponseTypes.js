const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const AssertionResponseTypesSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'AssertionResponseTypes' },
  _type: { type: String, default: 'FHIR::AssertionResponseTypes' },
});

class AssertionResponseTypes extends mongoose.Document {
  constructor(object) {
    super(object, AssertionResponseTypesSchema);
    this.typeName = 'AssertionResponseTypes';
    this._type = 'FHIR::AssertionResponseTypes';
  }
}

module.exports.AssertionResponseTypesSchema = AssertionResponseTypesSchema;
module.exports.AssertionResponseTypes = AssertionResponseTypes;
